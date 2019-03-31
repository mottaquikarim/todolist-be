const {dbAddr,} = require('../config')
const {getDbConn,} = require('../db')

// const {getDbConn: db,} = require('../db') // if you wanted to rename

const add = email => {
    return getDbConn(dbAddr).none(
        'INSERT INTO users (email) VALUES ($[email])',
        {email}
    )
}

const get = id => {
    return getDbConn(dbAddr).one(
        'SELECT * FROM users where users.id = $[id]',
        {id}
    );
}

const put = (id, data) => {
    return get(id)
        .then(user => Object.assign({}, user, data))
        .then(data => {
            console.log('data', data)
            return getDbConn(dbAddr).none(
                'UPDATE users SET email = $[email], token = $[token] WHERE id = $[id]',
                {email: data.email, token: data.token, id: data.id},
            )
        })
}

module.exports = {
    add,
    get,
    put,
}

