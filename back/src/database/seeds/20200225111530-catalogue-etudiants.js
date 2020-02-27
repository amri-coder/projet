const uuid = require("uuid/v4");
const moment = require("moment");

const now = moment()
  .utc()
  .toDate();

module.exports = [
  {
    id: uuid(),
    prenom: "SAMAR",
    nom: "SAMARA",
    date_naissance: now,
    telephone: "0652960244",
    email: "samar.samara@gmail.com",
    created_at: now,
    updated_at: now
  },
  {
    id: uuid(),
    prenom: "LAYLA",
    nom: "BEN",
    date_naissance: now,
    telephone: "0652960230",
    email: "layla.ben@yahoo.com",
    created_at: now,
    updated_at: now
  }
];
