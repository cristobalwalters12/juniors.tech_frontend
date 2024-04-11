import { useQuery } from '@tanstack/react-query'
import { getCategories } from '../../services/categories'

const useGetCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: getCategories
  })
}

export { useGetCategories }
