const mongoose = require('../config/mongoose');

const reponseDevinetteSchema = new mongoose.Schema({
  numDev: { type: String, required: true },
  possibleAnswer: { type: String, required: true },
});

const ReponseDevinette = mongoose.model('reponseDevinette', reponseDevinetteSchema);

module.exports = ReponseDevinette;