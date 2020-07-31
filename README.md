# ProductRecommendations

## Related Projects
- https://github.com/PetToyCo/photo-gallery
- https://github.com/PetToyCo/description_directions_attributes_
- https://github.com/PetToyCo/mainTitle_price
- https://github.com/PetToyCo/reviews

The above Related Projects are essential for this service to run since this service makes GET requests to all of them. You will ALSO need a proxy to take advantage of this service. The proxy can be found at https://github.com/PetToyCo/nick-proxy-server

Other related Projects that are not fully essential to this service are:
- https://github.com/PetToyCo/deliver-pickup

## Table of Contents

1. Usage Development/Service Mode
2. Usage with a Proxy Server
3. Usage as a Deployed Service
4. Seeding Database
5. To Upscale Mock Data
6. Requirements
7. Development
8. images
9. Special Note on Tests

## Usage Development/Service Mode

1. This service makes requests to four other services to generate the response it sends back to client. Those four services are the first four listed above in "Related Projects". You have to download each repo and follow enough of their ReadMes to seed the database for each repo and then start their servers.
2. In terminal >cd "directory to project's root folder, without the quotes"
3. >npm install
4. If you do not already have the database seeded with mock data, follow the steps in "Seeding Database" below, or if you want to reseed.
5. Start the server with >npm run server. At this point, everything is ready to be used in Service Mode. However, you will have to alter the proxy's html file to take advantage of the service. To do so, see the section below titled "Usage with a Proxy Server". If you are currently developing (or doing a code review) and want to run tests, continue to step 6.
6. If you plan on running the tests for the server, follow the instructions below in the section titled "Special note on tests" before proceeding to step 7. Step 8 and further is if you want to run tests on the service components.
7. Test the server with >npm run testServer
8.  run >npm run test
9. At this point, you can also see the service running as a standalone by visiting http://127.0.0.1:3004 in a browser


## Usage with a Proxy Server
To add this service to a proxy, you need to add three <div> tags to the proxy's index.html:

1. <div id="RECOMMENDATIONS_CUSTOMER_ATTACH_POINT"></div>
2. <div id="RECOMMENDATIONS_TREAT_ATTACH_POINT"></div>
3. <div id="RECOMMENDATIONS_PET_ATTACH_POINT"></div>

The first and second <div> tags should be added just above the mount point for the description_directions_attributes_ service while the third tag should be added after the mount point for the reviews service

To retrieve the bundle associated with this service: use the script tag
<script src="http://127.0.0.1:3004/app.js" async></script>

## Usage as a Deployed Service

You have two options. In ./bashScripts, there are some example bash scripts you can use to semi-automate the process. This is option 1. However, if you have yet to deploy this project before, it is recommended you follow the "Manual Deployment Instructions" for the first deployment.

Semi-automated Deployment Instructions:
1. In terminal, >cd "project's root directory path, without quotes"

2. I Locate the following two files and open them: ./client/src/enviromentalVariables.js and ./db/enviromentalVariables.js

 Then comment out the "Service and Development mode environmental variables" and uncomment the "Deployment mode environmental variables". You may also have to update the IP address if the AWS instance you will be deploying this service from was stopped or terminated since the last time you followed these instructions. If so, only update the IP_ADDRESS key with the new IP address as its value. And only for the Deployment mode. Also, if the IP address for IP_ADDRESS_E and/or IP_ADDRESS_K changed, you will have to update the appropriate address
 
 Save all changes

3.  If you already followed this step and steps 4/5, skip to step 6. Otherwise: At ./bashScripts, there are seven files. They each have an extension .example.sh. Duplicate each of these and rename so .example copy.sh is now just .sh.

Example: bashScript4.example copy.sh should now be bashScript4.sh

IMPORTANT: If you do not follow these instructions exactly, the .gitignore and .dockerignore will not properly ignore the files you just duplicated/renamed. To check that you correctly renamed them all, in terminal >git status

If you renamed correctly, none of the files should show up as changes that needed to be staged/committed

4. You will now need to open each file and make changes for each variable. Variables come in the format: variable=[[[Instructions for what this variable value should be changed to]]]

