import { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { Button } from '@material-tailwind/react'
import { useGetSinglePost } from '../features/posts/useGetSinglePost'
import { Post } from '../features/posts/Post'
import { CommentList } from '../features/comments/CommentList'
import { SaveCommentForm } from '../features/comments/SaveCommentForm'
import RequireAuthOnClick from '../shared/components/Auth/RequireAuthOnClick'

const PostDetails = () => {
  const { id: postId } = useParams()
  const [replying, setReplying] = useState(false)
  const query = useGetSinglePost(postId)
  const toggleReplyForm = () => setReplying(prevState => !prevState)

  if (query.isLoading) return <h1>Cargando...</h1>
  if (query.isError) {
    return <Navigate to="/not-found" />
  }
  const newComment = { postId, parentId: postId }

  return (
      <div className='max-w-[60rem]'>
        <Post post={query.data} />
        <div className='pt-4 pl-0 '>
          {
            replying
              ? <SaveCommentForm
                  comment={newComment}
                  onClose={toggleReplyForm}
                  className="pl-3 pr-3 mb-0"
                />
              : <RequireAuthOnClick onClickAuthenticated={toggleReplyForm}>
                  <Button className='ml-3' variant='filled'>
                    Agregar comentario
                  </Button>
                </RequireAuthOnClick>
          }
        </div>
        <CommentList postId={postId} />
      </div>
  )
}

export default PostDetails
