const conn = require("../database-connection");
const utils = require("../utils/utils");

const pool = conn.pool;

const command_base = `
        SELECT observation.*, country.country_name, series.series_name
        FROM observation
        INNER JOIN country ON country.country_code = observation.country_code_fk
        INNER JOIN series ON series.series_code = observation.series_code_fk `;

const getObservationsBySeriesCode = (req, res, next) => {
    const series_code = req.params.series_code;
    const command = command_base + `WHERE series_code_fk = '${series_code.toUpperCase()}'`;
    utils.getCommandResults(pool, command, res);
}

const getCountryObservationsBySeriesCode = (req, res, next) => {
    const series_code = req.params.series_code;
    const iso = req.params.iso;
    const command = command_base + `WHERE series_code_fk = '${series_code.toUpperCase()}' AND country_code_fk = '${iso.toUpperCase()}'`;
    utils.getCommandResults(pool, command, res);
}

const getCountriesObservationsBySeriesCode = (req, res, next) => {
    const series_code = req.params.series_code;
    const isos = utils.formatISOarray(req.params.isos);
    const command = command_base + `WHERE series_code_fk = '${series_code.toUpperCase()}' AND country_code_fk IN (${isos.toUpperCase()})`;
    utils.getCommandResults(pool, command, res);
}

exports.getObservationsBySeriesCode = getObservationsBySeriesCode;
exports.getCountryObservationsBySeriesCode = getCountryObservationsBySeriesCode;
exports.getCountriesObservationsBySeriesCode = getCountriesObservationsBySeriesCode;