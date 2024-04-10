import HolyGrailLayout from '../layouts/HolyGrailLayout'
import { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { Button } from '@material-tailwind/react'
import { useGetSinglePost } from '../features/posts/useGetSinglePost'
import { Post } from '../features/posts/Post'
import { CommentList } from '../features/comments/CommentList'
import { CreateCommentForm } from '../features/comments/SaveCommentForm'
import { useSaveComment } from '../features/comments/useSaveComment'
import { useAuthStore } from '../stores/authStore'

const PostDetails = () => {
  const { id } = useParams()
  const isAuth = useAuthStore((state) => state.isAuth)
  const [replying, setReplying] = useState(false)
  const query = useGetSinglePost(id)
  const navigate = useNavigate()
  const saveComment = useSaveComment()
  const openReplyForm = () => {
    if (!isAuth) {
      navigate('/login')
    }
    setReplying(true)
  }
  const closeReplyForm = () => {
    setReplying(false)
  }

  if (query.isLoading) return <h1>Cargando...</h1>
  if (query.isError) {
    return <Navigate to="/not-found" />
  }

  const submitReply = (reply) => {
    reply.parentId = null
    saveComment.mutate({
      postId: id,
      comment: reply
    })
    closeReplyForm()
  }
  return (
    <HolyGrailLayout>
      <main className='max-w-[60rem]'>
        <Post post={query.data} />
        <div className='pt-4 pl-0 bg-blue-gray-100'>
          {
            replying
              ? <CreateCommentForm
                  submitReply={submitReply}
                  close={closeReplyForm}
                  className="pl-3 pr-3 mb-0"
                />
              : <Button
                  className='ml-3'
                  variant='filled'
                  onClick={openReplyForm}
                >
                  Agregar comentario
                </Button>
          }
        </div>
        <CommentList postId={id} />
      </main>
    </HolyGrailLayout>
  )
}

export default PostDetails
