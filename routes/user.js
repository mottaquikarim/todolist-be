const express = require('express');
const User = require('../services/user');

const {fireAuthService,} = require('../middleware')

const postUser = (req, res) => {
    User.add(req.body.email)
        .then(data => {
            res.send(204)
        })
}

const getUser = (req, res) => {
    User.get(req.params.id)
        .then(data => {
            res.json(data)
        })
}

const putUser = (req, res) => {
    User.put(req.params.id, req.body)
        .then(data => {
            res.json(data)
        })
}

const getItems = (req, res) => {
    User.getItems(req.params.id)
        .then(data => {
            res.json(data)
        })
}

const getUserRouter = () => {
    const router = express.Router();

    router.post('/', postUser)
    router.get('/:id', getUser)
    router.put('/:id', putUser)
    router.get('/:id/listitems', fireAuthService, getItems)

    return router;
}

module.exports = {
    getUserRouter,
    getUser,
    postUser,
    putUser,
};
