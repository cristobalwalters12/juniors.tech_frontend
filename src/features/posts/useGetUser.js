import { useQuery } from '@tanstack/react-query'
import { getUser } from '../../services/users'

const useGetUser = () => {
  const { isLoading, data: user, isError, error } = useQuery({
    queryKey: ['user'],
    queryFn: getUser
  })
  return { isLoading, user, isError, error }
}

export { useGetUser }
