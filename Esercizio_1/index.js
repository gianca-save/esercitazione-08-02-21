// ESERCIZIO #1 
/* Utilizzando try / catch , async / await e fetch , definire una funzione per ottenere le città
tramite l’url https://api.musement.com/api/v3/cities .
Gestire l’errore con throw . In caso di errore far apparire un banner rosso con la scritta
“Ops, c’è stato un errore”. */

const btn_1 = document.querySelector('#btn_1');
const btn_1_err = document.querySelector('#btn_1_err');

const doc_main = document.querySelector('main')

async function getCities() {
    try {
        const response = await fetch('https://api.musement.com/api/v3/cities');

        if (!response.ok) {
            throw error;
        }
        
        const result = await response.json();

        console.log('Lista città: ', result);
    }

    catch (error) {
        console.log('Errore:', error.message);

        const errorText = document.createElement('div');
        errorText.classList.add('banner_err');

        errorText.textContent = 'Si è verificato un errore!';

        doc_main.appendChild(errorText);

    }
}

async function getCities_err() {
    try {
        const response = await fetch('https://api.musement.com/api/v3/cites'); //ho volutamente scritto male cities

        if (!response.ok) {
            throw error;
        }
        
        const result = await response.json();

        console.log('Richiesta andata a buon fine.\nRisposta ricevuta correttamente.\nLista città: ', result);
    }

    catch (error) {
        console.log('Errore:', error.message);

        const errorText = document.createElement('div');
        errorText.classList.add('banner_err');

        errorText.textContent = 'Si è verificato un errore!';

        doc_main.appendChild(errorText);

    }
}

btn_1.addEventListener('click', getCities);
btn_1_err.addEventListener('click', getCities_err);
