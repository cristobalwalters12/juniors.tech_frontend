import { useQuery } from '@tanstack/react-query'
import { getPosts } from '../../services/posts'

const useGetPosts = () => {
  const { isLoading, data: posts, isError, error } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    select: (data) => data.sort((a, b) => b.id - a.id)
  })
  return { isLoading, posts, isError, error }
}

export { useGetPosts }
