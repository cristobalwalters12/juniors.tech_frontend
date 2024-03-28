import { useQuery } from '@tanstack/react-query'
import { getComments } from '../../services/comments'

const useGetComments = (id) => {
  const { isLoading, data: comments, isError, error } = useQuery({
    queryKey: ['comments'],
    queryFn: () => getComments(id),
    select: (data) => data?.sort((a, b) => a.id - b.id)
  })
  return { isLoading, comments, isError, error }
}

export { useGetComments }
