const db = require('../../data/dbConfig')

async function add(user){
    const [id] = await db('users').insert(user)
    return db('users').where('id', id).first()
}

function findBy(user){
    return db('users').select('id', 'username', 'password').where('username', user.username).first()
}

module.exports = {
    add, 
    findBy
}