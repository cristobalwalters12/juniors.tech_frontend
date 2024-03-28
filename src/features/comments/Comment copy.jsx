import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Collapse
} from '@material-tailwind/react'
import { FormattedDate } from '../../shared/components/FormattedDate'
import { CardFooter } from '../../shared/components/CardFooter'
import { useState } from 'react'
import { CreateCommentForm } from './SaveCommentForm'
import { useSaveComment } from './useSaveComment'

const currUserId = 1

const Comment = ({ comment, getRepliesById }) => {
  const replies = getRepliesById(comment.id)
  const [openReplies, setOpenReplies] = useState(false)
  const [replying, setReplying] = useState(false)
  const [editing, setEditing] = useState(false)
  const showEditingForm = () => setEditing(true)
  const hideEditingForm = () => setEditing(false)
  const toggleOpenReplies = () => setOpenReplies((cur) => !cur)
  const openReplyForm = () => setReplying(true)
  const closeReplyForm = () => setReplying(false)
  const { saveComment } = useSaveComment()
  const submitReply = (reply) => {
    reply.parent_id = reply.parent_id || comment.id
    saveComment({
      postId: comment.post_id,
      comment: reply
    })
    hideEditingForm()
  }
  const owner = comment.author_id === currUserId

  return (
    <>
      <Card
        color="transparent"
        shadow={false}
        onClick={toggleOpenReplies}
        className="w-full mt-3 p-3 pb-2 bg-white"
      >
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="m-0 flex items-center gap-2"
          >
          <Avatar
            size="sm"
            variant="circular"
            src={comment.avatar}
            alt={comment.username}
            />
          <div className="flex w-full flex-row gap-1.5 items-center">
            <Typography variant='small' className='font-bold' color="blue-gray">
              {comment.username}
            </Typography>
            <Typography variant='small' color="blue-gray" className='font-normal'>
              <span className='font-extrabold'> &middot; </span>
              <FormattedDate date={comment.created_at} />
            </Typography>
            {comment.updated_at && <Typography variant='small' color="blue-gray" className='font-normal'>
              <span> &middot; (Editado) </span>
              <FormattedDate date={comment.updated_at} />
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
            <CardFooter
              voteDirection={comment.vote_direction}
              voteCount={comment.vote_count}
              commentCount={comment.comment_count}
              owner={owner}
              openReplyForm={openReplyForm}
              showEditingForm={showEditingForm}
              className="pl-11"
            />)}
      </Card>
      {
        replying &&
        <CreateCommentForm submitReply={submitReply} close={closeReplyForm} />
      }
      {
        replies.length > 0 &&
        <Collapse open={openReplies} className='pl-5'>
          {replies.map((reply) =>
            <Comment key={reply.id} comment={reply} getRepliesById={getRepliesById}/>
          )}
        </Collapse>
      }
    </>
  )
}

export { Comment }
