import { Avatar, Card, CardBody, CardHeader, Typography } from '@material-tailwind/react'
import { FormattedDate } from '../../shared/components/FormattedDate'
import { CreateCommentForm } from './SaveCommentForm'
import { useSaveComment } from './useSaveComment'
import { useState } from 'react'
import { useDeleteComment } from './useDeleteComment'
import { useVoteComment } from './useVoteComment'
import { useAuthStore } from '../../stores/authStore'
import { CustomCardFooter } from '../../shared/components/Cards/CustomCardFooter'

const NonDeletedComment = ({ toggleOpenReplies, comment }) => {
  const currUserId = useAuthStore((state) => state.id)
  const owner = comment.authorId === currUserId
  const [replying, setReplying] = useState(false)
  const [editing, setEditing] = useState(false)
  const showEditingForm = () => setEditing(true)
  const voteComment = useVoteComment()
  const hideEditingForm = () => setEditing(false)
  const openReplyForm = () => setReplying(true)
  const closeReplyForm = () => setReplying(false)
  const saveComment = useSaveComment()
  const { deleteComment } = useDeleteComment()

  const submitReply = (reply) => {
    saveComment.mutate({
      postId: comment.postId,
      parentId: reply.parentId || comment.id,
      body: reply.body,
      commentId: reply.id
    })
    hideEditingForm()
  }

  const handleDelete = () => {
    deleteComment({
      postId: comment.postId,
      commentId: comment.id
    })
  }

  const downVote = () => {
    voteComment.mutate({
      postId: comment.postId,
      commentId: comment.id,
      voteDirection: -1
    })
  }

  const upVote = () => {
    voteComment.mutate({
      postId: comment.postId,
      commentId: comment.id,
      voteDirection: 1
    })
  }
  return (
    <>
      <Card
          color="transparent"
          shadow={false}
          onClick={toggleOpenReplies}
          className={`w-full mt-3 p-3 pb-2 bg-white ${comment.commentCount > 0 ? 'cursor-pointer' : ''}`}
        >
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="m-0 flex items-center gap-2"
            >
              {
              comment.avatarUrl
                ? <Avatar
                    size="sm"
                    variant="circular"
                    src={comment.avatarUrl}
                    alt={comment.authorUsername}
                    />
                : <span className='rounded-full bg-blue-gray-300 h-8 w-9'></span>
              }
            <div className="flex w-full flex-row gap-1.5 items-center">
              <Typography variant='small' className='font-bold' color="blue-gray">
                {comment.authorUsername}
              </Typography>
              <Typography variant='small' color="blue-gray" className='font-normal'>
                <span className='font-extrabold'> &middot; </span>
                <FormattedDate date={comment.createdAt} />
              </Typography>
              {comment.updatedAt && <Typography variant='small' color="blue-gray" className='font-normal'>
                <span> &middot; (Editado) </span>
                <FormattedDate date={comment.updatedAt} />
              </Typography>}
            </div>
          </CardHeader>
          <CardBody className="mb-0 p-0 pr-2 ml-11">
            {
              editing
                ? <CreateCommentForm
                    submitReply={submitReply}
                    close={hideEditingForm}
                    comment={comment}
                  />
                : (<Typography variant='small' className='font-normal'>
                    {comment.body}
                  </Typography>)
            }
          </CardBody>
            {!editing && (
              <CustomCardFooter
                voteDirection={comment.voteDirection}
                voteCount={comment.voteCount}
                commentCount={comment.commentCount}
                owner={owner}
                openReplyForm={openReplyForm}
                showEditingForm={showEditingForm}
                handleDelete={handleDelete}
                className="pl-11"
                downVote={downVote}
                upVote={upVote}
              />)}
        </Card>
        {
          replying &&
          <CreateCommentForm
            submitReply={submitReply}
            close={closeReplyForm}
            className="pt-1"
          />
        }
      </>
  )
}

export { NonDeletedComment }
