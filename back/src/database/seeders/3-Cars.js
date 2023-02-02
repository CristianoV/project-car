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
      {
        id: 997,
        name: "chevete",
        marca: "Chevrolet",
        value: 8000,
        modelo: "1998",
        foto: "http://localhost:3002/files/chevete.png",
      },
      {
        id: 996,
        name: "ferrari",
        marca: "Chevrolet",
        value: 8000,
        modelo: "1998",
        foto: "http://localhost:3002/files/ferrari.jpg",
      },
      {
        id: 995,
        name: "Fusca branco",
        marca: "Chevrolet",
        value: 8000,
        modelo: "1998",
        foto: "http://localhost:3002/files/Fusca_branco.jpg",
      },
      {
        id: 994,
        name: "Fusca",
        marca: "Chevrolet",
        value: 8000,
        modelo: "1998",
        foto: "http://localhost:3002/files/Fusca.jpg",
      },
      {
        id: 993,
        name: "Marea",
        marca: "Chevrolet",
        value: 2,
        modelo: "1998",
        foto: "http://localhost:3002/files/fiat-marea.jpg",
      },
      {
        id: 992,
        name: "ford gt easy",
        marca: "ford",
        value: 950000,
        modelo: "1998",
        foto: "http://localhost:3002/files/ford-gt-easy.jpg",
      },
      {
        id: 990,
        name: "uno com escada",
        marca: "Chevrolet",
        value: 9500000,
        modelo: "1998",
        foto: "http://localhost:3002/files/uno_tunig.jpg",
      },
      {
        id: 989,
        name: "Argo",
        marca: "Chevrolet",
        value: 40000,
        modelo: "1998",
        foto: "http://localhost:3002/files/argo.jpg",
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Cars', null, {});
  },
};