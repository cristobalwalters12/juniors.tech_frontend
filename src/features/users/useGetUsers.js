import { useQuery } from '@tanstack/react-query'
import { getUsers } from '../../services/users'

const useGetUsers = () => {
  const { isLoading, data: usersAll, isError, error } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers
  })
  return { isLoading, usersAll, isError, error }
}

export { useGetUsers }
