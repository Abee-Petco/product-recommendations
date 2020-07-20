const { allCustomerRP, allTreatRP, allPetRP } = require('../../db/seed.js');

const maximumId = 199;
const minimumId = 100;

describe('The seed.js script correctly', () => {
  test('generates 100 records for every subservice', () => {
    expect(allCustomerRP.length).toEqual(maximumId - minimumId + 1);
    expect(allTreatRP.length).toEqual(maximumId - minimumId + 1);
    expect(allPetRP.length).toEqual(maximumId - minimumId + 1);
  });

  describe('generates an itemId for every position in the recommendedProducts key, for every object', () => {
    test('in allCustomerRP, that isn\'t equal to the itemId key', () => {
      allCustomerRP.forEach((object) => {
        const { itemId, recommendedProducts } = object;

        recommendedProducts.forEach((recommendedItemId) => {
          expect(recommendedItemId).toEqual(expect.not.stringMatching(itemId));
        });
      });
    });

    test('in allTreatRP, that isn\'t equal to the itemId key', () => {
      allTreatRP.forEach((object) => {
        const { itemId, recommendedProducts } = object;

        recommendedProducts.forEach((recommendedItemId) => {
          expect(recommendedItemId).toEqual(expect.not.stringMatching(itemId));
        });
      });
    });

    test('in allPetRP, that isn\'t equal to the itemId key', () => {
      allPetRP.forEach((object) => {
        const { itemId, recommendedProducts } = object;

        recommendedProducts.forEach((recommendedItemId) => {
          expect(recommendedItemId).toEqual(expect.not.stringMatching(itemId));
        });
      });
    });
  });

  describe('generates an itemId that is within the minimumId - maximumId range', () => {
    test('for every itemId key in every allCustomerRP object', () => {
      allCustomerRP.forEach((object) => {
        const itemIdParsed = Number.parseInt(object.itemId, 10);
        expect(itemIdParsed).toBeGreaterThanOrEqual(minimumId);
        expect(itemIdParsed).toBeLessThanOrEqual(maximumId);
      });
    });

    test('for every itemId key in every allTreatRP object', () => {
      allTreatRP.forEach((object) => {
        const itemIdParsed = Number.parseInt(object.itemId, 10);
        expect(itemIdParsed).toBeGreaterThanOrEqual(minimumId);
        expect(itemIdParsed).toBeLessThanOrEqual(maximumId);
      });
    });

    test('for every itemId key in every allPetRP object', () => {
      allPetRP.forEach((object) => {
        const itemIdParsed = Number.parseInt(object.itemId, 10);
        expect(itemIdParsed).toBeGreaterThanOrEqual(minimumId);
        expect(itemIdParsed).toBeLessThanOrEqual(maximumId);
      });
    });

    test('for every itemId key, for each position in the recommendedProducts key, in every allCustomerRP object', () => {
      allCustomerRP.forEach((object) => {
        const { recommendedProducts } = object;

        recommendedProducts.forEach((itemIdString) => {
          const itemIdParsed = Number.parseInt(itemIdString, 10);
          expect(itemIdParsed).toBeGreaterThanOrEqual(minimumId);
          expect(itemIdParsed).toBeLessThanOrEqual(maximumId);
        });
      });
    });

    test('for every itemId key, for each position in the recommendedProducts key, in every allTreatRP object', () => {
      allTreatRP.forEach((object) => {
        const { recommendedProducts } = object;

        recommendedProducts.forEach((itemIdString) => {
          const itemIdParsed = Number.parseInt(itemIdString, 10);
          expect(itemIdParsed).toBeGreaterThanOrEqual(minimumId);
          expect(itemIdParsed).toBeLessThanOrEqual(maximumId);
        });
      });
    });

    test('for every itemId key, for each position in the recommendedProducts key, in every allPetRP object', () => {
      allPetRP.forEach((object) => {
        const { recommendedProducts } = object;

        recommendedProducts.forEach((itemIdString) => {
          const itemIdParsed = Number.parseInt(itemIdString, 10);
          expect(itemIdParsed).toBeGreaterThanOrEqual(minimumId);
          expect(itemIdParsed).toBeLessThanOrEqual(maximumId);
        });
      });
    });
  });
});
