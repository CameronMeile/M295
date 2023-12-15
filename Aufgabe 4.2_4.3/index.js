const express = require('express')
const app = express()
const port = 3000

// Generated JSON Book list
const lend = [
    {
        id: "1",
        customer_id: "1001",
        isbn: "9780061120084",
        borrowed_at: "2023-12-10",
        returned_at: "2023-12-15"
    },
    {
        id: "2",
        customer_id: "1002",
        isbn: "9781984801810",
        borrowed_at: "2023-11-28",
        returned_at: "2023-12-05"
    },
    {
        id: "3",
        customer_id: "1003",
        isbn: "9780451524935",
        borrowed_at: "2023-12-03",
        returned_at: "2023-12-10"
    },
    {
        id: "4",
        customer_id: "1004",
        isbn: "9780140283334",
        borrowed_at: "2023-12-08",
        returned_at: "2023-12-13"
    },
    {
        id: "5",
        customer_id: "1005",
        isbn: "9780062315007",
        borrowed_at: "2023-12-01",
        returned_at: "2023-12-08"
    }
];
const books = [
    {
        isbn: "9780061120084",
        title: "To Kill a Mockingbird",
        year: "1960",
        author: "Harper Lee",
    },
    {
        isbn: "9781984801810",
        title: "Educated: A Memoir",
        year: "2018",
        author: "Tara Westover",
    },
    {
        isbn: "9780451524935",
        title: "1984",
        year: "1949",
        author: "George Orwell",
    },
    {
        isbn: "9780140283334",
        title: "The Catcher in the Rye",
        year: "1951",
        author: "J.D. Salinger",
    },
    {
        isbn: "9780062315007",
        title: "The Alchemist",
        year: "1988",
        author: "Paulo Coelho",
    }
];

// GET | JSON File back
app.get('/books', (req, res) => {
    res.json(books);
});

// :isbn is parameter for get
app.get('/books/:isbn', (req, res) => {
    const { isbn } = req.params; // Extract the 'isbn' parameter from the request URL and assign it to the variable 'isbn'
    const book = books.find((book) => book.isbn === isbn); // Find the book with the matching 'isbn' in the 'books' array

    if (book) { // If a matching book is found
        res.send(book); // Send the book in the response
    } else {
        res.status(404).send('Book not found'); // If no matching book is found, send a 404 status and an error message
    }
});

// POST | Add new Book to Books
app.post('/books', (req, res) => {
    let requestBody = '';

    // Listen for the 'data' event to capture chunks of the request body
    req.on('data', (chunk) => {
        requestBody += chunk;
    });

    // Listen for the 'end' event to indicate that the entire request body has been received
    req.on('end', () => {
        // Parse the request body as JSON into a JavaScript object
        const newBook = JSON.parse(requestBody);

        // Add the new book to the 'books' array
        books.push(newBook);

        // Send a response indicating that the book was added successfully with a status code of 201
        res.status(201).send('Book added successfully');
    });
});

// PUT | Überschreibung der isbn von einem Buch
app.put('/books/:isbn', (req, res) => {
    const { isbn } = req.params; // Extract the 'isbn' parameter from the request URL
    let body = ''; // Initialize an empty string to store the request body

    req.on('data', chunk => {
        body += chunk.toString(); // Concatenate chunks of the request body
    });

    req.on('end', () => {
        try {
            const requestBody = JSON.parse(body); // Parse the request body as JSON
            const newIsbn = requestBody.isbn; // Extract the new 'isbn' value from the request body

            const book = books.find((book) => book.isbn === isbn); // Find the book with the matching 'isbn'

            if (book) { // If a matching book is found
                book.isbn = newIsbn; // Update the 'isbn' property of the book
                res.send(book); // Send the updated book in the response
            } else {
                res.status(404).send('Book not found'); // If no matching book is found, send a 404 status and an error message
            }
        } catch (error) {
            res.status(400).send('Invalid JSON payload'); // If there's an error parsing the JSON or accessing the 'isbn' property, send a 400 status and an error message
        }
    });
});

app.delete('/books/:isbn', (req, res) => {
    const { isbn } = req.params; // Extract the 'isbn' parameter from the request

    const bookIndex = books.findIndex((book) => book.isbn === isbn); // Find the index of the book with matching 'isbn'

    if (bookIndex !== -1) { // If a matching book is found
        books.splice(bookIndex, 1); // Remove the book from the 'books' array using the 'splice' method
        res.send('Book deleted successfully'); // Send a success message
    } else {
        res.status(404).send('Book not found'); // If no matching book is found, send a 404 status and an error message
    }
});

//////////////////////////////////////////////////////////////

// GET | Gets only alle Lend books
app.get('/lends', (req, res) => {
    res.json(lend); // Output JSON with all lend books
});

// GET | Get all Lend books with isbn
app.get('/lends/:id', (req, res) => {
    const { id } = req.params; // Extract the 'id' parameter from the request

    const lendObject = lend.find(lend => lend.id === id); // Find the lend object based on the lend ID
    const lendISBN = lendObject ? lendObject.isbn : null; // Retrieve the ISBN from the lend object

    const book = books.find(book => book.isbn === lendISBN); // Find the book object based on the ISBN

    if (book) { // If a matching book is found
        res.json(book); // Send the book in the response
    } else {
        res.status(404).send('Book not found or Is Lend'); // If no matching book is found, send a 404 status and an error message
    }
})

// POST | Lend a new book
app.post('/lends', (req, res) => {
    let requestBody = '';

    // Listen for the 'data' event to capture chunks of the request body
    req.on('data', (chunk) => {
        requestBody += chunk;
    });

    // Listen for the 'end' event to indicate that the entire request body has been received
    req.on('end', () => {
        // Parse the request body as JSON into a JavaScript object
        const newlend = JSON.parse(requestBody);

        // Add the new book to the 'lend' array
        lend.push(newlend);

        // Send a response indicating that the lend was added successfully with a status code of 201
        res.status(201).send('Lend added successfully');
    });
});

// PATCH | A Lend should get updated
app.patch('/lends/:id', (req, res) => {
    const { id } = req.params; // Extract the 'id' parameter from the request URL
    const updatedData = req.body; // Access the updated data from the request body
  
    const lendObject = lend.find((lend) => lend.id === id); // Find the lend object in the 'lend' array that matches the specified 'id'
  
    // Check if the lend object exists. If not, return a 404 error response
    if (!lendObject) {
      return res.status(404).json({ error: 'Lend not found' });
    }
  
    lendObject.data = updatedData; // Update the lend object with the new data
    res.json(lendObject); // Return the updated lend object as the response
  });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`); // Start the server and log a message indicating the port it's listening on
});

//npm init
//npm install express
//node index.js