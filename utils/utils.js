const getCommandResults = (pool, command, res) => {
    pool.query(command, (error, results) => {
        if (error) {
            res.status(404).json({status: "failure", data: null});
            throw error;
        }
        let status = (results.rows.length) ?  200 : 204; 
        console.log(results.rows)
        res.status(status).json({status: "success", data: results.rows});
    });
}

exports.getCommandResults = getCommandResults;