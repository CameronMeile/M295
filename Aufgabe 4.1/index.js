const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser')
const app = express();
const port = 3000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const names = new Set(
    [
        "Leonardo",
        "Michelangelo",
        "Donatello",
        "Raphael"
    ]
)

app.post('/timezone', (req, res) => {
    const { timezone } = req.body;
    const currentTime = getCurrentTimeInTimezone(timezone);
    res.send(`Die aktuelle Zeit in der ausgewählten Timezone (${timezone}) ist: ${currentTime}`);
});

function getCurrentTimeInTimezone(timezone) {
    const currentDate = new Date();
    const options = {
        timeZone: timezone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    return currentDate.toLocaleString('de-DE', options);
}

app.get("/names", (request, response) => {
    response.json(Array.from(names))
})

// TODO
app.post("/names", (request, response) => {
    const { name } = req.body;
    names.push(name); // Füge den Namen zum Array hinzu
    res.send(`Name '${name}' wurde dem Array hinzugefügt.`);
    response.sendStatus(201)
})

// TODO
app.delete("/names", (request, response) => {
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
    if (auth == "aGFja2VyOjEyMzQ=") {
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
app.patch('/me', (request, response) => {
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

// Extension Thunder Client to Test