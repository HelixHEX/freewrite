interface Post {
  id?: number;
  createdAt?: string;
  updatedAt?: string;
  content: string;
  userId: string;
}

interface User {
  firstName: string;
  lastName: string;
  username: string;
  profileImage: string;
}

interface PostResponse {
  posts: Post[] | undefined,
}