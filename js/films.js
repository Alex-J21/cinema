const genre = [
        'фантастика',
        'боевик',
        'приключения',
        'фэнтези',
        'драма',
        'комедия',
        'мультфильм',
        'комедия',
        'фантастика',
        'боевик'
];

/* const genre_1 = 'фантастика';
const genre_2 = 'боевик';
const genre_3 = 'приключения';
const genre_4 = 'фэнтези';
const genre_5 = 'драма';
const genre_6 = 'комедия'
const genre_7 = 'мультфильм';
const genre_8 = 'комедия';
const genre_9 = 'фантастика';
const genre_10 = 'боевик' */

const films = [
    {
        start: '10:00',
        name: 'Человек паук',
        genre: `${genre[0]}, ${genre[1]}, ${genre[2]}`
    },
    {
        start: '12:00',
        name: 'Собачья жизнь 2',
        genre: `${genre[0]}, ${genre[4]}, ${genre[5]}`
    },
    {
        start: '14:00',
        name: 'История игрушек 4',
        genre: `${genre[6]}, ${genre[3]}, ${genre[5]}`
    },
    {
        start: '16:00',
        name: 'Люди в чернгом: Интернэшнл',
        genre: `${genre[8]}, ${genre[1]}, ${genre[5]}`
    }
]

for (let i = 0; i < films.length; i++) {
    const film = films[i];
    const filmStartId = 'films_start_' + (i + 1);
    const filmStart = document.getElementById(filmStartId)
    filmStart.innerHTML = film.start

    const filmNameId = 'films_name_' + (i + 1);
    const filmName = document.getElementById(filmNameId)
    filmName.innerHTML = film.name

    const filmGenreId = 'films_genre_' + (i + 1);
    const filmGenre = document.getElementById(filmGenreId)
    filmGenre.innerHTML = film.genre
}