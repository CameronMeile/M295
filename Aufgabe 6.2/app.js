const express = require('express')
const app = express();
const swagger = require('swagger-express-router');
const swaggerDocument = require('./swagger.json');
const useBasePath = true; //whether to use the basePath from the swagger document when setting up the routes (defaults to false)
const middlewareObj = {
    'middleware-name1': require('./middleware/middleware-name1')
};
swagger.setUpRoutes(middlewareObj, app, swaggerDocument, useBasePath);