// Write your tests here
const db = require('../data/dbConfig')
const User = require('../api/auth/auth.model')
const request = require('supertest')
const server = require('./server')

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
      expect(User.findBy({username: 'BramNation'})).toBe({id:3, username: 'BramNation', password:'123'})
    })   
})

describe('Registering a new account works', ()=>{
  const user = { username: 'BramBoy', password: 'BramaBoy21'}
  test('A new user is Registered', async ()=>{
     await request(server).post('/register').send(user)
    expect(await db('users')).toHaveLength(1)
  })
})

describe.todo('Login in works', ()=>{
  const user = { username: 'BramBoy', password: 'BramaBoy21'}
  test('User can log in', async ()=>{
    await request(server).post('/register').send(user)
    const res = await request(server).post('/login').send(user)
    expect(res.req).toBe(200)
  })
})