For each variable, you replace all the [ ] brackets and everything inside them with the actual value IMPORTANT: two things: one, some variables will need to be changed everytime you want to deploy a new build. Those are mentioned in comments found within each file AND below in step 6. Two, DO NOT use string brackets around values. This is not javascript and so you do not need '' or ""

5. You will have to make it so three of the files you created can be edited and executed by only the root user on your comp. Do so with the following commands
>chmod 700 ./bashScripts/bashScript.sh
>chmod 700 ./bashScripts/bashScript2.sh
>chmod 700 ./bashScripts/bashScript3.sh

You do not need to do this with the last four files since you won't be executing them directly. 

6. Now follow this process to deploy:
- Make sure all IP addresses and script tags are accurate(see step 2 above)
- >./bashScripts/bashScript.sh
- The above script will build your docker image locally. At the end of the build, it will report the image's id. Copy and paste that to the imageID variable in bashScript2.sh. Also update the version variable in that file.
- >./bashScripts/bashScript2.sh   You will have to enter your Docker Hub password when prompted
- While waiting for the above command to finish running, you can open a second terminal window, cd to project's root directory, and run >./bashScripts/bashScript3.sh
- Once both script 2 and 3 are done running, you will have your image on Docker Hub and you will be logged into your AWS server, in the second terminal window. It is this window that you will use for the remaining steps.
- If you already have an older image running on the AWS instance. You have to: 1. >docker ps     and then copy and paste the correct container's ID into bashScript4.sh, for the runningContainerID variable. 2. the same command already gives you access to Image ID also, so copy and paste the correct image's ID for the runningImageID variable in the same file. 3. Copy and paste the entire contents of bashScript4.sh (EXCEPT the last line) into the second terminal, hit enter, then enter y when prompted. Once those scripts finihs running, copy just the last line into the terminal and hit enter.
- To pull the image you built and pushed to Docker Hub, you first have to login to Docker Hub with >docker login --username="your username, without quotes". Then in bashScript5.sh, update the version variable with the same version you gave it, then copy and paste all the code into the second terminal, and hit enter. You will have to enter your Docker Hub password when prompted
- If you do not already have a MongoDB image running on the AWS instance, you must update and run the code in bashScript7.sh before proceeding to the last step. If the DB is already running, proceed to the last step. 

NOTE: you might already have a network and volume running on the instance. If you do, follow the instructions in bashScript7.sh to acquire them, then copy and paste them to networkName and volumeName variables, respectively. Also make sure, in bashScript6.sh, that the networkName variable matches

NOTE 2. The network alias should match the Deployment DATABASE_LOCAL_ADDRESS variable in db/environmentalVariables.js

NOTE3: the mongo version expected for this project is 4.2.6

- Lastly, use >docker images     to get the Image ID for the image you just pulled, then copy and paste it into bashScript6.sh for the variable  imageID. Then copy and paste the file's entire contents into the second terminal and hit enter. The instance should now be running. Visit http://"your proxy instance's IP address, without quotes":3000/product?itemID=100 to confirm





