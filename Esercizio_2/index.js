// ESERCIZIO #2
/* Impostare lo stato interno della nostra applicazione con una chiave “config”, nel quale tenere
salvato i dati utili per effettuare le chiamate con fetch di MovieDB.
Creare una funzione utility che passato un path come parametro ritorni la url completa da
utilizzare.
Aggiungere un’altra chiave allo state dell’applicativo chiamata “movies”.
Eseguire una chiamata al DOMContentLoaded della pagina che carichi i film più popolari
(utilizzare sempre try / catch, async / await , throw e fetch) e che li salvi nello stato sotto
“movies” e poi stampi in console il risultato.
Con l’errore visualizzare il banner dell’esercizio 1. */

const btn1_popularMovies = document.querySelector('#btn_popularMovies');
const doc_main = document.querySelector('main');

const state = {
    config: {
        base_api_url: "https://api.themoviedb.org/3/",
        api_key: 'ebb736fb6b92bbb03b0837dd3b5e18d3',
        language: 'it-IT',
        error_mess: 'La richiesta non è andata a buon fine :/'
    },

    movies: null
}

function utility(path) {
    const completeURL = `${state.config.base_api_url}${path}?api_key=${state.config.api_key}&language=${state.config.language}`;
    
    return completeURL;
}

//per rendere il codice più pulito, creo una seconda funzione che esegue la richiesta asincrona: essa verrà invocata dall'addEventListener...

async function getPopularMovies() {
    try {
        const request = utility('movie/popular');
        console.log('URL di richiesta: ',request);

        btn1_popularMovies.classList.add('is_invisible'); //facciamo scomparire prima di tutto il bottone...

        const response = await fetch(request);

        if (!response.ok) {
            throw error;
        }

        const result = await response.json();

        state.movies = result.results;

        console.log('Film popolari: \n', state.movies);

        const div_result = document.createElement('div');
        const moviesList = document.createElement('li');

        for (movie of result.results) {
           const title = document.createElement('ul');
           title.textContent = movie.title;

           moviesList.appendChild(title);
        }

        div_result.appendChild(moviesList);

        doc_main.appendChild(div_result);


    }

    catch (err) {
        console.error(err);
        console.log('Errore:', state.config.error_mess);

        const errorText = document.createElement('div');
        errorText.classList.add('banner_err');

        errorText.textContent = 'Si è verificato un errore!';

        doc_main.appendChild(errorText);
    }
}

btn1_popularMovies.addEventListener('click', getPopularMovies);

