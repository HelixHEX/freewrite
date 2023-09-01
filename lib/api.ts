import { getBaseURL } from "./utils";
import { useSuspenseQuery } from '@tanstack/react-query'
import axios from 'axios'

export const baseURL = getBaseURL()

const fetchPosts = async () => {
  const path = `${baseURL}/api/posts`
  const url = baseURL + path

  console.log('fetching posts: ', url)
  const res: string = await ((await axios.get(url)).data)
  return res
}

export const usePostsQuery = () => {
  const query = useSuspenseQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })

  return [query.data, query] as const
}