const express = require("express");

const seriesControllers = require("../controllers/series-controllers");

const router = express.Router();

router.get('/', seriesControllers.getSeries);
router.get('/:series_code((([a-zA-Z0-9]{2,4}.?){3,7}))', seriesControllers.getSeriesByCode)

module.exports = router;
