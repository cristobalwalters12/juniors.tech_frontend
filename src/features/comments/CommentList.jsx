import { handleComments } from './commentUtils'
import { Comment } from './Comment'
import { useEffect, useState } from 'react'
import { getComments } from '../../services/comments'

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([])
  const { rootComments, getRepliesById } = handleComments(comments)

  useEffect(() => {
    getComments(postId).then(data => setComments(data))
  }, [postId])

  return (
    <div className="p-3 pt-1">
      {rootComments?.map(comment =>
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
