// ESERCIZIO #3

/* Prendere confidenza con localStorage.
Utilizzare i metodi setItem , getItem e removeItem per fare un po’ di pratica.
Esercizio suggerito:
nell’HTML un input e due bottoni rispettivamente “salva” e “rimuovi”.
Al DOMContentLoaded della pagine stampare in console il valore della chiave “test_storage”
presente nel localStorage se è presente.
Al click di “salva” salvare nel localStorage il valore dell’input sotto la chiave “test_storage”.
Al click di “rimuovi” eliminare la chiave “test_storage” dal localStorage.
Una volta aggiunto il valore con salva, chiudere e riaprire il browser. Dovrebbe apparrire in
console il valore aggiunto precedentemente. */

const btn_save = document.querySelector('#btn_save');
const btn_remove = document.querySelector('#btn_remove');

console.log(localStorage);

function add() {
    const userInput = document.querySelector('#userInput').value;
    console.log('Input dell\'utente: ', userInput);
    localStorage.setItem('test_item', userInput);

    console.log(localStorage);
}

function remove() {

    const userInput = document.querySelector('#userInput').value;
    console.log('Input dell\'utente: ', userInput);
    localStorage.removeItem('test_item', userInput);

    console.log(localStorage);
}

btn_save.addEventListener('click', add);

btn_remove.addEventListener('click', remove);
