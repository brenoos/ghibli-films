import {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
  useLoaderData,
} from 'remix';
import { Film } from '~/services/Film/Film';
import { getFilms } from '~/services/Film/getFilms';

export const loader: LoaderFunction = async () => {
  return getFilms();
};

export const meta: MetaFunction = () => ({
  title: 'Films | Studio Ghibli',
  description: 'List of Films',
});

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: 'styles' },
];

export default function FilmsIndex() {
  const films = useLoaderData<Film[]>();
  return (
    <div className="p-16 font-sans">
      <h1 className="text-5xl font-bold text-center">Studio Ghibli Films</h1>
      <div className="grid grid-cols-4 gap-4">
        {films.map(film => (
          <div
            key={film.id}
            className="hover:shadow-2xl hover:scale-105 hover:font-bold cursor-pointer">
            <div>{film.title}</div>
            <img src={film.image} alt={film.title} />
          </div>
        ))}
      </div>
    </div>
  );
}
