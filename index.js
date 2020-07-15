const express = require('express');
const morgan = require('morgan');
const serveStatic = require('serve-static');
const axios = require('axios');
const { retrieveRecommendations } = require('./db/database.js');

const server = express();

server.use(morgan('dev'));
server.use((req, res, next) => {
  const { referer } = req.headers;
  if (referer) {
    if (referer.includes('http://127.0.0.1:3000')) {
      res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:3000');
    } else if (referer.includes('http://localhost')) {
      res.header('Access-Control-Allow-Origin', 'http://localhost');
    }
  }

  next();
});
server.use(serveStatic('./client/public'));

server.get('/productRecommendations/:itemId', (req, res) => {
  const { itemId } = req.params;
  const parsedItemId = Number.parseInt(itemId, 10);

  if (parsedItemId < 100 || parsedItemId > 199) {
    res.status(404).send();
  } else {
    const recommendations = {};
    const axiosCalls = [];
    const axiosCallsSpread = [];
    const recommendationsParsed = {};

    retrieveRecommendations(itemId, recommendations)
      .then(() => {
        for (const key in recommendations) {
          const allCalls = [[], [], [], [], [], key];
          const productRecommendations = recommendations[key];

          for (let i = 0; i < productRecommendations.length; i++) {
            const innerArray = allCalls[i];
            const recommendedItemId = productRecommendations[i];

            innerArray.push(axios.get(`http://127.0.0.1:3003/itemImages/${recommendedItemId}/mainImage`));
            innerArray.push(axios.get(`http://127.0.0.1:3002/itemInformation/${recommendedItemId}`));
            innerArray.push(axios.get(`http://127.0.0.1:3001/averageReviews/${recommendedItemId}`));
            innerArray.push(axios.get(`http://127.0.0.1:3005/itemPrice/${recommendedItemId}`));
          }
          axiosCalls.push(allCalls);
        }
      })
      .then(() => {
        for (let i = 0; i < axiosCalls.length; i++) {
          const innerCalls = axiosCalls[i];

          for (let j = 0; j < 5; j++) {
            const itemSpecificCalls = innerCalls[j];

            for (let k = 0; k < itemSpecificCalls.length; k++) {
              axiosCallsSpread.push(itemSpecificCalls[k]);
            }
          }
        }

        return Promise.all(axiosCallsSpread);
      })
      .then(() => {
        for (let i = 0; i < axiosCalls.length; i++) {
          const innerCalls = axiosCalls[i];
          const key = innerCalls[5];
          recommendationsParsed[key] = [];

          //normally, j < innerCalls.length but it contains a string at position five. So instead j <= 4
          for (let j = 0; j <= 4; j++) {
            const itemSpecificCalls = innerCalls[j];
            const recommendationObject = {};

            recommendationObject.itemId = recommendations[key][j];
            itemSpecificCalls[0].then((response) => {
              const { data } = response;

              recommendationObject.image = data.image;
            });

            itemSpecificCalls[1].then((response) => {
              const { data } = response;

              recommendationObject.title = data.title;
              recommendationObject.brand = data.primaryBrand;
            });

            itemSpecificCalls[2].then((response) => {
              const { data } = response;

              recommendationObject.reviewAverage = data.reviewAverage;
              recommendationObject.numberOfReviews = data.numberOfReviews;
            });

            itemSpecificCalls[3].then((response) => {
              const { data } = response;

              recommendationObject.price = data.price;
              recommendationObject.currency = data.currency;
            });

            recommendationsParsed[key].push(recommendationObject);
          }
        }
      })
      .then(() => {
        res.status(200).send(recommendationsParsed);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send();
      });
  }
});

server.listen(3004);
