const request = require('supertest');
const server = require('./server');
const Users = require('../helpers/users-model');
const db = require('../database/dbConfig');

describe('server.js', () => {
  beforeEach(async () => {
    await db('users').truncate(); //clears table for testing purposes for each test
  })
//********************
//REGISTER
//********************
describe('POST /auth/register', () => {
  it('should add a user to the database', async () => {
    //checks that the database is empty
    const users = await db('users');
    expect(users).toHaveLength(0);
    //adds a user to the database
    await Users.add({
      username: 'samus',
      password: 'aran'
    })
    //open the db and see that the new user is there
    const newUsers = await db('users');
    expect(newUsers).toHaveLength(1);
  })
  it('check the name of the added user', async () => {
    //checks that the database is empty
    const users = await db('users');
    expect(users).toHaveLength(0);
    //adds a user to the database
    await Users.add({
      username: 'solid snake',
      password: 'FOXDIE'
    })
    //open the db and see that the new user is there
    const newUsers = await db('users');
    expect(newUsers[0].username).toBe('solid snake');
  })
})
//********************
//LOGIN
//********************

//********************
//LOGIN
//********************

})