import { useNavigate } from 'react-router'
import { useMutation } from '@tanstack/react-query'
import { editPost } from '../../services/posts'

const useEditPost = () => {
  const navigate = useNavigate()

  const editPostMutation = useMutation({
    mutationFn: editPost,
    onSuccess: ({ data }) => {
      navigate(`/posts/${data.id}`)
    }
  })

  return editPostMutation
}

export { useEditPost }
