import { useQuery } from '@tanstack/react-query'
import { getPostById } from '../../services/posts'

const useGetSinglePost = (postId) => {
  return useQuery({
    queryKey: ['posts', postId],
    queryFn: () => getPostById(postId),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 5 * 60 * 1000 // 5min
  })
}

export { useGetSinglePost }
