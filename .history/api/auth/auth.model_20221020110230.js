const db = require('../../data/dbConfig')

async function add(user){
    const [id] = await db('users').insert(user)
    return db('users').where('id', id).first()
}

async function findBy(username){
    const result = await db('users').where('username', username).first()
 return result
}

module.exports = {
    add, 
    findBy
}