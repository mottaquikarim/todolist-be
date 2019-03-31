const express = require('express');
const ListItem = require('../services/listitem');

const postItem = (req, res) => {
    ListItem.add(req.body.todo, req.body.user_id)
        .then(data => {
            res.send(204)
        })
}

const getListItemRouter = () => {
    const router = express.Router();

    router.post('/', postItem)

    return router;
}

module.exports = {
    getListItemRouter,
    postItem,
};
