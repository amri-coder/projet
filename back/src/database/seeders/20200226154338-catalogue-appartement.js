const catalogueAppartement = require("../seeds/20200225111530-catalogue-appartement");

/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("appartement", catalogueAppartement);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("appartement", null, {});
  }
};
