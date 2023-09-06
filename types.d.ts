interface Post {
  id?: number;
  createdAt?: string;
  updatedAt?: string;
  content: string;
  userId: string;
}

interface PostResponse {
  posts: Post[] | undefined,
}