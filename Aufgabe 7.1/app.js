// npm install express-session

const express = require('express');
const session = require('express-session');
const app = express();
const port = 3000;

app.use(session({
  secret: 'supersecret',
	resave: false,
	saveUninitialized: true,
  cookie: {}
}));

app.get('/', function (request, response, _) {
  // request.session is the object that holds the information of this specific session
  request.session.views = (request.session.views || 0) + 1
  console.log(request.session)

  response.end(request.session.views + ' views')
});

const nameRouter = require('./routes/names');
app.use('/name', nameRouter);

app.listen(port, () => {
    console.log('Server is running on port 3000');
  });