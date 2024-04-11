import { useNavigate } from 'react-router'
import { useMutation } from '@tanstack/react-query'
import { editPost } from '../../services/posts'

const useEditPost = () => {
  const navigate = useNavigate()

  const editPostMutation = useMutation({
    mutationFn: editPost,
    onSuccess: ({ data: { data } }) => {
      navigate(`/posts/${data.id}`, { replace: true })
    }
  })

  return editPostMutation
}

export { useEditPost }
