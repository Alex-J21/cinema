const url = 'https://kinopoiskapiunofficial.tech/api/v2.1';
const filmsElement = document.getElementsByClassName('block5__table')[0];
const tableFilmsElement = document.getElementsByClassName('movie-list__table')[0];

const films = [
    463634,
    1009784,
    12362,
    922165,
    93377,
    195332
];

const parseFilm = function (data) {
    data = data.data;
    let countries = '';
    let genres = '';
    data.countries.forEach(function (item) {
        countries += `${item.country} `
    })
    data.genres.forEach(function (item) {
        genres += `${item.genre} `
    })
    return {
        name: data.nameRu,
        country: countries,
        genre: genres,
        year: data.year,
        description: data.description,
        img: data.posterUrl,
        link: data.webUrl
    }
}

const getFilmById = function (id) {
    return new Promise(function (resolve, reject) {
        fetch(`${url}/films/${id}`, {
            headers: {
                "X-API-KEY": "540c9d7a-3bcb-498f-a146-bfd5725b50a3"
            }
        }).then(response => response.json()).then(resolve);
    });
};


const generateTableItem = function ({name, genre}) {
    return `<tr>
        <td>12.00</td>
        <td >${name}</a></td>
        <td>${genre}</td>
        <td class="left"><img src="img/More icon.png" alt=""></td>
    </tr>`
}


const genereteFilmItem = function ({
    name,
    country,
    genre,
    year,
    description,
    img,
    link
}) {
    return (`<div class="block5__movie">
    <div class="block5__relative">
        <div class="block05__bg">
            <img src="${img}" class="block5__film_cover">
        </div>
        <div class="block5__description">
            <div class="block5__film">
                <p>${name}</p>
            </div>
            <div class="block5__sep"></div>
            <div class="block5__text">
                <p>${description}</p>
            </div>
            <div class="block5__icon">
                <a href="#" target="_blanck"><img src="img/facebook_.png" alt="facebook"></a>
                <a href="#" target="_blanck"><img src="img/twitter.png" alt="twitter"></a>
                <a href="#" target="_blanck"><img src="img/behance.png" alt="behance"></a>
                <a href="#" target="_blanck"><img src="img/dribbble .png" alt="dribbble"></a>
            </div>
        </div>
        </div>
</div>`)
};

let element, prepareFilm;
films.forEach(function (item) {
    let film = getFilmById(item);
    film.then(result => {
        prepareFilm = parseFilm(result);
        element = genereteFilmItem({...prepareFilm});
        tableElement = generateTableItem({...prepareFilm});
        filmsElement.insertAdjacentHTML('beforeEnd', element);
    });
});