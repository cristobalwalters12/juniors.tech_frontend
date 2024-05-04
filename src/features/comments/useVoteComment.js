import { useMutation, useQueryClient } from '@tanstack/react-query'
import { voteComment } from '../../services/comments'

const useVoteComment = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: voteComment,
    onMutate: (payload) => {
      let prevCommentsData
      queryClient.setQueryData(
        ['posts', payload.postId, 'comments'],
        (prevComments) => {
          prevCommentsData = prevComments
          return prevComments.map(comment => {
            if (comment.id !== payload.commentId) {
              return comment
            }
            let newVoteCount = 0
            let newVoteDirection = 0
            // unvote
            if (comment.voteDirection === payload.voteDirection) {
              newVoteCount = comment.voteCount - payload.voteDirection
              newVoteDirection = 0
            } else {
              // nre vote
              if (comment.voteDirection === 0) {
                newVoteCount = comment.voteCount + payload.voteDirection
              } else {
                // reverse vote direction
                newVoteCount = comment.voteCount + 2 * payload.voteDirection
              }
              newVoteDirection = payload.voteDirection
            }
            return {
              ...comment,
              voteCount: newVoteCount,
              voteDirection: newVoteDirection
            }
          }
          )
        }
      )
      return prevCommentsData
    },
    onError: (error, variables, context) => {
      queryClient.setQueryData(['posts', variables.postId, 'comments'], context)
      throw error
    },
    retry: 0
  })
}

export { useVoteComment }
