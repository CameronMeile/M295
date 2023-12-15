const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`); // Start the server and log a message indicating the port it's listening on
});

//npm init
//npm install express
//node index.js