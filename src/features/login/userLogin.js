import { useMutation, useQueryClient } from '@tanstack/react-query'
import { loginUser as loginUserService, getUser } from '../../services/users'
import { useAuthStore } from '../../stores/authStore'

const useLoginUser = () => {
  const queryClient = useQueryClient()
  const setToken = useAuthStore((state) => state.setToken)
  const setId = useAuthStore((state) => state.setId)
  const setUser = useAuthStore((state) => state.setUser)
  const setRole = useAuthStore((state) => state.setRole)
  const loginUserMutation = useMutation({
    mutationFn: loginUserService,
    onSuccess: (data) => {
      queryClient.invalidateQueries('users')
      setToken(data.token)
      getUserMutation.mutate()
    },
    onError: (error) => {
      console.log(error)
    }
  })
  const getUserMutation = useMutation({
    mutationFn: getUser,
    onSuccess: (data) => {
      queryClient.invalidateQueries('users')
      setId(data[0].id)
      setUser(data[0].username)
      setRole(data[0].role)
    },
    onError: (error) => {
      console.log(error)
    }
  })

  return {
    loginUser: loginUserMutation.mutate,
    getUser: getUserMutation.mutate,
    isError: loginUserMutation.isError || getUserMutation.isError
  }
}

export { useLoginUser }
