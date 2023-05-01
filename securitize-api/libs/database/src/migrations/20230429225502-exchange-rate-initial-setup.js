'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface
      .createTable('exchange-rate', {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        currency: {
          type: Sequelize.DataTypes.STRING(42),
          unique: true,
        },
        rate: {
          type: Sequelize.DataTypes.FLOAT,
        },
      })
      .then(() => queryInterface.addIndex('exchange-rate', ['id']));
  },

  async down(queryInterface) {
    return queryInterface.dropTable('exchange-rate');
  },
};
