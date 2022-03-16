export async function getComments(filmId: string) {
  const response = await fetch(
    `http://localhost:3001/comments?filmId=${filmId}`,
  );

  return response.json();
}
