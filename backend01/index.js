require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/about', (req, res) => {
    res.send('About Us');
})

app.get('/login', (req, res) => {
    res.send('<h1>Login Page');
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})