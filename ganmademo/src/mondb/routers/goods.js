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



//  Router.route('/:brand_id')
//     // 删除
//     .delete((req, res) => {

//     })
//     // 用户信息修改
//     .patch((req, res) => {

//     })

//     // 查询用户
//     .get((req, res) => {

//         // let id = req.params.brand_id
//         // console.log(req.params.brand_id)
//         // let result = await mongo.find(colName, id)
        
//         // res.send(result)
//     })
    Router.get('/select', async (req, res) => {
        
        let id = req.query.brand_id
        console.log(req)

        let result = await mongo.find(colName, {'brand_id':Number(id)})
        // console.log(result)
        // let result = await mongo.find(colName)

        res.send(result)

    })



module.exports = Router;