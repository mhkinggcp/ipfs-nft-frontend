const express = require('express');
const counterRouter = express.Router();

counterRouter.use(express.json());

let count = 1;

counterRouter.get('/hits', (req, res) => {
    res.json({ count: count++ });
});

module.exports = counterRouter;


