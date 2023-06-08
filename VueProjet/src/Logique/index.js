import { main as nlpMain } from './Logique/nlp'

export function predict(numDev, userAnswer) {
  return new Promise((resolve) => {
    nlpMain(userAnswer, numDev, (answer) => {
      resolve({ message: answer })
    })
  })
}
