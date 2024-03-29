import { useQuery } from '@tanstack/react-query'
import { getComments } from '../../services/comments'

const useGetComments = (id) => {
  return useQuery({
    queryKey: ['comments'],
    queryFn: () => getComments(id),
    staleTime: 60 * 60 * 1000 // 1h in ms
    // select: (data) => data?.sort((a, b) => a.id - b.id)
  })
}

export { useGetComments }
