const conn = require("../database-connection");
const utils = require("../utils/utils");

const pool = conn.pool;

const command_base =    `
        SELECT      country.*, lending_category.lending_category_description, income_group.income_group_description, region.region_name
        FROM        country 
        INNER JOIN  lending_category ON country.lending_category_fk = lending_category.lending_category_id
        INNER JOIN  income_group ON country.income_group_fk = income_group.income_group_id 
        INNER JOIN  region ON country.region_fk = region.region_id `;

const getCountries = (req, res, next) => {
    utils.getCommandResults(pool, command_base, res);
}

const getCountriesByISO = (req, res, next) => {
    const countryISO = req.params.iso;
    const command = command_base + `WHERE country_code = '${countryISO.toUpperCase()}'`;
    utils.getCommandResults(pool, command, res);
}

const getCountriesByIcomeGroup = (req, res, next) => {
    const income_group = req.params.income_group;
    const command = command_base + `WHERE income_group_fk = '${income_group}'`;
    utils.getCommandResults(pool, command, res);
}

const getCountriesByLendingCategory = (req, res, next) => {
    const lending_category = req.params.lending_category;
    const command = command_base + `WHERE lending_category_fk = '${lending_category}'`;
    utils.getCommandResults(pool, command, res);
}

exports.getCountries = getCountries;
exports.getCountriesByISO = getCountriesByISO;
exports.getCountriesByIcomeGroup = getCountriesByIcomeGroup;
exports.getCountriesByLendingCategory = getCountriesByLendingCategory;