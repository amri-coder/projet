const uuid = require("uuid/v4");
const moment = require("moment");

const now = moment()
  .utc()
  .toDate();

module.exports = [
  {
    id: uuid(),
    prenom: "Ali",
    nom: "Aloula",
    date_naissance : now,
    telephone: "0652960202",
    email:"ali.aloula@gmail.com",
    created_at: now,
    updated_at: now
  },
  {
    id: uuid(),
    prenom: "Akira",
    nom: "Nakamoura",
    date_naissance : now,
    telephone: "0652960256",
    email:"akira.nakamoura@yahoo.com",
    created_at: now,
    updated_at: now
  }
  
];
