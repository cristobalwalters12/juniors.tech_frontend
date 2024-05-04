import { handleComments } from './commentUtils'
import { Comment } from './Comment'
import { useGetComments } from './useGetComments'
import { showErrorToast } from '../../shared/utils/showErrorToast'
import { Typography } from '@material-tailwind/react'
import { CommentSkeletonList } from '../../shared/components/Skeletons/CommentSkeletonList'

const CommentList = ({ postId, className }) => {
  const getCommentsQuery = useGetComments(postId)
  const comments = handleComments(getCommentsQuery?.data)

  if (getCommentsQuery?.isError) {
    showErrorToast(getCommentsQuery.error, '')
    return <Typography className='text-lg font-normal'>{getCommentsQuery.error.message}</Typography>
  }

  return (
    <div className={className}>
      {getCommentsQuery?.isLoading
        ? <CommentSkeletonList totalSkeletons={2} />
        : getCommentsQuery.data.length > 0
          ? comments.rootComments.map((comment, index) =>
            <Comment
              key={comment.id}
              comment={comment}
              getRepliesById={comments?.getRepliesById}
              className={index !== 0 ? 'mt-4' : ''}
            />
          )
          : <div className='flex items-center justify-center'>
          <Typography className='text-lg font-normal'>Aún no hay comentarios. Anímate a dejar el tuyo</Typography>
        </div>
    }
    </div>
  )
}

export { CommentList }
