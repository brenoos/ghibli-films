import { Film } from './';

export async function getFilmById(filmId: string) {
  const response = await fetch(
    `https://ghibliapi.herokuapp.com/films/${filmId}`,
  );

  const film: Film = await response.json();

  return film;
}
