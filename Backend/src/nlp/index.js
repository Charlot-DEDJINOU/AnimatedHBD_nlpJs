exports.main = async (possibleAnswers, userAnswer = '') => {
  userAnswer = cleanSentence(userAnswer)

  for (let i = 0; i < possibleAnswers.length; i++)
    possibleAnswers[i] = cleanSentence(possibleAnswers[i])

  if (findAnswer(possibleAnswers, userAnswer)) return true
  return training(possibleAnswers, userAnswer)
}

function getAllCombinations(arr) {
  const combinations = []

  function generateCombinations(currentCombination, remainingElements) {
    if (remainingElements.length === 0) {
      combinations.push(currentCombination)
    } else {
      for (let i = 0; i < remainingElements.length; i++) {
        const newCombination = currentCombination.concat(remainingElements[i])
        const newRemaining = remainingElements.slice(0, i).concat(remainingElements.slice(i + 1))
        generateCombinations(newCombination, newRemaining)
      }
    }
  }

  generateCombinations([], arr)
  return combinations
}

function findAnswer(possibleAnswers, answer) {
  return possibleAnswers.includes(answer)
}

function cleanSentence(sentence) {
  var newSentence = ''
  var lastLetter = ' '

  for (let letter of sentence) {
    if (letter !== ' ' || lastLetter !== ' ') newSentence += letter

    lastLetter = letter
  }

  return newSentence
    .replace('\r', '')
    .replace(/[^\w\s]|_/g, '')
    .replace(/\s+/g, ' ')
    .toLowerCase()
}

function findIntersection(phrase1, phrase2) {
  const mots1 = new Set(phrase1.toLowerCase().split(' '))
  const mots2 = new Set(phrase2.toLowerCase().split(' '))

  const intersection = [...mots1].filter((mot) => mots2.has(mot))

  return intersection
}

function findDifference(phrase1, phrase2) {
  for (const mot of phrase2) {
    const index = phrase1.indexOf(mot)
    if (index !== -1) {
      phrase1.splice(index, 1)
    }
  }

  return phrase1
}

function disociateSentence(phrase1, phrase2, possibleAnswers) {
  var intersection = findIntersection(phrase1, phrase2)

  if (intersection.length === phrase2.split(' ').length) {
    for (let combinaison of getAllCombinations(intersection)) {
      combinaison = combinaison.join(' ')
      if (findAnswer(possibleAnswers, combinaison)) return [true, null]
    }
  }

  return [false, intersection]
}

function training(possibleAnswers, userAnswer) {
  var tmp = false,
    allIntersections = []
  for (let answer of possibleAnswers) {
    answer = disociateSentence(answer, userAnswer, possibleAnswers)
    if (answer[0] == true) {
      tmp = true
      break
    } else allIntersections.push(answer[1])
  }

  if (tmp === true) return true

  const intersectionSansDoublons = allIntersections.filter(
    (tableau, index, self) =>
      index === self.findIndex((t) => JSON.stringify(t) === JSON.stringify(tableau))
  )

  return deepTraining(intersectionSansDoublons, possibleAnswers, userAnswer)
}

function deepTraining(allIntersections, possibleAnswers, userAnswer) {
  for (let intersection of allIntersections) {
    for (let combinaison of getAllCombinations(intersection)) {
      combinaison = combinaison.join(' ')
      if (findAnswer(possibleAnswers, combinaison)) {
        let difference = findDifference(userAnswer.split(' '), intersection)
        difference = pourcentage(difference, possibleAnswers)
        const moyenne = sum(difference) / difference.length
        if (moyenne >= 3) return true
        else return false
      }
    }
  }
  return false
}

function pourcentage(difference, possibleAnswers) {
  var pourcentage = []
  for (var word of difference) {
    var count = 0
    for (let answer of possibleAnswers) {
      if (answer.split(' ').includes(word)) count++
    }
    pourcentage.push(count)
  }
  return pourcentage
}

function sum(tab) {
  var somme = 0
  for (let i of tab) somme += i

  return somme
}