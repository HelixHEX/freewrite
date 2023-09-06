import { usePostsQuery } from "@/lib/api";
import { useEffect } from "react";

const Posts = () => {
  const { posts } = usePostsQuery();

  useEffect(() => {
    console.log(Array.isArray(posts));
  }, [posts]);
  return (
    <>
      {posts?.map((post, index) => (
        <div key={index}>
          <h1>{post.content}</h1>
        </div>
      ))}
    </>
  );
};

export default Posts;
