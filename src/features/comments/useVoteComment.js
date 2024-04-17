import { useMutation, useQueryClient } from '@tanstack/react-query'
import { voteComment } from '../../services/comments'

const useVoteComment = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: voteComment,
    onMutate: (payload) => payload,
    onSuccess: (votedComment, variables, context) => {
      queryClient.setQueryData(
        ['comments', context.postId],
        (prevComments) => (
          prevComments.map(comment => {
            if (comment.id !== context.commentId) {
              return comment
            }
            let newVoteCount = 0
            let newVoteDirection = 0
            // unvote
            console.log({ voteDirection: context.voteDirection, comment })
            if (comment.voteDirection === context.voteDirection) {
              newVoteCount = comment.voteCount - context.voteDirection
              newVoteDirection = 0
            } else {
              // nre vote
              if (comment.voteDirection === 0) {
                newVoteCount = comment.voteCount + context.voteDirection
              } else {
                // reverse vote direction
                newVoteCount = comment.voteCount + 2 * context.voteDirection
              }
              newVoteDirection = context.voteDirection
            }
            console.log({
              newVoteCount,
              newVoteDirection
            })
            return {
              ...comment,
              voteCount: newVoteCount,
              voteDirection: newVoteDirection
            }
          })
        ))
    },
    retry: 0
  })
}

export { useVoteComment }
