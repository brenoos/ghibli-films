import {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
  Outlet,
  redirect,
  useLoaderData,
} from 'remix';
import invariant from 'tiny-invariant';
import CharacterList from '~/components/CharacterList';
import CommentsList from '~/components/CommentsList';
import FilmBanner from '~/components/FilmBanner';
import { addComment } from '~/services/Comments/addComment';
import { Film } from '~/services/Film';
import { getFilmById } from '~/services/Film/getFilmById';

export const meta: MetaFunction = ({ data: { title, description } }) => ({
  title,
  description,
});

export const action: ActionFunction = async ({ request, params }) => {
  invariant(params.filmId, 'expected params.filmId');

  const formData = await request.formData();

  const comment = {
    name: formData.get('name') as string,
    message: formData.get('message') as string,
    filmId: params.filmId,
  };

  await addComment(comment);

  return redirect(`/films/${params.filmId}`);
};

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

          <div className="flex-1 flex flex-col justify-between">
            <Outlet />

            <CommentsList filmId={film.id} comments={film.comments || []} />
          </div>
        </div>
      </div>
    </div>
  );
}
