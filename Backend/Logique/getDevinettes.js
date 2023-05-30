const databaseConfig = require("../database/database");

function getReponsesDevinettes(callback) {
  const db = databaseConfig.createDb();

  db.serialize(() => {
    db.all(`SELECT * FROM reponseDevinette`, (err, rows) => {
      if (err) {
        console.error(err, null);
      } else {
        console.log("Données récupérées avec succès :");
        callback(null, rows);
      }

      db.close((err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Connexion à la base de données fermée.");
        }
      });
    });
  });
}

function getReponsesDevinette(numDev) {
    return new Promise((resolve, reject) => {
      const db = databaseConfig.createDb();
  
      db.serialize(() => {
        db.all(`SELECT * FROM reponseDevinette WHERE numdev = ?`, [numDev], (err, rows) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            console.log("Données récupérées avec succès :");
            resolve(rows);
          }
        });
      });
  
      db.close();
    });
  }
  

module.exports = {
  getReponsesDevinettes,
  getReponsesDevinette,
};
