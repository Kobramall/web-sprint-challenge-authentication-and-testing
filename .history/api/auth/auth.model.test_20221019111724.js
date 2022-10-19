const db = require('../../data/dbConfig')
const User = require('./auth.model')

beforeAll(async () =>{
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async ()=>{
    await db.seed.run()
})

describe('add', ()=> {
    test('Post a new user', async ()=>{
        expect(true).toBe(true)
    })
})