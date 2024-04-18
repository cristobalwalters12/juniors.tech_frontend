import { useMutation, useQueryClient } from '@tanstack/react-query'
import { savePost } from '../../services/posts'

const useSavePost = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: savePost,
    onSuccess: (newPost) => {
      return queryClient.setQueryData(['posts', newPost.id], newPost)
    }
  })
}

export { useSavePost }
