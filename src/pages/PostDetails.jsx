import { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { Card } from '@material-tailwind/react'
import { useGetSinglePost } from '../features/posts/useGetSinglePost'
import { Post } from '../features/posts/Post'
import { CommentList } from '../features/comments/CommentList'
import { SaveCommentForm } from '../features/comments/SaveCommentForm'
import { useDocumentTitle } from '../shared/hooks/useDocumentTitle'
import { showErrorToast } from '../shared/utils/showErrorToast'
import Rules from '../shared/components/Rules'
import PostSkeleton from '../shared/components/Skeletons/PostSkeleton'

const PostDetails = () => {
  const { id: postId } = useParams()
  const [replying, setReplying] = useState(false)
  const navigate = useNavigate()
  const getSinglePostQuery = useGetSinglePost(postId)
  useDocumentTitle(getSinglePostQuery.data?.title)

  useEffect(() => {
    if (getSinglePostQuery.data) {
      const { id, slug } = getSinglePostQuery.data
      navigate(`/posts/${id}/${slug}`, { replace: true })
    }
  }, [getSinglePostQuery.data, navigate])

  const showReplyForm = () => setReplying(true)
  const hideReplyForm = () => setReplying(false)

  if (getSinglePostQuery.isError) {
    const { error } = getSinglePostQuery
    showErrorToast(error, 'Error al cargar la publicación')

    if (error.response.status === 404) {
      return <Navigate to="/not-found" />
    }
  }
  const newComment = { postId, parentId: postId }

  return (
    <div className="flex">
      <Card className="max-w-[48rem] flex-1 px-6 pb-6 mb-4 mr-4">
        {getSinglePostQuery.isLoading
          ? (<PostSkeleton />)
          : (getSinglePostQuery.data && (
              <div className='mb-4'>
                <Post
                  post={getSinglePostQuery.data}
                  onShowReplies={showReplyForm}
                  diableReplyButton={replying}
                />
              </div>
            )
            )}
        {replying && (
          <div className="pl-0">
            <SaveCommentForm
              comment={newComment}
              onClose={hideReplyForm}
              className="mb-0"
            />
          </div>
        )}
        <hr className="bg-blue-gray-500" />
        <CommentList postId={postId} className="mt-6" />
      </Card>
      <Rules className="self-start dashboard-layout__aside-right" />
    </div>
  )
}

export default PostDetails
