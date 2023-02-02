module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Users', [
      {
        id: 999,
        name: 'CristianoV',
        password: '$2a$10$0ec80axjF54kPvZW5KRmSuQjCGK8P7vqJdoTY7KmUJ8NRzcX2v7pS',
        accountId: 999,
      },
      {
        id: 998,
        name: 'admin',
        password: '$2a$10$E9T0UONUPI53YjhPIIfA7.JZsamyRnUR76vgXOzpdeisXWTHadwQG', // @Admin1234
        accountId: 998,
      },
      {
        id: 997,
        name: 'user',
        password: '$2a$10$Re6CrGWyD2z6onBD5jLDDexpiJ7/UpYrXg6tVtUcS2CeIEQLUBt6W',  // @User1234
        accountId: 998,
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};