# js-automation

# API tests
To run API tests:
 use https://hub.docker.com/r/swaggerapi/petstore 
 
command to run the image locally on http://localhost:10080 
  - docker pull swaggerapi/petstore
  - docker run -d -e SWAGGER_HOST=http://petstore.swagger.io -e SWAGGER_URL=http://localhost:10080 -e SWAGGER_BASE_PATH=/v2 -p 10080:8080 swaggerapi/petstore
