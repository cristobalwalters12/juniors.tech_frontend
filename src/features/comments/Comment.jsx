import {
  Card,
  CardBody,
  CardHeader,
  Collapse,
  // Collapse,
  Typography
} from '@material-tailwind/react'
import { useState } from 'react'
import UserAvatar from '../../shared/components/UserAvatar'
import { Link } from 'react-router-dom'
import { FormattedDate } from '../../shared/components/FormattedDate'
import { SaveCommentForm } from './SaveCommentForm'
import { CustomCardFooter } from '../../shared/components/Cards/CustomCardFooter'
import { useDeleteComment } from './useDeleteComment'
import { showErrorToast } from '../../shared/utils/showErrorToast'
import { toast } from 'react-toastify'
import { useVoteComment } from './useVoteComment'

const Comment = ({ comment, getRepliesById }) => {
  const [editing, setEditing] = useState(false)
  const deleteCommentMutation = useDeleteComment()
  const voteOnCommentMutation = useVoteComment()
  const [replying, setReplying] = useState(false)
  const [showReplies, setShowReplies] = useState(false)
  const showEditingForm = () => setEditing(true)
  const hideEditingForm = () => setEditing(false)
  const openReplyForm = () => setReplying(true)
  const closeReplyForm = () => setReplying(false)
  const toggleReplies = () => setShowReplies(prevState => !prevState)
  const replies = getRepliesById(comment.id)

  const handleVote = (voteDirection) => {
    voteOnCommentMutation.mutateAsync({
      postId: comment.postId,
      commentId: comment.id,
      voteDirection
    }).catch(err => {
      console.log({ err })
      showErrorToast(err, 'Error al intentar votar')
    })
  }
  const handleReport = () => {}

  const handleDelete = () => {
    deleteCommentMutation
      .mutateAsync({
        postId: comment.postId,
        commentId: comment.id
      }).then(() =>
        toast('Comentario eliminado con éxito')
      )
      .catch(err => showErrorToast(err, 'Error al eliminar comentario'))
  }

  const Avatar = (
    <UserAvatar
    avatarUrl={comment.avatarUrl}
    username={comment.authorUsername || 'Usuario eliminado'}
    className="w-10" />
  )

  return (
    <>
      <Card
        color="transparent"
        shadow={false}
        onClick={toggleReplies}
        className={`w-full mt-3 p-3 pb-2 bg-blue-gray-50 ${comment.commentCount > 0 ? 'cursor-pointer' : ''}`}
      >
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="m-0 flex items-center gap-2"
          >
          {comment.deletedAt
            ? Avatar
            : <Link to={`/users/${comment.authorUsername}`}>{Avatar}</Link>
          }
          <div className="flex w-full flex-row gap-1.5 items-center">
            <Typography variant='small' className='font-bold' color="blue-gray">
              {comment.deletedAt ? '[eliminado]' : comment.authorUsername}
            </Typography>
            <Typography variant='small' color="blue-gray" className='font-normal'>
              <span className='font-extrabold'> &middot; </span>
              <FormattedDate date={comment.createdAt} />
            </Typography>
            {!comment.deletedAt && comment.updatedAt && (
              <Typography variant='small' color="blue-gray" className='font-normal'>
                <span> &middot; (Editado) </span>
                <FormattedDate date={comment.updatedAt} />
              </Typography>
            )}
          </div>
        </CardHeader>
        <CardBody className="mb-0 p-0 pr-2 ml-11">
        {
          editing
            ? <SaveCommentForm
                onClose={hideEditingForm}
                comment={comment}
              />
            : (<>
                <Typography variant='small' className={`font-normal ${comment.deletedAt ? 'text-gray-600' : ''}`}>
                  {comment.body}
                </Typography>
                <CustomCardFooter
                  comment={comment}
                  onEdit={showEditingForm}
                  onReply={openReplyForm}
                  disableReply={replying}
                  onVote={handleVote}
                  onReport={handleReport}
                  onDelete={handleDelete}
                />
              </>)
        }
        </CardBody>
      </Card>
      {
          replying &&
          <SaveCommentForm
            comment={{
              postId: comment.postId,
              parentId: comment.id
            }}
            onClose={closeReplyForm}
            className="pt-1"
          />
        }
      {
        replies.length > 0 &&
        <Collapse open={showReplies} className='pl-5'>
          {replies.map((reply) =>
            <Comment key={reply.id} comment={reply} getRepliesById={getRepliesById}/>
          )}
        </Collapse>
      }
    </>
  )
}

export { Comment }
