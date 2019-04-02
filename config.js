const dbName = 'todolist'
const dbAddr = process.env.DATABASE_URL || `postgres://localhost/${dbName}`

const fireDbUrl = 'https://todolist-api-5ab66.firebaseio.com'
module.exports = {
    dbAddr,
    fireDbUrl,
}
