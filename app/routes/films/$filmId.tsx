import { LoaderFunction, useLoaderData } from 'remix';
import invariant from 'tiny-invariant';
import CharacterList from '~/components/CharacterList';
import FilmBanner from '~/components/FilmBanner';
import { Film } from '~/services/Film';
import { getFilmById } from '~/services/Film/getFilmById';

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.filmId, 'expected params.filmId');

  const film = await getFilmById(params.filmId);

  console.log('prefetch -> ', film.title);

  return film;
};

export default function FilmId() {
  const film = useLoaderData<Film>();
  return (
    <div>
      <FilmBanner film={film} />

      <div className="p-5">
        <p>{film.description}</p>

        <div className="flex py-5 space-x-5">
          <CharacterList characters={film.characters} />
        </div>
      </div>
    </div>
  );
}
