import { useMutation } from '@tanstack/react-query'
import { createPost } from '../../services/posts'
import { useNavigate } from 'react-router'

const useCreatePost = () => {
  const navigate = useNavigate()

  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: (data) => {
      navigate(`/posts/${data.id}`, { replace: true })
    }
  })

  return createPostMutation
}

export { useCreatePost }
