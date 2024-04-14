import { useMutation, useQueryClient } from '@tanstack/react-query'
import { loginUser as loginUserService } from '../../services/users'
import { useAuthStore } from '../../stores/authStore'

const useLoginUser = () => {
  const queryClient = useQueryClient()
  const setToken = useAuthStore((state) => state.setToken)
  const setId = useAuthStore((state) => state.setId)
  const setUser = useAuthStore((state) => state.setUser)
  const setRoles = useAuthStore((state) => state.setRoles)
  const setAvatarUrl = useAuthStore((state) => state.setAvatarUrl)
  const loginUserMutation = useMutation({
    mutationFn: loginUserService,
    onSuccess: (response) => {
      const data = response.data
      queryClient.invalidateQueries('users')
      setToken(data.accessToken)
      setId(data.id)
      setUser(data.username)
      setAvatarUrl(data.userImageURL)
      if (Array.isArray(data.roles)) {
        setRoles(data.roles)
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
