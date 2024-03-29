import { useQuery } from '@tanstack/react-query'
import { getUsers } from '../../services/users'

const useGetUsers = () => {
  const { isLoading, data: users, isError, error } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers
  })
  return { isLoading, users, isError, error }
}

export { useGetUsers }
