'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('exchange-rate', [
      {
        currency: 'USD',
        rate: 1904,
      },

      {
        currency: 'EUR',
        rate: 1711,
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('exchange-rate', null, {});
  },
};
