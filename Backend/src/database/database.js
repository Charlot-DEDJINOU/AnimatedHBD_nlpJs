const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");

function createDb() {
  const db = new sqlite3.Database("./database/data.db");
  console.log("Connexion à la base de donnée");
  return db;
}

function dbExist(db, callback) {
  db.get("SELECT name FROM sqlite_master WHERE type='table'", (err, row) => {
    if (err) {
      console.error(err);
      callback(true);
    } else if (row) {
      console.log("La base de données existe déjà.");
      callback(true);
    } else {
      callback(false);
    }
  });
}

function createTableReponseDevinette(db) {
  db.run(
    `CREATE TABLE IF NOT EXISTS reponseDevinette (
      numdev INTEGER,
      reponse TEXT
    )`,
    (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Table 'reponseDevinette' créée avec succès.");
      }
    }
  );
}

function insertReponseDevinette(db, fileName) {
  try {
    const fileContent = fs.readFileSync(fileName, "utf-8");
    const lines = fileContent.split("\n");
    const data = lines.map((line) => line.split(","));

    db.serialize(() => {
      db.run(`BEGIN TRANSACTION`);

      const stmt = db.prepare(
        `INSERT INTO reponseDevinette (numdev, reponse) VALUES (?, ?)`
      );

      for (const [numdev, reponse] of data) {
        stmt.run(numdev.trim(), reponse.trim());
      }

      stmt.finalize();

      db.run(`COMMIT`, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Données insérées avec succès.");

          db.close((err) => {
            if (err) {
              console.error(err);
            } else {
              console.log("Connexion à la base de données fermée.");
            }
          });
        }
      });
    });
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  createDb,
  createTableReponseDevinette,
  insertReponseDevinette,
  dbExist,
};