Manual Deployment Instructions
1. Locate the following two files and open them: ./client/src/environmentalVariables.js and ./db/environmentalVariables.js
2. In each, comment out the "Service and Development mode environmental variables" and uncomment the "Deployment mode environmental variables". You may also have to update the IP address if the AWS instance you will be deploying this service from was stopped or terminated since the last time you followed these instructions. If so, only update the IP_ADDRESS key with the new IP address as its value. And only for the Deployment mode. Also, if the IP address for the service at port 3005 or 3001 also changed, you wll have to update the Deployment mode IP_ADDRESS_E. Lastly, if the IP address for the service at port 3004 also changed, you wll have to update the Deployment mode IP_ADDRESS_K
3. From projects root directory >npm run build
4. Now build the docker image with >docker build -t "name of image, without quotes" . (yes, that dot is necessary for the command). If you want to assign a tag, don't forget :tagName after the image name. If you don't supply the tag name, :latest will be automatically appended. I currently use product-recommendations-service as my image name.
5. If not already done so, create account at hub.docker.com and login. Then create a public repo. The name of the repo I currently use is fec-product-recommendations-service.
6. In terminal, you can directly login into your Docker Hub account with >docker login --username="your username, without quotes". When prompted, enter your password.
7. The image you just built should report the image ID at the end of the build. Or you can find it by >docker images. In the printout caused by this command, the image should be the first one listed if you haven't built any other images since building the one for this service. With either method, copy the image's ID number for use in step 8
8. Before you push, you have to tag the image with >docker tag "image ID, without quotes" "Docker Hub username, without quotes"/"repo name from step 5, without quotes":"tag name, without quotes". Earlier, it was OK to let :latest be automatically appended but for this tag name, you will probably want to assign a version number or some other uniquely identifying feature.
9.  To push: >docker push "Docker Hub username, without quotes"/"repo name you tagged the image with in step 8, without quotes".
10. With the image on Docker Hub, you now need to get it onto your AWS instance that should have been fired up before (or during) step 2.
11. In terminal, >cd "file directory where .pem file is saved for the AWS instance".
12. If not done already, make sure only the root user on your computer can access the .pem file with >chmod 400 "name of .pem file, without quotes".pem
13. Then SSH into your AWS instance with >ssh -i "name of .pem file, without quotes".pem ec2-user@"the IP address of the AWS instance"
14. If not already done so, install docker onto the instance with >sudo yum update -y && sudo yum install -y docker && sudo service docker start. You can then add the ec2-user to the docker group so all docker commands can be run without sudo by >sudo usermod -a -G docker ec2-user. You then have to exit for this change to take effect using >exit. Re-sign-in to your AWS instance by repeating step 13.
15. You can now run Docker commands the same way you run them on your local terminal. Login to Docker (step 6).
16. Pull the image with >docker pull "Docker Hub username, without quotes"/"repo name from step 5, without quotes":"tag name, without quotes"
17. Before you can use the service's image, you first need to have a running MongoDB image on your AWS instance. Futhermore, both the MongoDB image's container and the container for your service's image will need to connect to the same network. If the network does not already exist >docker network create "Name of network, without quotes". I am currently using "services-connect-db" as the name of my network. As such, the command to run the MongoDB image references this (command found in step 18)
18. To actually run the MongoDb image (if not already running from a previous deployment) >docker run -d \
--network services-connect-db --network-alias mongo \
-v "name of volume, without quotes":/etc/mongo \
mongo:4.2.6

For name of volume, you do not need to create it ahead of time since, if it doesn't exist, the above command will first create it and then connect the container to it. I am currently using "db-storage" as the name of my volume. You have to keep using that name if you want to keep using the data already stored in the volume. Otherwise, you can create a new volume by upplying a different name.

19. Find your service's image ID with >docker images. Copy it for use in step 20.
20. Fire up the service's image with >docker -dp 3004:3004 \
--network services-connect-db \
"image ID, without quotes"

21. At this point, the service should be live and, if your proxy is also live, you can see it in action by going to http://"AWS instance IP address for the instance the proxy is on":3000/product?itemID="value 100 to 199, without quotes".

## Seeding Database
1. Still in project's root directory, in terminal >npm run testSeed
2. If all tests pass, >npm run seedDb
3. If you want to reseed the database with fresh data, you first have to drop "PTCRecommendedProducts" from your MongoDB instance

## To Upscale Mock Data:
1. The two files you need to alter are: ./__tests_/seed/seed.test.js and ./db/seed.js
2. In both, search for a const named maximumId. Since there is hardcoded data for item 100, it is recommended you only change maximumId and leave minimumId untouched. As such you change maximumId according to following equation:

maximumId = numberOfDesiredRecords + minimumId - 1

3. The maximumId in both files has to match or the tests won't pass

## Requirements

- Node 12.16.1
- MongoDB 4.2.6


## Development

### Installing Dependencies

From within the root directory: npm install

## Images
The folder client/public contains numerous images. As noted in a text file contined within that folder (imgAttribution.txt), those images were: 

"All images taken from https://www.petco.com/shop/en/petcostore/product/cat/cat-toys/leaps-and-bounds-faux-leather-mouse-cat-toy-with-rattle-and-catnip June/July 2020"


## Special Note on Tests
Since the data returned by the server will depend on the data actually in your local instances for each service, it is recommended to comment out 23 - 42 in __tests__/server/server.test.js before proceeding to step 7. This test passes for me and I went through all data to manually inspect if data did match. If you want to check for yourself that server sends back correct data, in correct order; the hardcoded order is:
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

