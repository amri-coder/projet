const catalogueProprietaire = require("../seeds/20200226153530-catalogue-proprietaire");

/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("proprietaire", catalogueProprietaire);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("proprietaire", null, {});
  }
};
