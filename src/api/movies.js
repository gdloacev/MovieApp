import {API_HOST, API_KEY, API_LANG} from '../utils/Constants';

export function getPlayingNowMoviesApi(page = 1){
    const url = `${API_HOST}/movie/now_playing?api_key=${API_KEY}&language=${API_LANG}&page=${page}`;

    return fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((result) => {
        return result;
    });
}

export function getGenreMovieApi(idGenres){
    const url = `${API_HOST}/genre/movie/list?api_key=${API_KEY}&language=${API_LANG}`

    return fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((result) => {
        const arrayGenres = [];
        idGenres.forEach((id) => {
            result.genres.forEach((item) => {
                if(item.id == id) arrayGenres.push(item.name);
            });
        });
        return arrayGenres;
    });
}

