# ProductRecommendations

## Related Projects
- https://github.com/PetToyCo/photo-gallery
- https://github.com/PetToyCo/description_directions_attributes_
- https://github.com/PetToyCo/mainTitle_price
- https://github.com/PetToyCo/reviews

## Usage

1. This service makes requests to four other services to generate the response it sends back to client. Those four services are the first four listed above in "Related Projects". You have to download each repo and follow enough of their ReadMes to seed the database for each repo and start their servers.
2. In terminal >cd "directory to project's root folder, without the quotes"
3. >npm install
4. If you do not already have the database seeded with mock data, follow the steps in "Seeding Database" below, or if you want to reseed.
5. Start the server with >npm run server
6. Since the data returned by the server will depend on the data actually in your local instances for each service, it is recommended to comment out 165 - 184 in __tests__/server/server.test.js before proceeding to step 7. This test passes for me and I went through all data to manually inspect if data did match. If you want to check for yourself that server sends back correct data, in correct order; the hardcoded order is:
{
    customer: [101, 102, 103, 104, 105],
    treat: [120, 135, 150, 155, 170],
    pet: [199, 198, 197, 196, 195],
}

You can then use Postman to make a GET request to http://127.0.0.1:3004/productRecommendations/100 to get the data you would have received. Note that you won't see any of the above numbers. Instead, each position in the arrays is an "recommendation object" with data related to the specific item number listed above. You can then spot check in your MongoDB that the data matches and is in the correct array/index position within that array.

Each "recommendation object" should have the form:
{
  'image': "string received from photo gallery service",
  'title': "string received from description/etc service",
  'brand': "string received from description/etc service",
  'reviewAverage': "string received from reviews service",
  'numberOfReviews': "number received from reviews service",
  'price': "number received from mainTitle_price service",
  'currency': '$',
},

7. Test the server with >npm run testServer

## Seeding Database
1. Still in project's root directory, in terminal >npm run testSeed
2. If all tests pass, >npm run seedDb
3. If you want to reseed the database with fresh data, you first have to drop "PTCRecommendedProducts" from your MongoDB instance
