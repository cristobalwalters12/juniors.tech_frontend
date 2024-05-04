import { useMutation, useQueryClient } from '@tanstack/react-query'
import { voteOnPost } from '../../services/posts'

const useVoteOnPost = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: voteOnPost,
    onMutate: (payload) => {
      let prevPostData
      queryClient.setQueryData(
        ['posts', payload.postId],
        (prevPost) => {
          prevPostData = prevPost
          let newVoteCount = 0
          let newVoteDirection = 0
          // unvote
          if (prevPost.voteDirection === payload.voteDirection) {
            newVoteCount = prevPost.voteCount - payload.voteDirection
            newVoteDirection = 0
          } else {
            // new vote
            if (prevPost.voteDirection === 0) {
              newVoteCount = prevPost.voteCount + payload.voteDirection
            } else {
              // reverse vote direction
              newVoteCount = prevPost.voteCount + 2 * payload.voteDirection
            }
            newVoteDirection = payload.voteDirection
          }
          return {
            ...prevPost,
            voteCount: newVoteCount,
            voteDirection: newVoteDirection
          }
        }
      )
      return prevPostData
    },
    onError: (error, variables, context) => {
      queryClient.setQueryData(['posts', variables.postId], context)
      throw error
    },
    retry: 0
  })
}

export { useVoteOnPost }
