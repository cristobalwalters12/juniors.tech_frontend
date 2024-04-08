import { useQuery } from '@tanstack/react-query'
import { getPosts } from '../../services/posts'

const useGetPosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: getPosts
    // select: (data) => data.sort((a, b) => b.id - a.id)
  })
}

export { useGetPosts }
