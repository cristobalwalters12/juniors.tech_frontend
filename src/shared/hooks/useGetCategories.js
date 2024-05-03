import { useQuery } from '@tanstack/react-query'
import { getCategories } from '../../services/categories'

const useGetCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
    staleTime: 60 * 60 * 1000, // 1h
    retry: 1
  })
}

export { useGetCategories }
