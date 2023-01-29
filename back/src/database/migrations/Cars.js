'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'Cars',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        marca: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        value: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        modelo: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        foto: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        updatedAt: false,
      }
    );
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Cars');
  },
};