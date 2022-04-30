const express = require("express");

const countriesRoutes = require("./routes/countries-routes")
const seriesRoutes = require("./routes/series-routes")

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

app.use("/api/countries", countriesRoutes);
app.use("/api/series", seriesRoutes);

app.listen(PORT, () => { console.log(`Climate Data API listening on port ${PORT}!`);})