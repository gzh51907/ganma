const { MongoClient } = require('mongodb');

const { DBurl, DBName } = require('../config.json');



async function connect() {
    /* return new Promise((resolve,reject)=>{
        MongoClient.connect(DBurl, function (err, client) {
            // err: 错误信息
            // client：数据库客户端
            if (err){
                reject(err)
            }
            // 连接数据库，无则自动创建
            let db = client.db(DBName);
            resolve({client,db})
        });
    }) */
    let result;
    try {
        let client = await MongoClient.connect(DBurl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        let db = client.db(DBName);
        result = { client, db }
    } catch (err) {
        result = err
    }
    return result
}

//插入
async function create(colName, data) {
    let { db, client } = await connect();
    // 获取集合
    let col = db.collection(colName);

    let result = await col.insertMany(data);
    client.close();
    return result
}
//删
async function remove(colName, query) {
    let { db, client } = await connect();
    // 获取集合
    let col = db.collection(colName);

    let result = await col.deleteMany(query);
    client.close();
    return result;
}



//改
async function update(colName, query, data) {
    let { db, client } = await connect();
    // 获取集合
    let col = db.collection(colName);

    let result = await col.updateMany(query, data);
    client.close();
    return result;
}



// 查

async function find(colName, query = {}) {
    let { db, client } = await connect();
    let col = db.collection(colName);

    // 查询数据库
    let result = await col.find(query).toArray();

    // 关闭数据库连接
    client.close();
    //返回结果
    return result;
}



module.exports = {
    find,
    create,
    remove,
    update
}