module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Cars', [
      {
        id: 999,
        name: "Sandero Stepway",
        marca: "Renault",
        value: 45000,
        modelo: "2015",
        foto: "http://localhost:3002/files/renault-sandero.jpg",
      },
      {
        id: 998,
        name: "Monza",
        marca: "Chevrolet",
        value: 8000,
        modelo: "1998",
        foto: "http://localhost:3002/files/monza.jpg",
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Cars', null, {});
  },
};