import { handleComments } from './commentUtils'
import { Comment } from './Comment'
import { useGetComments } from './useGetComments'
import { showErrorToast } from '../../shared/utils/showErrorToast'

const CommentList = ({ postId }) => {
  const getCommentsQuery = useGetComments(postId)
  const comments = handleComments(getCommentsQuery?.data)

  if (getCommentsQuery?.isLoading) {
    return <h2>Cargando...</h2>
  }

  if (getCommentsQuery?.isError) {
    showErrorToast(getCommentsQuery.error, '')
    return <h2>{getCommentsQuery.error.message}</h2>
  }

  return (
    <div className="p-3 pt-1">
      {getCommentsQuery?.data.map(comment =>
        <Comment
          key={comment.id}
          comment={comment}
          getRepliesById={comments?.getRepliesById}
        />
      )}
    </div>
  )
}

export { CommentList }
