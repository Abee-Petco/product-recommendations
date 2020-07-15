const expectedDataForItem100 = require('../setup/mockData.js');

describe('For the server endpoint', () => {
  describe('"/productRecommendations/:itemId"', () => {
    test('returns a 404 when the itemId is below 100', () => {
      return axios.get('http://127.0.0.1:3004/productRecommendations/99')
        .catch((err) => {
          const { status } = err.response;

          expect(status).toEqual(404);
        });
    });

    test('returns a 404 when the itemId is above 199', () => {
      return axios.get('http://127.0.0.1:3004/productRecommendations/200')
        .catch((err) => {
          const { status } = err.response;

          expect(status).toEqual(404);
        });
    });

    test('returns the expected data when itemId is valid', () => {
      return axios.get('http://127.0.0.1:3004/productRecommendations/100')
        .then((response) => {
          const { data } = response;

          for (const key in data) {
            const receivedData = data[key];
            const expectedData = expectedDataForItem100[key];

            for (let i = 0; i < expectedData.length; i++) {
              const receivedRecommendedProduct = receivedData[i];
              const expectedRecommendedProduct = expectedData[i];

              for (const key in expectedRecommendedProduct) {
                expect(receivedRecommendedProduct[key]).toEqual(expectedRecommendedProduct[key]);
              }
            }
          }
        });
    });

    test('returns a 200 when the itemId is above 100', () => {
      return axios.get('http://127.0.0.1:3004/productRecommendations/100')
        .then((response) => {
          const { status } = response;

          expect(status).toEqual(200);
        });
    });
  });
});
