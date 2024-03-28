import { useGetComments } from './useGetComments'
import { handleComments } from './commentUtils'
import { Comment } from './Comment'

const CommentList = ({ postId }) => {
  const { isLoading, comments, isError, error } = useGetComments(postId)
  if (isLoading) return <h1>Cargando...</h1>
  if (isError) return <h1>{error.message}</h1>
  const { rootComments, getRepliesById } = handleComments(comments)

  return (
    <div className="p-3 pt-1 bg-blue-gray-100">
      {rootComments.map(comment =>
        <Comment
          key={comment.id}
          comment={comment}
          getRepliesById={getRepliesById}
        />
      )}
    </div>
  )
}

export { CommentList }
