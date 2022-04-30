const getCommandResults = (pool, command, res) => {
    pool.query(command, (error, results) => {
        if (error) {
            res.status(404).json({status: "failure", data: null});
            throw error;
        }
        let status = (results.rows.length) ?  200 : 204; 
        res.status(status).json({status: "success", data: results.rows});
    });
}

const formatISOarray = (ISOString) => {
    let isos = ISOString.split(",");
    for (let i = 0; i < isos.length; i++) 
        isos[i] = "'" + isos[i] + "'";
    return isos.join(",");
}

exports.getCommandResults = getCommandResults;
exports.formatISOarray = formatISOarray