import { useGetComments } from './useGetComments'
import { handleComments } from './commentUtils'
import { Comment } from './Comment'

const CommentList = ({ postId }) => {
  const query = useGetComments(postId)
  if (query.isLoading) return <h1>Cargando...</h1>
  if (query.isError) return <h1>{query.error.message}</h1>
  const { rootComments, getRepliesById } = handleComments(query.data)

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
