export function getDevinettes(numDev) {
  return new Promise((resolve, reject) => {
    fetch('src/Logique/data/devinette'+numDev+'.txt')
      .then(response => response.text())
      .then(content => {
        const fileContent = content.split('\n');
        resolve(fileContent); 
      })
      .catch(error => {
        reject(error); 
      });
  });
}
