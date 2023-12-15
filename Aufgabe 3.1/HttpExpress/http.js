const express = require('express')
const app = express()
const port = 3000
let url = "https://app-prod-ws.meteoswiss-app.ch/v1/plzDetail?plz=818000";

function createip() {
  return '$[url]$[request.params.zip]00'
}

app.get('/:zip', (request, response) => {
  app.get({
    url: createip(request.params.zip),
    json: true,
    headers: { 'User-Agent': 'request' }
  }, (err, res, data) => {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else {
      // data is already parsed as JSON:
      console.log(data.currentWeather.temperatureMax);
      response.send(String(data.currentWeather.temperatureMax));
    }
  });
  response.send(request.params.zip);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//npm init
//npm install express
//node index.js