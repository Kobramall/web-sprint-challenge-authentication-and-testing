// Write your tests here
const db = require('../data/dbConfig')
const User = require('../api/auth/auth.model')
const request = require('supertest')
const server = require('./server')

beforeAll(async ()=>{
  await db.migrate.rollback()
  await db.migrate.latest()
})

beforeEach(async ()=>{
  await db.seed.run()
})

describe('Just a sanity test', ()=>{
  test('sanity', () => {
    expect(true).toBe(true)
  })
})

describe('[1]Testing auth.model function', () =>{
  const user = {username: 'BramBoy', password: 'BramaBoy21'}
  test('add function add a new user to users database', async ()=>{
    User.add(user)
    expect(await db('users')).toHaveLength(4)
  })
    test.skip('findBy finds a user by username', ()=>{
      expect(User.findBy('BramNation')).toBe({id:3, username: 'BramNation', password:'123'})
    })   
})

describe('[2]Registering a new account works', ()=>{
  const user = {username: 'BramBoy', password: 'BramaBoy21'}
  test('A new user is Registered', async ()=>{
     await request(server).post('/register').send(user)
    expect(await db('users')).toHaveLength(3)
  })
})







