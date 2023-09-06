import { getBaseURL } from "./utils";
import { useMutation, useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";

export const baseURL = getBaseURL();

const fetchPosts = async () => {
  const path = `${baseURL}/api/posts`;
  const url = baseURL + path;

  const res = await axios.get(url);
  return res.data;
};

export function usePostsQuery() {
  const query = useSuspenseQuery<PostResponse, Error>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  })

  return query.data
};

const createPost = (post: Post) => {
  return axios.post(`${baseURL}/api/posts`, post);
};

export const useCreatePostMutation = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient()
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
      queryClient.invalidateQueries({queryKey: ['posts']})
    },
  });
};
