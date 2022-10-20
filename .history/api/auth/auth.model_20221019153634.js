const db = require('../../data/dbConfig')

async function add(user){
    const [id] = await db('users').insert(user)
    return db('users').where('id', id).first()
}

function findBy(user){
    return db('users').select('username', 'password').where(user).first()
}

module.exports = {
    add, 
    findBy
}