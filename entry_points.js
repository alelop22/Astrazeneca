const path = require('path');
const fs = require('fs');

// check if file exists: fs.existsSync('/path/to/file')
/*
	Aggiungi un oggetto alla variabile "obj" qui sotto per aggiungere un entry point
	- chiave -> il nome del bundle che vogliamo ottenere
	(e che avrà la forma nomeBundle.bundle.js)
	- valore -> il percorso del file javascript sorgente
*/

const obj = {
	home: path.join(path.resolve(__dirname, 'src/js'), 'home.js'),
	chi_siamo: path.join(path.resolve(__dirname, 'src/js'), 'chi_siamo.js'),
	contatti: path.join(path.resolve(__dirname, 'src/js'), 'contatti.js'),
	prenota_vaccino: path.join(path.resolve(__dirname, 'src/js'), 'prenota_vaccino.js'),
}

module.exports = obj
