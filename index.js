const express = require("express");

const countryRoutes = require("./routes/country-routes")

const app = express();
const PORT = 5000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, DELETE, OPTIONS'
    );
    next();
});


app.get('/', (req, res) => {
    res.send('API Docs');
});

app.use("/countries", countryRoutes);

app.listen(PORT, () => { console.log(`Climate Data API listening on port ${PORT}!`);})