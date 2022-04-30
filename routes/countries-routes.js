const express = require("express");

const countriesControllers = require("../controllers/countries-controllers");

const router = express.Router();

router.get('/', countriesControllers.getCountries);
router.get('/:iso([a-zA-Z]{3})', countriesControllers.getCountriesByISO);
router.get('/income_group/:income_group([0-9]+)', countriesControllers.getCountriesByIcomeGroup);
router.get('/lending_category/:lending_category([0-9]+)', countriesControllers.getCountriesByLendingCategory);

module.exports = router;