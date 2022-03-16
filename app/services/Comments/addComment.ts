import { CommentEntry } from '.';

export async function addComment(comment: CommentEntry) {
  const response = await fetch('http://localhost:3001/comments', {
    method: 'POST',
    body: JSON.stringify(comment),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
}
