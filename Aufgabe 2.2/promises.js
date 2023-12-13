const { rejects } = require('node:assert');
const fs = require('node:fs/promises');

function leseDateiInhalt(pathfile) {
    return new Promise((resolve, reject) => {
        fs.readFile(pathfile).then((buffer) => {
            resolve(buffer.toString());
        });
    }).catch((err) => reject(err));
}
// Aufruf
leseDateiInhalt('Aufgabe 2.2/besipiel.txt')
  .then(inhalt => {
    console.log('Die Länge des Dateiinhalts beträgt:', inhalt.length);
  })
  .catch(err => {
    console.error('Fehler beim Lesen der Datei:', err);
  });