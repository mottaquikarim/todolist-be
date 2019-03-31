const pgp = require('pg-promise')

const getDbConn = (function() {
    let dbConn = null;
    return (dbAddr) => {
        if (!dbConn) {
            dbConn = pgp({})(dbAddr)
        }

        return dbConn;
    }
})();

module.exports = {getDbConn,}
