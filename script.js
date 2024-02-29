const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=07f292579dd123579d5e1abafcc8dd6a&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = "https://api.themoviedb.org/3/discover/movie?&api_key=07f292579dd123579d5e1abafcc8dd6a&query=";

const main = document.getElementById("section")
const form = document.getElementById("form")
const search = document.getElementById("query")

function returnMovies(url) {
    fetch(url).then(res => res.json()).then(function(data){
        console.log(data.results);
        data.results.forEach(element => {
            const div_card = document.createElement('div');
            const div_row = document.createElement('div');
            const div_column = document.createElement('div');
            const image = document.createElement('img');
            const title = document.createElement('h3');
            const center = document.createElement('center');

            title.innerHTML = `${element.title}`;
            image.src = IMG_PATH + element.poster_path;
            
        })
    })
}
