import { handleComments } from './commentUtils'
import { Comment } from './Comment'
import { useGetComments } from './useGetComments'
import { showErrorToast } from '../../shared/utils/showErrorToast'
import { Spinner, Typography } from '@material-tailwind/react'

const CommentList = ({ postId }) => {
  const getCommentsQuery = useGetComments(postId)
  const comments = handleComments(getCommentsQuery?.data)

  if (getCommentsQuery?.isLoading) {
    return (
    <div className='flex justify-center'>
      <Spinner className="h-16 w-16 text-gray-900/50" />
    </div>)
  }

  if (getCommentsQuery?.isError) {
    showErrorToast(getCommentsQuery.error, '')
    return <h2>{getCommentsQuery.error.message}</h2>
  }

  return (
    <div className="p-3 pt-1 pr-5 ">
      {getCommentsQuery.data.length > 0
        ? getCommentsQuery.data.map(comment =>
        <Comment
          key={comment.id}
          comment={comment}
          getRepliesById={comments?.getRepliesById}
        />
        )
        : <div className='flex items-center justify-center pt-6'>
          <Typography className='text-lg font-normal'>Aún no hay comentarios. Anímate a dejar el tuyo</Typography>
        </div>
    }
    </div>
  )
}

export { CommentList }
