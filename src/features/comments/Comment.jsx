import {
  Card,
  CardBody,
  CardHeader,
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

const Comment = ({ comment, getRepliesById }) => {
  const [editing, setEditing] = useState(false)
  const deleteCommentMutation = useDeleteComment()
  // const [replying, setReplying] = useState(false)
  // const [showReplies, setShowReplies] = useState(false)
  const showEditingForm = () => setEditing(true)
  const hideEditingForm = () => setEditing(false)
  // const openReplyForm = () => setReplying(true)
  // const closeReplyForm = () => setReplying(false)
  // const toggleReplies = () => setShowReplies(prevState => !prevState)
  const toggleReplies = () => {}

  const handleVote = () => {}
  const handleShare = () => {}
  const handleReport = () => {}
  const handleDelete = () => {
    deleteCommentMutation
      .mutateAsync({
        postId: comment.postId,
        commentId: comment.id
      }).then(
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
        // onClick={toggleOpenReplies}
        className={`w-full mt-3 p-3 pb-2 bg-white ${comment.commentCount > 0 ? 'cursor-pointer' : ''}`}
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
                  onShowReplies={toggleReplies}
                  onVote={handleVote}
                  onShare={handleShare}
                  onReport={handleReport}
                  onDelete={handleDelete}
                />
              </>)
        }
        </CardBody>
      </Card>
      {/* {
        replies.length > 0 &&
        <Collapse open={openReplies} className='pl-5'>
          {replies.map((reply) =>
            <Comment key={reply.id} comment={reply} getRepliesById={getRepliesById}/>
          )}
        </Collapse>
      } */}
    </>
  )
}

export { Comment }
