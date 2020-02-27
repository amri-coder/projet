const uuid = require("uuid/v4");
const moment = require("moment");

const now = moment()
  .utc()
  .toDate();

module.exports = [
  {
    id: uuid(),
    image: "../assets/appart1.jpg",
    type: "F1",
    superficie: 32,
    adresse : "Place 8 mai 1945, 93200 SAINT DENIS",
    etage: 2,
    prix:700,
    created_at: now,
    updated_at: now
  },
  {
    id: uuid(),
    image: "../assets/appart2.jpg",
    type: "Studio",
    superficie: 9,
    adresse : "3 Avenue de la republique, Paris 75001",
    etage: 3,
    prix: 500,
    
    created_at: now,
    updated_at: now
  }
  
];
