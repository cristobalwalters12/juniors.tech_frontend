import { useMutation } from '@tanstack/react-query'
import { voteComment } from '../../services/comments'

const useVoteComment = () => {
  return useMutation({
    mutationFn: voteComment
  })
}

export { useVoteComment }
