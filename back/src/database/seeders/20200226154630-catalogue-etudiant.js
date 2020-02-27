const catalogueEtudiant = require("../seeds/20200225111530-catalogue-etudiants");

/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("etudiant", catalogueEtudiant);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("etudiant", null, {});
  }
};
