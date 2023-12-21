const express = require('express');
const app = express();
const port = 3000;

// npm install express express-session
const session = require('express-session');

// Hier lade ich die Express JSON Middleware, damit ich an meine Endpunkte JSON-Daten im Body senden kann und diese direkt als JavaScript Objekt verfügbar werden.
app.use(express.json());

const LoginData = { email: "desk@library.example", password: "m295" }

app.use(session({
  secret: 'supersecret',
	resave: false,
	saveUninitialized: false,
  cookie: {}
}));

app.get('/', (req, res) => {
    res.send('Aufgabe 7.2 | Login with next()');
});

app.post('/login', function (request, response) {
	const { email, password } = request.body

	// Check the credentials against store
	if (email?.toLowerCase() == LoginData.email && password == LoginData.password) {

		// Link email to session
		request.session.email = email

		return response.status(201).json({ email: request.session.email })
	}

  return response.status(401).json({ error: "Invalid credentials" })
});

app.delete('/logout', function (request, response) {

	// Check if email is set in session
	if (request.session.email) {

		// Reset link of session to email
		request.session.email = null

		return response.status(204).send()
	}

  return response.status(401).json({ error: "Not logged in" })
});

const lendsRouter = require('./routes/lends');
app.use('/lends', lendsRouter);

const booksRouter = require('./routes/books');
app.use('/books ', booksRouter);

// Server
app.listen(port, () => {
  console.log(`Bookstore app listening on port ${port}`);
});