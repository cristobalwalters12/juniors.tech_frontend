import { useQuery } from '@tanstack/react-query'
import { getPostById } from '../../services/posts'

const useGetSinglePost = (id) => {
  return useQuery({
    queryKey: ['post'],
    queryFn: () => getPostById(id),
    refetchOnWindowFocus: false,
    retry: false
  })
}

export { useGetSinglePost }
