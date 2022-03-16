import { Film } from './';

export async function getFilmById(filmId: string) {
  const response = await fetch(
    `https://ghibliapi.herokuapp.com/films/${filmId}`,
  );

  const film: Film = await response.json();

  const characters = await Promise.all(
    film.people
      .filter(url => url !== 'https://ghibliapi.herokuapp.com/people/')
      .map(url => fetch(url).then(response => response.json())),
  );

  return { ...film, characters };
}
