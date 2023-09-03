import { getBaseURL } from "./utils";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";

export const baseURL = getBaseURL();

const fetchPosts = async () => {
  const path = `${baseURL}/api/posts`;
  const url = baseURL + path;

  console.log("fetching posts: ", url);
  const res: string = await (await axios.get(url)).data;
  return res;
};

export const usePostsQuery = () => {
  const query = useSuspenseQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  return [query.data, query] as const;
};

const createPost = (post: Post) => {
  return axios.post(`${baseURL}/api/posts`, post);
};

export const useCreatePostMutation = () => {
  const { toast } = useToast();
  return useMutation({
    mutationFn: createPost,
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong",
      });
    },
    onSuccess: () => {
      toast({
        title: "Post created",
        description: "Your post has been created",
      });
    },
  });
};
