
const getCountries = (req, res, next) => {
    res.status(200).json({countries: "here are all the countries"});
}

exports.getCountries = getCountries;