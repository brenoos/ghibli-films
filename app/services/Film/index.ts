export type FilmCharacter = {
  id: string;
  name: string;
  gender?: string;
  age?: string;
  eye_color?: string;
  hair_color?: string;
};

export type Film = {
  id: string;
  title: string;
  original_title: string;
  description: string;
  image: string;
  movie_banner: string;
  people: string[];
  characters?: FilmCharacter[];
};
