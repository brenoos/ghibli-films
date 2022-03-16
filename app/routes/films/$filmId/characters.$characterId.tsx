import { LoaderFunction, useLoaderData } from 'remix';
import invariant from 'tiny-invariant';
import { FilmCharacter } from '~/services/Film';
import { getFilmCharacter } from '~/services/Film/getFilmCharacter';

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.characterId, 'expected params.characterId');

  return getFilmCharacter(params.characterId);
};

export default function Character() {
  const { name, gender, age, eye_color, hair_color } =
    useLoaderData<FilmCharacter>();
  return (
    <div className="mb-3">
      <div className="text-3xl mb-2">Character Detail</div>
      <div className="p-4 rounded shadow-lg border">
        <div className="text-gray-700 font-bold text-xl mb-2">{name}</div>
        <ul className="py-2">
          <li>Gender: {gender}</li>
          <li>Age: {age}</li>
          <li>Eye Color: {eye_color}</li>
          <li>Hair Color: {hair_color}</li>
        </ul>
      </div>
    </div>
  );
}
