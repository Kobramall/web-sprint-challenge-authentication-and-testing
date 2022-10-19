/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').truncate()
  await knex('users').insert([
    {id: 1, username: 'BramNation', password: '100490'},
    {id: 2, username: 'BramNation1', password: '100'},
    {id: 3, username: 'BramNation2', password: '569'}
  ])
};
