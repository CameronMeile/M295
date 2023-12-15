const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/swagger-ui', (req, res) => {
    res.sendFile('/workspaces/M295/Aufgabe 6.2/swagger.json');
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});