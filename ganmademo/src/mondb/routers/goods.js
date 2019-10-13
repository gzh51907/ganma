/**
 * 用户CRUD
 * 增：C（Create）
 * 删：D（Delete）
 * 改：U（Update）
 * 查：R（Retrieve）
 */
const express = require('express');
const Router = express.Router();

const { mongo } = require('../db')
const { formatData, token } = require('../utils')

const colName = 'goodsinf'






// 查询所有用户

Router.get('/', async (req, res) => {
 
})

Router.route('/:id')
    // 删除
    .delete((req, res) => {

    })
    // 用户信息修改
    .patch((req, res) => {

    })

    // 查询用户
    .get((req, res) => {

        let id = req.params.brand_id
        let result = await mongo.find(colName, id)

        res.send(result)
    })




module.exports = Router;