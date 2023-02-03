module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Cars', [
      {
        id: 999,
        name: "Sandero Stepway",
        marca: "Renault",
        value: 4500000,
        modelo: "2015",
        foto: `${process.env.DB_URL}renault-sandero.jpg`,
      },
      {
        id: 998,
        name: "Monza",
        marca: "Chevrolet",
        value: 800000,
        modelo: "1998",
        foto: `${process.env.DB_URL}monza.jpg`,
      },
      {
        id: 997,
        name: "chevete",
        marca: "Chevrolet",
        value: 700000,
        modelo: "1998",
        foto: `${process.env.DB_URL}chevete.png`,
      },
      {
        id: 996,
        name: "ferrari",
        marca: "Chevrolet",
        value: 7500000,
        modelo: "1998",
        foto: `${process.env.DB_URL}ferrari.jpg`,
      },
      {
        id: 995,
        name: "Fusca branco",
        marca: "Chevrolet",
        value: 4000000,
        modelo: "1998",
        foto: `${process.env.DB_URL}Fusca_branco.jpg`,
      },
      {
        id: 994,
        name: "Fusca",
        marca: "Chevrolet",
        value: 4000000,
        modelo: "1998",
        foto: `${process.env.DB_URL}Fusca.jpg`,
      },
      {
        id: 993,
        name: "Marea",
        marca: "Chevrolet",
        value: 100000,
        modelo: "1998",
        foto: `${process.env.DB_URL}fiat-marea.jpg`,
      },
      {
        id: 992,
        name: "ford gt easy",
        marca: "ford",
        value: 9500000,
        modelo: "1998",
        foto: `${process.env.DB_URL}ford-gt-easy.jpg`,
      },
      {
        id: 990,
        name: "uno com escada",
        marca: "Chevrolet",
        value: 9500001,
        modelo: "1998",
        foto: `${process.env.DB_URL}uno_tunig.jpg`,
      },
      {
        id: 989,
        name: "Argo",
        marca: "Chevrolet",
        value: 4200000,
        modelo: "1998",
        foto: `${process.env.DB_URL}argo.jpg`,
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Cars', null, {});
  },
};