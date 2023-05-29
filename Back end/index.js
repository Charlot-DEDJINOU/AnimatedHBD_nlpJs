const express = require("express");
const databaseConfig = require("./database/database");
const nlp = require("./Logique/nlp");

const app = express();

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

initializeDatabase();

app.get("/", (req, res) => {
  res.send("Mon Backend !");
});

app.get("/api/correctAnswer", (req, res) => {
  const numDev = req.query.numDev;
  const userAnswer = req.query.userAnswer
  nlp.predictAnswer(numDev , userAnswer, (answer) => {
      res.json(answer);
    })
  });

app.listen(3000, () => {
  console.log("Serveur démarré sur le port 3000");
});
