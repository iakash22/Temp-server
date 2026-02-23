const express = require('express');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send(`<h1>Server Running Perfect.</h1>`)
});

app.get('/helth', (req, res) => {
    res.status(200).json({
        message: 'Server Health is good.',
    });
})


app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
});

