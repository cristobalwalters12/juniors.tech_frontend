import { useQuery } from '@tanstack/react-query'
import { getPostById } from '../../services/posts'

const useGetSinglePost = (id) => {
  const { isLoading, data: post, isError, error } = useQuery({
    queryKey: ['post'],
    queryFn: () => getPostById(id)
  })
  return { isLoading, post, isError, error }
}

export { useGetSinglePost }
