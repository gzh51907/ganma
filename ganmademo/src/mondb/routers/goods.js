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

    let result = await mongo.find(colName, { 'brand_id': Number(id) })
    // console.log(result)
    // let result = await mongo.find(colName)

    res.send(result)

})


//插入
Router.post('/tou', async (req, res) => {

    let { username, imgData } = req.body;
    console.log('sadsadsadsad:', username, imgData )

    let result
    try {
        await mongo.create('tou', [{ username, imgData }]);
        result = formatData()
    } catch (err) {
        result = formatData({ code: 0 })
    }

    res.send(result);

});



//降序
Router.get('/sel', async (req, res) => {

    let id = req.query.brand_id
    console.log(req)

    let result = await mongo.pai(colName, { 'brand_id': Number(id) })
    // console.log(result)
    // let result = await mongo.find(colName)

    res.send(result)

})
//升序
Router.get('/sels', async (req, res) => {

    let id = req.query.brand_id
    console.log(req)

    let result = await mongo.pais(colName, { 'brand_id': Number(id) })
    // console.log(result)
    // let result = await mongo.find(colName)

    res.send(result)

})
//最新

Router.get('/selss', async (req, res) => {

    let id = req.query.brand_id
    console.log(req)

    let result = await mongo.paiss(colName, { 'brand_id': Number(id) })
    // console.log(result)
    // let result = await mongo.find(colName)

    res.send(result)

});


//销量
Router.get('/selsss', async (req, res) => {

    let id = req.query.brand_id
    console.log(req)

    let result = await mongo.paisss(colName, { 'brand_id': Number(id) })
    // console.log(result)
    // let result = await mongo.find(colName)

    res.send(result)

});




// 查询单个
Router.get('/ll', async (req, res) => {

    let id = req.query.id
    console.log(req)

    let result = await mongo.lp(colName, { 'id': Number(id) })
    // console.log(result)
    // let result = await mongo.find(colName)

    res.send(result)

});




//插入
Router.get('/charu', async (req, res) => {

    let { username, id, num } = req.query;
    console.log(username, id)

    let result
    try {
        await mongo.create('shoping', [{ username, id, num }]);
        result = formatData()
    } catch (err) {
        result = formatData({ code: 0 })
    }

    res.send(result);

});


//某一个用户的订单
Router.get('/cartpeople', async (req, res) => {

    let username = req.query.username;
 
    let result = await mongo.find('shoping', { username });
    console.log(result)
    res.send(result)
    // if (result.length) {
    //     res.send(formatData({ code: 0 }))// {code:1,msg:'success',data}
    // } else {
    //     res.send(formatData());
    // }
});

//改
Router.post('/dingdan', async (req, res) => {
   
    let {username,id,num} = req.body;
    console.log(id,num,'45646545646545')
    // console.log('llll:',typeof(id))
    // console.log('555:',typeof(num))
    let result = await mongo.update('shoping',{'username':username,'id':String(id)},{$set:{'num':String(num)}});
  
    res.send(result)
    if (result.length) {
        res.send(formatData({ code: 0 }))// {code:1,msg:'success',data}
    } else {
        res.send(formatData());
    }
});





module.exports = Router;