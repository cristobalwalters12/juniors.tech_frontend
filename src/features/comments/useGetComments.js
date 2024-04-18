import { useQuery } from '@tanstack/react-query'
import { getComments } from '../../services/comments'

const useGetComments = (postId) => {
  return useQuery({
    queryKey: ['posts', postId, 'comments'],
    queryFn: () => getComments(postId),
    staleTime: 60 * 60 * 1000, // 1h in ms
    retry: false
  })
}

export { useGetComments }
