const {dbAddr,} = require('../config')
const {getDbConn,} = require('../db')

const add = (todo, uid) => {
    return getDbConn(dbAddr).none(
        'INSERT INTO listitems (todo, user_id) VALUES ($[todo], $[uid])',
        {todo, uid}
    )
}

module.exports = {
    add,
}

