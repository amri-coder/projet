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
      type: {
        allowNull: false,
        type: Sequelize.JSONB
      },
      superficie: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      adresse: {
        allowNull: false,
        type: Sequelize.JSONB
      },
      etage: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      prix: {
        allowNull: false,
        type: Sequelize.JSONB
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
