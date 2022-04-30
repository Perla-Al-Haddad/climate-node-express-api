const conn = require("../database-connection");
const utils = require("../utils/utils");

const pool = conn.pool;

const command_base = `
        SELECT series.*, time_period_type.time_period_type_description, series_topic.series_topic_description, value_type.value_type_description
        FROM series
        INNER JOIN time_period_type ON series.time_period_type_fk = time_period_type.time_period_type_id
        INNER JOIN series_topic ON series.topic_fk = series_topic.series_topic_id
        INNER JOIN value_type ON series.value_type_fk = value_type.value_type_id `;

const getSeries = (req, res, next) => {
    utils.getCommandResults(pool, command_base, res);
}

const getSeriesByCode = (req, res, next) => {
    const series_code = req.params.series_code;
    const command = command_base + `WHERE series_code = '${series_code.toUpperCase()}'`;
    utils.getCommandResults(pool, command, res);
}

exports.getSeries = getSeries;
exports.getSeriesByCode = getSeriesByCode;