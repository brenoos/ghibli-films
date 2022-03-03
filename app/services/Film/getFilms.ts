import { Film } from './Film';

export async function getFilms(): Promise<Film[]> {
  const response = await fetch('https://ghibliapi.herokuapp.com/films');

  return response.json();
}
