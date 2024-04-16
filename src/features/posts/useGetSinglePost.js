import { useQuery } from '@tanstack/react-query'
import { getPostById } from '../../services/posts'

const useGetSinglePost = (id) => {
  return useQuery({
    queryKey: ['post', id],
    queryFn: () => getPostById(id),
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 5 * 60 * 1000 // 5min
  })
}

export { useGetSinglePost }
