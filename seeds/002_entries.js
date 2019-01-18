
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('entries').del()
    .then(function () {
      // Inserts seed entries
      return knex('entries').insert([
        { id: 1, user_id: 1, date: new Date('2018-12-01T00:00:00-07:00'), flow: true, temp: 98.60 },
        { id: 2, user_id: 1, date: new Date('2018-12-02T00:00:00-07:00'), flow: true, temp: 98.60 },
        { id: 3, user_id: 1, date: new Date('2018-12-03T00:00:00-07:00'), flow: true, temp: 98.60 },
        { id: 4, user_id: 1, date: new Date('2018-12-04T00:00:00-07:00'), flow: false, temp: 98.60 },
        { id: 5, user_id: 1, date: new Date('2018-12-05T00:00:00-07:00'), flow: false, temp: 98.60 },
        { id: 6, user_id: 1, date: new Date('2018-12-06T00:00:00-07:00'), flow: false, temp: 98.60 },
        { id: 7, user_id: 1, date: new Date('2018-12-07T00:00:00-07:00'), flow: false, temp: 98.60 },
        { id: 8, user_id: 1, date: new Date('2018-12-08T00:00:00-07:00'), flow: false, temp: 98.60 },
        { id: 9, user_id: 1, date: new Date('2018-12-09T00:00:00-07:00'), flow: false, temp: 98.60 },
        { id: 10, user_id: 1, date: new Date('2018-12-10T00:00:00-07:00'), flow: false, temp: 98.60 },
        { id: 11, user_id: 1, date: new Date('2018-12-11T00:00:00-07:00'), flow: false, temp: 98.60 },
        { id: 12, user_id: 1, date: new Date('2018-12-12T00:00:00-07:00'), flow: false, temp: 98.60 },
        { id: 13, user_id: 1, date: new Date('2018-12-13T00:00:00-07:00'), flow: false, temp: 98.60 },
        { id: 14, user_id: 1, date: new Date('2018-12-14T00:00:00-07:00'), flow: false, temp: 99.60 },
        { id: 15, user_id: 1, date: new Date('2018-12-15T00:00:00-07:00'), flow: false, temp: 99.60 },
        { id: 16, user_id: 1, date: new Date('2018-12-16T00:00:00-07:00'), flow: false, temp: 99.60 },
        { id: 17, user_id: 1, date: new Date('2018-12-17T00:00:00-07:00'), flow: false, temp: 99.60 },
        { id: 18, user_id: 1, date: new Date('2018-12-18T00:00:00-07:00'), flow: false, temp: 99.60 },
        { id: 19, user_id: 1, date: new Date('2018-12-19T00:00:00-07:00'), flow: false, temp: 99.60 },
        { id: 20, user_id: 1, date: new Date('2018-12-20T00:00:00-07:00'), flow: false, temp: 99.60 },
        { id: 21, user_id: 1, date: new Date('2018-12-21T00:00:00-07:00'), flow: false, temp: 99.60 },
        { id: 22, user_id: 1, date: new Date('2018-12-22T00:00:00-07:00'), flow: false, temp: 99.60 },
        { id: 23, user_id: 1, date: new Date('2018-12-23T00:00:00-07:00'), flow: false, temp: 99.60 },
        { id: 24, user_id: 1, date: new Date('2018-12-24T00:00:00-07:00'), flow: false, temp: 99.60 },
        { id: 25, user_id: 1, date: new Date('2018-12-25T00:00:00-07:00'), flow: false, temp: 99.60 },
        { id: 26, user_id: 1, date: new Date('2018-12-26T00:00:00-07:00'), flow: false, temp: 99.60 },
        { id: 27, user_id: 1, date: new Date('2018-12-27T00:00:00-07:00'), flow: false, temp: 99.60 },
        { id: 28, user_id: 1, date: new Date('2018-12-28T00:00:00-07:00'), flow: false, temp: 99.60 },
        { id: 29, user_id: 1, date: new Date('2018-12-29T00:00:00-07:00'), flow: true, temp: 98.60 },
        { id: 30, user_id: 1, date: new Date('2018-12-30T00:00:00-07:00'), flow: true, temp: 98.60 },
        { id: 31, user_id: 1, date: new Date('2018-12-31T00:00:00-07:00'), flow: true, temp: 98.60 },
        { id: 32, user_id: 1, date: new Date('2019-01-01T00:00:00-07:00'), flow: false, temp: 98.60 },
        { id: 33, user_id: 1, date: new Date('2019-01-02T00:00:00-07:00'), flow: false, temp: 98.60 },
        { id: 34, user_id: 1, date: new Date('2019-01-03T00:00:00-07:00'), flow: false, temp: 98.60 },
        { id: 35, user_id: 1, date: new Date('2019-01-04T00:00:00-07:00'), flow: false, temp: 98.60 },
        { id: 36, user_id: 1, date: new Date('2019-01-05T00:00:00-07:00'), flow: false, temp: 98.60 },
        { id: 37, user_id: 1, date: new Date('2019-01-06T00:00:00-07:00'), flow: false, temp: 98.60 },
        { id: 38, user_id: 1, date: new Date('2019-01-07T00:00:00-07:00'), flow: false, temp: 98.60 },
        { id: 39, user_id: 1, date: new Date('2019-01-08T00:00:00-07:00'), flow: false, temp: 98.60 },
        { id: 40, user_id: 1, date: new Date('2019-01-09T00:00:00-07:00'), flow: false, temp: 98.60 },
        { id: 41, user_id: 1, date: new Date('2019-01-10T00:00:00-07:00'), flow: false, temp: 98.60 },
        { id: 42, user_id: 1, date: new Date('2019-01-11T00:00:00-07:00'), flow: false, temp: 99.60 },
        { id: 43, user_id: 1, date: new Date('2019-01-12T00:00:00-07:00'), flow: false, temp: 99.60 },
        { id: 44, user_id: 1, date: new Date('2019-01-13T00:00:00-07:00'), flow: false, temp: 99.60 },
        { id: 45, user_id: 1, date: new Date('2019-01-14T00:00:00-07:00'), flow: false, temp: 99.60 },
        { id: 46, user_id: 1, date: new Date('2019-01-15T00:00:00-07:00'), flow: false, temp: 99.60 },
        { id: 47, user_id: 1, date: new Date('2019-01-16T00:00:00-07:00'), flow: false, temp: 99.60 },
        { id: 48, user_id: 1, date: new Date('2019-01-17T00:00:00-07:00'), flow: false, temp: 99.60 },
        { id: 49, user_id: 1, date: new Date('2019-01-18T00:00:00-07:00'), flow: false, temp: 99.60 },
        { id: 50, user_id: 1, date: new Date('2019-01-19T00:00:00-07:00'), flow: false, temp: 99.60 },
        { id: 51, user_id: 1, date: new Date('2019-01-20T00:00:00-07:00'), flow: false, temp: 99.60 },
        { id: 52, user_id: 1, date: new Date('2019-01-21T00:00:00-07:00'), flow: false, temp: 99.60 },
        { id: 53, user_id: 1, date: new Date('2019-01-22T00:00:00-07:00'), flow: false, temp: 99.60 },
        { id: 54, user_id: 1, date: new Date('2019-01-23T00:00:00-07:00'), flow: false, temp: 99.60 },
        { id: 55, user_id: 1, date: new Date('2019-01-24T00:00:00-07:00'), flow: false, temp: 99.60 },
        { id: 56, user_id: 1, date: new Date('2019-01-25T00:00:00-07:00'), flow: false, temp: 99.60 },
        { id: 57, user_id: 1, date: new Date('2019-01-26T00:00:00-07:00'), flow: true, temp: 98.60 },
        { id: 58, user_id: 1, date: new Date('2019-01-27T00:00:00-07:00'), flow: true, temp: 98.60 },
        { id: 59, user_id: 1, date: new Date('2019-01-28T00:00:00-07:00'), flow: true, temp: 98.60 },
        { id: 60, user_id: 1, date: new Date('2019-01-29T00:00:00-07:00'), flow: true, temp: 98.60 },
        { id: 61, user_id: 1, date: new Date('2019-01-30T00:00:00-07:00'), flow: true, temp: 98.60 },
        { id: 62, user_id: 1, date: new Date('2019-01-31T00:00:00-07:00'), flow: false, temp: 98.60 },
        { id: 63, user_id: 1, date: new Date('2019-02-01T00:00:00-07:00'), flow: false, temp: 98.60 },
        { id: 64, user_id: 1, date: new Date('2019-02-02T00:00:00-07:00'), flow: false, temp: 98.60 },
        { id: 65, user_id: 1, date: new Date('2019-02-03T00:00:00-07:00'), flow: false, temp: 98.60 },
        { id: 66, user_id: 1, date: new Date('2019-02-04T00:00:00-07:00'), flow: false, temp: 98.60 },
        { id: 67, user_id: 1, date: new Date('2019-02-05T00:00:00-07:00'), flow: false, temp: 98.60 },
      ]);
    }).then(function () {
      // Moves id column (PK) auto-incrementer to correct value after inserts
      return knex.raw("SELECT setval('entries_id_seq', (SELECT MAX(id) FROM entries))")
    })
};
