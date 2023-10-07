"use client";

import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { useUser, useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Loading from "./loading";
import { Button } from "@/components/ui/button";
import { Suspense, useState } from "react";
import Posts from "@/components/posts";
import { useCreatePostMutation } from "@/lib/api";

const Home = () => {
  const { userId } = useAuth();
  const router = useRouter();
  const { user } = useUser();
  const [content, setContent] = useState<string>("");
  const { isPending, mutate } = useCreatePostMutation();
  
  if (!user) {
    return <Loading />;
  }

  const createPost = () => {
    if (!content.length) return;
    mutate({userId: userId!, content});
    setContent('')
  }

  return (
    <div className="items-center justify-center h-full">
      <div className="flex">
        <Image
          alt="User profile image"
          className="rounded-full"
          src={user!.imageUrl}
          width={40}
          height={40}
        />
        <div className="px-2 items-center">
          <h2 className="text-xs text-gray-400 font-bold tracking-tight">
            @{user.username}
          </h2>
          <h2 className="text-l font-bold tracking-medium">{`${user.firstName} ${user.lastName}`}</h2>
        </div>
      </div>
      <div className="bg-slate-100 h-40 dark:bg-zinc-900 w-full  rounded-lg border-none mt-4">
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className=" bg-slate-100 dark:bg-zinc-900 h-20"
          placeholder="Start typing..."
        />
        <div className="flex justify-end h-1/2 mr-4 items-center">
          {/* <Button className='bg-transparent hover:bg-zinc-200 w-8 h-8 hover:text-gray-800 text-gray-400'>
            <p className=''>@</p>
          </Button> */}
          <Button onClick={createPost} disabled={isPending} className="h-8 ml-4">
            {isPending ? <Loading /> : <p>Post</p>}
          </Button>
        </div>
      </div>
      <Suspense fallback={<Loading />}>
        <Posts />
      </Suspense>
    </div>
  );
};

export default Home;
