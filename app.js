const express = require('express')
const bodyParser = require('body-parser')

const {getUserRouter, } = require('./routes/user')
const {getListItemRouter, } = require('./routes/listitem')

const getApp = () => {
    const app = express();
    app.use(bodyParser.json())

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin' , "*");
        next();
    });

    app.use('/user', getUserRouter())
    app.use('/listitem', getListItemRouter())

    return app;
}

module.exports = {
    getApp,
}

