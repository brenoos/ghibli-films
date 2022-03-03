import { Film } from './';

export async function getFilms(title?: string | null): Promise<Film[]> {
  const response = await fetch('https://ghibliapi.herokuapp.com/films');

  const films: Film[] = await response.json();

  return films.filter(film =>
    title ? film.title.toLowerCase().includes(title.toLowerCase()) : true,
  );
}
