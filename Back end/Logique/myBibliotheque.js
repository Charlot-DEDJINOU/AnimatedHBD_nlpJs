const getDevinettes = require("./getDevinettes");

async function getSentences() {
  var sentences = [];

  const possibleAnswers = await getDevinettes.getReponsesDevinette(1);

  for (const answer of possibleAnswers)
    sentences.push(answer.reponse.toLowerCase());

  return sentences;
}

function findAnswer(possibleAnswers , answer){
    return possibleAnswers.includes(answer.toLowerCase())
}

function cleanSentence(sentence){
    var newSentence = "" ;
    var lastLetter = ""

    for(letter of sentence)
    {
        if(letter !== " " || lastLetter !== " ")
            newSentence += letter
        
        lastLetter = letter
    }

    return newSentence
}

function findIntersection(phrase1, phrase2) {

    const mots1 = new Set(phrase1.toLowerCase().split(' '));
    const mots2 = new Set(phrase2.toLowerCase().split(' '));
  
    const intersection = [...mots1].filter(mot => mots2.has(mot));
  
    return intersection;
  }

async function main() {
  const possibleAnswers = await getSentences();

  console.log("Réponses en minuscules :", findIntersection("la lettre e" , "ce n'est que la lettre e"));
}

main().catch(error => console.error(error));
