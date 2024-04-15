const ReponseDevinette = require('../models/devinetteModel')
const fs = require('fs')
const nlp = require('../nlp')

exports.preprocessing = async (req, res) => {
  const { userAnswer, numDev } = req.body

  try {
    const data = await ReponseDevinette.find({ numDev: numDev })
    const possibleAnswer = getPossibleAnswer(data)
    const response = await nlp.main(possibleAnswer, userAnswer)
    res.status(200).json({ success: response })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const insertDevinettes = async () => {
  await saveDataFromFile('./src/data/devinette1.txt', 1)
  await saveDataFromFile('./src/data/devinette2.txt', 2)
  await saveDataFromFile('./src/data/devinette3.txt', 3)
  await saveDataFromFile('./src/data/devinette4.txt', 4)

  console.log('Devinettes insérés avec succès')
}

const getPossibleAnswer = (data) => {
  var possibleAnswer = []
  for (let item of data) possibleAnswer.push(item.possibleAnswer)
  return possibleAnswer
}

const saveDataFromFile = async (filePath, numDevParam) => {
  try {
    const data = fs.readFileSync(filePath, 'utf8')

    const entries = data
      .split('\n')
      .map((entry) => entry.trim())
      .filter((entry) => entry !== '')

    if (entries.length === 0) {
      throw new Error("Le fichier est vide ou ne contient pas d'entrées valides.")
    }

    const objectsToSave = entries.map((entry) => ({
      numDev: numDevParam,
      possibleAnswer: entry
    }))

    const savedData = await ReponseDevinette.create(objectsToSave)

    return { message: 'Données enregistrées avec succès', savedData }
  } catch (error) {
    throw new Error(
      "Erreur lors de la lecture du fichier ou de l'enregistrement des données : " + error.message
    )
  }
}
