const { etudiant } = require("../models");

const etudiantController = {
  recupererLesEtudiant: async () => {
    const etudiants = await Etudiant.findAll({
      order: [["nom", "ASC"]],
      attributes: ["id", "prenom", "nom", "dateNaissance", "telephone", "email"],
      raw: true
    });

    return etudiants;
  },
  recupererUnEtudiant: async id => {
    const etudiant = await Etudiant.findByPk(id, {
      attributes: ["prenom", "nom", "dateNaissance", "telephone", "email"],
      raw: true
    });

    return etudiant;
  }
};

module.exports = etudiantController;
