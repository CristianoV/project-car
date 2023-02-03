module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Accounts', [
      {
        id: 999,
        level: 'admin',
      },
      {
        id: 998,
        level: 'admin',
      },
      {
        id: 997,
        level: 'user',
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Accounts', null, {});
  },
};