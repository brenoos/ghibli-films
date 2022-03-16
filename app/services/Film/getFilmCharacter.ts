import { FilmCharacter } from '.';

export async function getFilmCharacter(
  characterId: string,
): Promise<FilmCharacter> {
  const response = await fetch(
    `https://ghibliapi.herokuapp.com/people/${characterId}`,
  );

  if (!response.ok) {
    throw response;
  }

  return response.json();
}
