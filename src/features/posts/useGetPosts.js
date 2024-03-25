import { useQuery } from '@tanstack/react-query'
import { getPosts } from '../../services/posts'

const useGetPosts = () => {
  const { isLoading, data: posts, isError, error } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts
  })
  return { isLoading, posts, isError, error }
}

export { useGetPosts }
