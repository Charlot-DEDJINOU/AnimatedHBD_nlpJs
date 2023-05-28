const { NlpManager } = require('node-nlp');
const express = require('express');
const app = express();

const manager = new NlpManager({ languages: ['fr'], forceNER: true });

manager.addDocument('fr', 'C\'est la lettre e', 'reponse');
manager.addDocument('fr', 'La lettre e', 'reponse');
manager.addDocument('fr', 'e', 'reponse');
manager.addDocument('fr', 'E', 'reponse');
manager.addDocument('fr', 'C\'est la lettre e ou E', 'reponse');
manager.addDocument('fr', 'C\'est le cinquième lettre de l\'alphabet', 'reponse');

manager.addAnswer('fr', 'reponse' , 1);

(async() => {
    await manager.train();
    manager.save();
    const response = await manager.process('fr', "e");
    const stmt = false
    
    if(response.intent != "reponse" || response.score  * 100 < 80)
        stmt = false ;
    else
        stmt = true

    app.get('/Backend/Devinette1', (req, res) => {
        const data = { message: 'Hello from Node.js!' };
        res.json(data);
        });
})();