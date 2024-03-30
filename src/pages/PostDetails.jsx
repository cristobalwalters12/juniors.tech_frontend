import { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { Button } from '@material-tailwind/react'
import { HolyGrailLayout } from '../layouts/HolyGrailLayout'
import { useGetSinglePost } from '../features/posts/useGetSinglePost'
import { Post } from '../features/posts/Post'
import { CommentList } from '../features/comments/CommentList'
import { CreateCommentForm } from '../features/comments/SaveCommentForm'
import { useSaveComment } from '../features/comments/useSaveComment'

const PostDetails = () => {
  const { id } = useParams()
  const [replying, setReplying] = useState(false)
  const query = useGetSinglePost(id)
  const saveComment = useSaveComment()
  const openReplyForm = () => setReplying(true)
  const closeReplyForm = () => setReplying(false)

  if (query.isLoading) return <h1>Cargando...</h1>
  if (query.isError) {
    return <Navigate to="/not-found" />
  }

  const submitReply = (reply) => {
    reply.parent_id = null
    saveComment.mutate({
      postId: id,
      comment: reply
    })
    closeReplyForm()
  }
  return (
    <HolyGrailLayout>
      <main className='mx-auto max-w-[60rem]'>
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
