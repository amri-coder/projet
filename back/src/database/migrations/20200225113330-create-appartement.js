/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("appartement", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      image:{
        allowNull: false,
        type: Sequelize.STRING(150)
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      superficie: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      adresse: {
        allowNull: false,
        type: Sequelize.STRING
      },
      etage: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      prix: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("appartement");
  }
};
