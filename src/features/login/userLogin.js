import { useMutation, useQueryClient } from '@tanstack/react-query'
import { loginUser as loginUserService } from '../../services/users'
import { useAuthStore } from '../../stores/authStore'

const useLoginUser = () => {
  const queryClient = useQueryClient()
  const setToken = useAuthStore((state) => state.setToken)
  const setId = useAuthStore((state) => state.setId)
  const setUser = useAuthStore((state) => state.setUser)
  const setRole = useAuthStore((state) => state.setRole)
  const loginUserMutation = useMutation({
    mutationFn: loginUserService,
    onSuccess: (response) => {
      const data = response.data
      queryClient.invalidateQueries('users')
      setToken(data.accessToken)
      setId(data.id)
      setUser(data.username)
      if (Array.isArray(data.roles) && data.roles.length > 0) {
        setRole(data.roles[0])
      }
    },
    onError: (error) => {
      console.log(error)
    }
  })

  return {
    loginUser: loginUserMutation.mutate,
    isError: loginUserMutation.isError
  }
}

export { useLoginUser }
