import { usePostsQuery } from "@/lib/api";
import { useEffect } from "react";
import Image from "next/image";
import PostCard from "./card";

const Posts = () => {
  const { posts } = usePostsQuery();

  return (
    <>
      {posts?.map((post, index) => (
        <PostCard 
          key={index}
          {...post}
        />
      ))}
    </>
  );
};

export default Posts;
