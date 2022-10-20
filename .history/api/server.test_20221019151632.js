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
      test('add function add a new user to users database')
      const user = { username: 'BramBoy', password: 'BramaBoy21'}
        User.add(user)
      expect(db('users')).toHaveLength(4)
})


describe('Testing register endpoint works', ()=>{
  test.todo('Can register a new users', ()=>{
            
  })
})



