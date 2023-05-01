'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface
      .createTable('wallets', {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        address: {
          type: Sequelize.DataTypes.STRING(42),
          unique: true,
        },
        balance_in_weight: {
          type: Sequelize.DataTypes.STRING,
        },
        balance_in_eth: {
          type: Sequelize.DataTypes.STRING,
        },
        isFavorite: {
          type: Sequelize.DataTypes.BOOLEAN,
        },
        isOld: {
          type: Sequelize.DataTypes.BOOLEAN,
        },
        createdAt: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
          defaultValue: new Date(),
        },
        updatedAt: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
          defaultValue: new Date(),
        },
      })
      .then(() => queryInterface.addIndex('wallets', ['id', 'address']));
  },

  async down(queryInterface) {
    return queryInterface.dropTable('wallets');
  },
};
