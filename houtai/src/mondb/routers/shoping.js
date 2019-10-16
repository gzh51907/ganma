const express = require('express');
const Router = express.Router();
const {mongo} = require('../db')
const {formatData,token} = require('../utils')

const colName = 'shoping';

Router.get('/order',async(req,res)=>{

    let result = await mongo.find(colName)
    res.send(result)
})

//删除对应id
Router.post('/del',async(req,res)=>{
    let id = req.body.params.id;
    
    let result = await mongo.remove(colName,{'id':id})
    // console.log(result)
    res.send(result)
})
//更新
Router.get('/change',async(req,res)=>{
    let {num,id} = req.query;
    let result = await mongo.update(colName,{'num':Number(num)});
    console.log(result)
})

module.exports =Router;