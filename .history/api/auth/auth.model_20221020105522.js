const db = require('../../data/dbConfig')

async function add(user){
    const [id] = await db('users').insert(user)
    return db('users').where('id', id).first()
}

async function findBy(user){
    return await db('users').where(user)
}

module.exports = {
    add, 
    findBy
}