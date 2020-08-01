const express = require('express');
const morgan = require('morgan');
const serveStatic = require('serve-static');
const axios = require('axios');
const { retrieveRecommendations } = require('./db/database.js');
const { IP_ADDRESS, IP_ADDRESS_E, IP_ADDRESS_K } = require('./db/environmentalVariables.js');

const server = express();

server.use(morgan('dev'));
server.use((req, res, next) => {
  const { referer } = req.headers;
  if (referer) {
    if (referer.includes(`http://${IP_ADDRESS}:3000`)) {
      res.header('Access-Control-Allow-Origin', `http://${IP_ADDRESS}:3000`);
    } else if (referer.includes(`http://${IP_ADDRESS_E}:3000`)) {
      res.header('Access-Control-Allow-Origin', `http://${IP_ADDRESS_E}:3000`);
    } else if (referer.includes(`http://${IP_ADDRESS_K}:3000`)) {
      res.header('Access-Control-Allow-Origin', `http://${IP_ADDRESS_K}:3000`);
    } else if (referer.includes('http://localhost')) {
      res.header('Access-Control-Allow-Origin', 'http://localhost');
    }
  }

  next();
});

server.use('*.js', (req, res, next) => {
  req.url += '.gz';
  res.header('Content-Encoding', 'gzip');
  next();
});

server.use(serveStatic('./client/public'));

// server.get('/productRecommendations/:itemId', (req, res) => {
//   const { itemId } = req.params;
//   const parsedItemId = Number.parseInt(itemId, 10);

//   if (parsedItemId < 100 || parsedItemId > 199) {
//     res.status(404).send();
//   } else {
//     const recommendations = {};
//     const axiosCalls = [];
//     const axiosCallsSpread = [];
//     const recommendationsParsed = {};

//     retrieveRecommendations(itemId, recommendations)
//       .then(() => {
//         for (const key in recommendations) {
//           const allCalls = [[], [], [], [], [], key];
//           const productRecommendations = recommendations[key];

//           for (let i = 0; i < productRecommendations.length; i++) {
//             const innerArray = allCalls[i];
//             const recommendedItemId = productRecommendations[i];

//             innerArray.push(axios.get(`http://${IP_ADDRESS_K}:3003/itemImages/${recommendedItemId}/mainImage`));
//             innerArray.push(axios.get(`http://${IP_ADDRESS_E}:3002/itemInformation/${recommendedItemId}`));
//             innerArray.push(axios.get(`http://${IP_ADDRESS}:3001/averageReviews/${recommendedItemId}`));
//             innerArray.push(axios.get(`http://${IP_ADDRESS_E}:3005/itemPrice/${recommendedItemId}`));
//           }
//           axiosCalls.push(allCalls);
//         }
//       })
//       .then(() => {
//         for (let i = 0; i < axiosCalls.length; i++) {
//           const innerCalls = axiosCalls[i];

//           for (let j = 0; j < 5; j++) {
//             const itemSpecificCalls = innerCalls[j];

//             for (let k = 0; k < itemSpecificCalls.length; k++) {
//               axiosCallsSpread.push(itemSpecificCalls[k]);
//             }
//           }
//         }

//         return Promise.all(axiosCallsSpread);
//       })
//       .then(() => {
//         for (let i = 0; i < axiosCalls.length; i++) {
//           const innerCalls = axiosCalls[i];
//           const key = innerCalls[5];
//           recommendationsParsed[key] = [];

//           //normally, j < innerCalls.length but it contains a string at position five. So instead j <= 4
//           for (let j = 0; j <= 4; j++) {
//             const itemSpecificCalls = innerCalls[j];
//             const recommendationObject = {};

//             recommendationObject.itemId = recommendations[key][j];
//             itemSpecificCalls[0].then((response) => {
//               const { data } = response;

//               recommendationObject.image = data.image;
//             });

//             itemSpecificCalls[1].then((response) => {
//               const { data } = response;

//               recommendationObject.title = data.title;
//               recommendationObject.brand = data.primaryBrand;
//             });

//             itemSpecificCalls[2].then((response) => {
//               const { data } = response;

//               recommendationObject.reviewAverage = data.reviewAverage;
//               recommendationObject.numberOfReviews = data.numberOfReviews;
//             });

//             itemSpecificCalls[3].then((response) => {
//               const { data } = response;

//               recommendationObject.price = data.price;
//               recommendationObject.currency = data.currency;
//             });

//             recommendationsParsed[key].push(recommendationObject);
//           }
//         }
//       })
//       .then(() => {
//         res.status(200).send(recommendationsParsed);
//       })
//       .catch((err) => {
//         console.log(err);
//         res.status(500).send();
//       });
//   }
// });

