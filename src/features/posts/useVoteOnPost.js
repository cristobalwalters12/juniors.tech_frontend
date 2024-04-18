import { useMutation, useQueryClient } from '@tanstack/react-query'
import { voteOnPost } from '../../services/posts'

const useVoteOnPost = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: voteOnPost,
    onMutate: (payload) => payload,
    onSuccess: (votedPost, variables, context) => {
      queryClient.setQueryData(
        ['posts', context.postId],
        (prevPost) => {
          let newVoteCount = 0
          let newVoteDirection = 0
          // unvote
          if (prevPost.voteDirection === context.voteDirection) {
            newVoteCount = prevPost.voteCount - context.voteDirection
            newVoteDirection = 0
          } else {
            // nre vote
            if (prevPost.voteDirection === 0) {
              newVoteCount = prevPost.voteCount + context.voteDirection
            } else {
              // reverse vote direction
              newVoteCount = prevPost.voteCount + 2 * context.voteDirection
            }
            newVoteDirection = context.voteDirection
          }
          return {
            ...prevPost,
            voteCount: newVoteCount,
            voteDirection: newVoteDirection
          }
        }
      )
    },
    retry: 0
  })
}

export { useVoteOnPost }
