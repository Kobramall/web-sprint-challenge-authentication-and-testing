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
    const newUser = { username: 'BramNation', password: '100490'}
    test('Post a new user', async ()=>{
        const result = await User.add().sent(newUser)
        expect(result).toMatchObject(newUser)
    })
})