interface Post {
  id?: number;
  createdAt?: string;
  updatedAt?: string;
  content: string;
  userId: string;
  user?: User
}

interface User {
  firstName: string;
  lastName: string;
  username: string;
  profileImage: string;
}


interface PostTest {
  id?: number;
  createdAt?: string;
  updatedAt?: string;
  content: string;
  userId: string;
  user?: User
}
interface PostResponse {
  posts: PostTest[] | undefined,
}