server.get('/productRecommendations/:itemId', (req, res) => {
  const { itemId } = req.params;
  const parsedItemId = Number.parseInt(itemId, 10);

  if (parsedItemId < 100 || parsedItemId > 199) {
    res.status(404).send();
  } else {
    const recommendations = {};
    const axiosCalls = [];
    const allItemIds = [];
    const recommendationsParsed = {};
    const recommendationsResponse = { customer: [], treat: [], pet: [] };
    let reviewsData;
    let itemInfoData;
    let itemImagesData;
    let itemPriceData;

    retrieveRecommendations(itemId, recommendations)
      .then(() => {
        for (const key in recommendations) {
          const productRecommendations = recommendations[key];
          recommendationsParsed[key] = {};
          for (let i = 0; i < productRecommendations.length; i++) {
            const recommendedItemId = productRecommendations[i];
            allItemIds.push(recommendedItemId);
            recommendationsParsed[key][recommendedItemId] = {};
          }
        }

        const reqParamater = `array${allItemIds.join(',')}`;

        axiosCalls.push(axios.get(`http://${IP_ADDRESS}:3001/averageReviews/${reqParamater}`));
        axiosCalls.push(axios.get(`http://${IP_ADDRESS_E}:3002/itemInformation/${reqParamater}`));
        axiosCalls.push(axios.get(`http://${IP_ADDRESS_K}:3003/itemImages/${reqParamater}/mainImage`));
        axiosCalls.push(axios.get(`http://${IP_ADDRESS_E}:3005/itemPrice/${reqParamater}`));

        return Promise.all(axiosCalls);
      })
      .then(() => {
        axiosCalls[0].then((response) => {
          reviewsData = response.data;
        });

        axiosCalls[1].then((response) => {
          itemInfoData = response.data;
        });

        axiosCalls[2].then((response) => {
          itemImagesData = response.data;
        });

        axiosCalls[3].then((response) => {
          itemPriceData = response.data;
        });
      })
      .then(function checkData() {
        if (reviewsData) {
          for (let i = 0; i < reviewsData.length; i++) {
            const { itemId } = reviewsData[i];

            if (recommendationsParsed.customer[itemId]) {
              recommendationsParsed.customer[itemId].itemId = itemId;
              recommendationsParsed.customer[itemId].reviewAverage = reviewsData[i].reviewAverage;
              recommendationsParsed.customer[itemId].numberOfReviews = reviewsData[i].numberOfReviews;

              const index = recommendations.customer.indexOf(itemId);

              recommendationsResponse.customer[index] = recommendationsParsed.customer[itemId];
            }

            if (recommendationsParsed.treat[itemId]) {
              recommendationsParsed.treat[itemId].itemId = itemId;
              recommendationsParsed.treat[itemId].reviewAverage = reviewsData[i].reviewAverage;
              recommendationsParsed.treat[itemId].numberOfReviews = reviewsData[i].numberOfReviews;

              const index = recommendations.treat.indexOf(itemId);

              recommendationsResponse.treat[index] = recommendationsParsed.treat[itemId];
            }

            if (recommendationsParsed.pet[itemId]) {
              recommendationsParsed.pet[itemId].itemId = itemId;
              recommendationsParsed.pet[itemId].reviewAverage = reviewsData[i].reviewAverage;
              recommendationsParsed.pet[itemId].numberOfReviews = reviewsData[i].numberOfReviews;

              const index = recommendations.pet.indexOf(itemId);

              recommendationsResponse.pet[index] = recommendationsParsed.pet[itemId];
            }
          }

          for (let i = 0; i < itemInfoData.length; i++) {
            const { itemId } = itemInfoData[i];

            if (recommendationsParsed.customer[itemId]) {
              recommendationsParsed.customer[itemId].title = itemInfoData[i].title;
              recommendationsParsed.customer[itemId].brand = itemInfoData[i].primaryBrand;
            }

            if (recommendationsParsed.treat[itemId]) {
              recommendationsParsed.treat[itemId].title = itemInfoData[i].title;
              recommendationsParsed.treat[itemId].brand = itemInfoData[i].primaryBrand;
            }

            if (recommendationsParsed.pet[itemId]) {
              recommendationsParsed.pet[itemId].title = itemInfoData[i].title;
              recommendationsParsed.pet[itemId].brand = itemInfoData[i].primaryBrand;
            }
          }

          for (let i = 0; i < itemImagesData.length; i++) {
            const { itemId } = itemImagesData[i];

            if (recommendationsParsed.customer[itemId]) {
              recommendationsParsed.customer[itemId].image = itemImagesData[i].image;
            }

            if (recommendationsParsed.treat[itemId]) {
              recommendationsParsed.treat[itemId].image = itemImagesData[i].image;
            }

            if (recommendationsParsed.pet[itemId]) {
              recommendationsParsed.pet[itemId].image = itemImagesData[i].image;
            }
          }

          for (let i = 0; i < itemPriceData.length; i++) {
            const { itemId } = itemPriceData[i];

            if (recommendationsParsed.customer[itemId]) {
              recommendationsParsed.customer[itemId].price = itemPriceData[i].price;
              recommendationsParsed.customer[itemId].currency = itemPriceData[i].currency;
            }

            if (recommendationsParsed.treat[itemId]) {
              recommendationsParsed.treat[itemId].price = itemPriceData[i].price;
              recommendationsParsed.treat[itemId].currency = itemPriceData[i].currency;
            }

            if (recommendationsParsed.pet[itemId]) {
              recommendationsParsed.pet[itemId].price = itemPriceData[i].price;
              recommendationsParsed.pet[itemId].currency = itemPriceData[i].currency;
            }
          }
        } else {
          return new Promise((resolve) => { resolve(); }).then(checkData);
        }
      })
      .then(() => {
        res.status(200).send(recommendationsResponse);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send();
      });
  }
});

server.get('/product', (req, res) => {
  const { itemID } = req.query;
  const itemIdNumber = Number.parseInt(itemID, 10);

  if (itemIdNumber < 100 || itemIdNumber > 199 || itemIdNumber === undefined) {
    res.status(404).send('itemID invalid');
  } else {
    res.sendFile(`${__dirname}/client/public/index.html`);
  }
});

server.listen(3004);
