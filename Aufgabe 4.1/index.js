const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000

app.use(express.urlencoded({extended: false}));
app.use(express.json() );
app.use(express.static('public'));

const names = new Set(["Leonardo", "Michelangelo", "Donatello", "Raphael"])

app.get('/now?tz=:time', (req, res) => {
    res.send(new Date);
})

app.get("/names", (request, response) => {
    response.json(Array.from(names))
})

// TODO
app.post("/names", formHelper, (request, response) => {
    response.render('index');
    const name = request.body.name
    names.add(name)
    response.sendStatus(201)
})
// ?method=post&name=CMAE

// TODO
app.delete("/names", formHelper, (request, response) => {
    const name = request.body.name
    if (names.has(name)) {
        names.delete(name)
        response.sendStatus(204)
    } else {
        response.sendStatus(404)
    }
})

app.get("/secret2", (request, response) => {
    const auth = request.headers.authorization
    if (auth == "Basic aGFja2VyOjEyMzQ=") {
        response.sendStatus(200)
    } else {
        response.sendStatus(401)
    }
})

app.get("/chuck", async (request, response) => {
    const apiResponse = await fetch(`https://api.chucknorris.io/jokes/random`)
    const data = await apiResponse.json()
    const joke = data.value
    const name = request.query.name
    response.send(joke.replace("Chuck Norris", name))
})

const me = {
    firstName: "Cameron",
    lastName: "Meile",
    age: 18,
    place: "Wolfhasuen",
    eyeColor: "blue"
}

app.get('/me', (request, response) => {
    response.json(me)
})

// TODO
app.patch('/me', jsonHelper, (request, response) => {
    const merge = request.body
    const result = {
        ...me,
        ...merge
    }

    response.json(result)
})

// Listen to Port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})