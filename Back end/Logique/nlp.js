const { NlpManager } = require("node-nlp");
const getDevinettes = require("./getDevinettes");

async function predictAnswer(numDev, userAnswer, callback) {
  const manager = new NlpManager({ languages: ["fr"], forceNER: true });

  try {
    const possibleAnswers = await getDevinettes.getReponsesDevinette(numDev);

    for (const answer of possibleAnswers) {
      manager.addDocument("fr", answer.reponse, "reponse");
    }

    manager.addAnswer("fr", "reponse", 1);

    await manager.train();
    manager.save();

    const response = await manager.process("fr", userAnswer);
    const stmt = response

    callback(stmt);
  } catch (err) {
    callback(false);
  }
}

module.exports = {
  predictAnswer,
};
