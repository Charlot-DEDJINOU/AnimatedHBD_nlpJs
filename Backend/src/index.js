const databaseConfig = require("./database/database");
const nlp = require("./Logique/nlp");

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

function initializeDatabase() {
  const db = databaseConfig.createDb();
  databaseConfig.dbExist(db, (exist) => {
    if (exist === false) {
      databaseConfig.createTableReponseDevinette(db);
      databaseConfig.insertReponseDevinette(db, "./data/reponseDevinette.txt");
    } else {
      console.log("les tables exitent déjà");
      db.close();
      console.log("Connexion à la base de donnée fermée");
    }
  });
}

initializeDatabase() ;

app.get("/", (req, res) => {
  res.send("Mon Backend !");
});

app.get("/api/correctAnswer", (req, res) => {
  const numDev = req.query.numDev;
  const userAnswer = req.query.userAnswer
  nlp.main(userAnswer , numDev , (answer) => {
      res.json({"message" : answer});
    })
  });

app.listen(3000, () => {
  console.log("Serveur démarré sur le port 3000");
});
