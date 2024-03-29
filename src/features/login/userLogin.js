import { useMutation, useQueryClient } from '@tanstack/react-query'
import { loginUser as loginUserService, getUser } from '../../services/users'
import { useAuthStore } from '../../stores/authStore'

const useLoginUser = () => {
  const queryClient = useQueryClient()
  const setToken = useAuthStore((state) => state.setToken)
  const setId = useAuthStore((state) => state.setId)
  const setUser = useAuthStore((state) => state.setUser)

  const loginUserMutation = useMutation({
    mutationFn: loginUserService,
    onSuccess: (data) => {
      queryClient.invalidateQueries('users')
      setToken(data.token)
      getUserMutation.mutate()
    },
    onError: (error) => {
      console.log('puta la wea', error)
    }
  })
  const getUserMutation = useMutation({
    mutationFn: getUser,
    onSuccess: (data) => {
      queryClient.invalidateQueries('users')
      console.log(data)
      setId(data[0].id)
      setUser(data[0].username)
    },
    onError: (error) => {
      console.log('puta la wea', error)
    }
  })

  return {
    loginUser: loginUserMutation.mutate,
    getUser: getUserMutation.mutate,
    isError: loginUserMutation.isError || getUserMutation.isError
  }
}

export { useLoginUser }
