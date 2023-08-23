exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert([
    {
      id: '7050e949-2404-452d-b007-cc8e9919ae67',
      name: 'Rina Pratama',
      email: 'amelkahandayani@gmail.com',
      password: '$2a$10$71E7uabAajQeX5l9c1AjV.BZF3ZX6/mbl4bUcncgpvUi8Fjkn7pAC',
    },
  ]);
};
