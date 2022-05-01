const express = require("express");

const observationsControllers = require("../controllers/observations-controllers");

const router = express.Router();

router.get('/:series_code((([a-zA-Z0-9]{1,4}.?){3,7}))', observationsControllers.getObservationsBySeriesCode)
router.get('/:series_code((([a-zA-Z0-9]{1,4}.?){3,7}))/:iso([a-zA-Z]{3})', observationsControllers.getCountryObservationsBySeriesCode)
router.get('/:series_code((([a-zA-Z0-9]{1,4}.?){3,7}))/:isos(((([a-zA-Z]{3},?){2,})))', observationsControllers.getCountriesObservationsBySeriesCode)

module.exports = router;
