const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
/* const swaggerAutogen = require('swagger-autogen')(); */
const port = 3000;

/* const doc = {
  info: {
    title: 'My API',
    description: 'Description'
  },
  host: 'localhost:3000'
}; */

/* const outputFile = './swagger-output.json';
swaggerAutogen(outputFile, 3000, doc); */

app.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/swagger-ui', (req, res) => {
    res.sendFile('/workspaces/M295/Cameron Meile LBb/swagger-output.json');
});


app.listen(port, () => {
  console.log('Server is running on port 3000');
});