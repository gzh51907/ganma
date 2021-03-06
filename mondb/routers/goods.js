
const express = require('express');
const Router = express.Router();

const { mongo } = require('../db')
const { formatData, token } = require('../utils')

const colName = 'goodsinf'



Router.get('/select', async (req, res) => {

    let id = req.query.brand_id


    let result = await mongo.find(colName, { 'brand_id': Number(id) })
    // console.log(result)
    // let result = await mongo.find(colName)

    res.send(result)

})




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


// 查询所有商品
Router.get('/all', async (req, res) => {
    // console.log('1111:',req.query)
    let data = req.query;
    let result = await mongo.find(colName, data);
    res.send(result);
})


//插入
Router.get('/charu', async (req, res) => {

    let { username, id, num } = req.query;
 

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

    res.send(result)
    // if (result.length) {
    //     res.send(formatData({ code: 0 }))// {code:1,msg:'success',data}
    // } else {
    //     res.send(formatData());
    // }
});

//改
Router.post('/goodsUpdate', async (req, res) => {

    let { id, name, markets_price, sell_price, number } = req.body.params;
    console.log('qqq:', req.body.params)


    let result = await mongo.update('goodsinf', { 'id': id }, { $set: { 'name': name, 'number': Number(number), 'sell_price': sell_price, 'markers_pricee': markets_price } });

    if (result.length) {
        res.send(formatData({ code: 0 }))// {code:1,msg:'success',data}
    } else {
        res.send(formatData());
    }
});
// 删除商品
Router.post('/goodsDel', async (req, res) => {
    let { id } = req.body.params;
    // console.log('red:',req.body.params);
    let result = await mongo.remove('goodsinf', { id });
    // console.log(result)
    if (result.length) {
        res.send(formatData({ code: 0 }))
    } else {
        res.send(formatData())
    }
    // res.send(result)
});
//改
Router.post('/dingdan', async (req, res) => {
   
    let {username,id,num} = req.body;
 
    let result = await mongo.update('shoping',{'username':username,'id':String(id)},{$set:{'num':String(num)}});
  
    res.send(result)
    if (result.length) {
        res.send(formatData({ code: 0 }))// {code:1,msg:'success',data}
    } else {
        res.send(formatData());
    }
});
Router.post('/add', async (req, res) => {

    // console.log('req:',req.body)
    let { brand, brand_id, name, id, markers_price, sell_price, number } = req.body;

    let result = await mongo.find('goodsinf', { 'brand_id': brand_id, 'id': id });

    if (result.length) {
        res.send(formatData({ code: 0 }))
    } else {
        let ss = await mongo.create('goodsinf', [{ brand, brand_id, name, id, markers_price, sell_price, number }]);
        // console.log('sss:',ss)
        res.send(formatData());
    }

});
module.exports = Router;