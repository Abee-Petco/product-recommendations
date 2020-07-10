const { allCustomerRP, allTreatRP, allPetRP } = require('../../db/seed.js');

const maximumId = 199;
const minimumId = 100;

describe('The seed.js script correctly', () => {
  test('generates 100 records for every subservice', () => {
    expect(allCustomerRP.length).toEqual(100);
    expect(allTreatRP.length).toEqual(100);
    expect(allPetRP.length).toEqual(100);
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
