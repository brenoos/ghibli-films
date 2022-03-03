import { LoaderFunction, useLoaderData } from 'remix';
import invariant from 'tiny-invariant';
import { Film } from '~/services/Film';
import { getFilmById } from '~/services/Film/getFilmById';

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.filmId, 'expected params.filmId');

  const film = await getFilmById(params.filmId);
  console.log('fetching gilm... -->', film.title);

  return film;
};

export default function FilmId() {
  const film = useLoaderData<Film>();
  return <div>{film.title}</div>;
}
