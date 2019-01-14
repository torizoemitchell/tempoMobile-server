
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, name: 'Tori', email: 'tori@demo.com', password: 'abc123', cycle_length: 28 }
      ]);
    });
};
