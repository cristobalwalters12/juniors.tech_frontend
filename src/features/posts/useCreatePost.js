import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createPost } from '../../services/posts'

const useCreatePost = () => {
  const queryClient = useQueryClient()

  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: queryClient.invalidateQueries('posts')
  })

  return {
    createPost: createPostMutation.mutate
  }
}

export { useCreatePost }
