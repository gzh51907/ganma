const express = require('express');
const Router = express.Router();

const { mongo } = require('../db')
const { formatData, token } = require('../utils')

const colName = 'admin'

Router.get('/login', async (req, res) => {
    let { username, password } = req.query;
    // console.log(user,psw)
    let result = await mongo.find(colName, { username, password })
    // console.log(result)
    if (result.length > 0) {
        res.send(formatData())
    } else {
        res.send(formatData({ code: 0 }))
    }
})

module.exports = Router;