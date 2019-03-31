const express = require('express')
const bodyParser = require('body-parser')

const {getUserRouter, } = require('./routes/user')

const getApp = () => {
    const app = express();
    app.use(bodyParser.json())

    app.use('/user', getUserRouter())

    return app;
}

module.exports = {
    getApp,
}

