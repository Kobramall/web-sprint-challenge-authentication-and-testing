// Write your tests here
const db = require('../data/dbConfig')
const User = require('../api/auth/auth.model')

beforeAll(async ()=>{
  await db.migrate.rollback()
  await db.migrate.latest()
})

describe('Just a sanity test', ()=>{
  test('sanity', () => {
    expect(true).toBe(true)
  })
})

describe('Testing auth.model function', () =>{
  const user = { username: 'BramBoy', password: 'BramaBoy21'}
  test('add function add a new user to users database', async ()=>{
    User.add(user)
    expect(await db('users')).toHaveLength(1)
  })
    test('findBy finds a user by username', ()=>{
      User.add(user)
      User.add({username: 'BramNation', password:'123'})
      expect(User.findBy({username: 'BramNation'})).toBe({id:1, username: 'BramNation', password:'123'})
    })  
   
})






