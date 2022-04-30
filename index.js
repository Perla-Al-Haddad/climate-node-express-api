const express = require("express");

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send('API Docs');
});

app.listen(PORT, () => { console.log(`Climate Data API listening on port ${PORT}!`);})