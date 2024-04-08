import {
  Collapse
} from '@material-tailwind/react'
import { useState } from 'react'
import DeletedComment from './DeletedComment'
import { NonDeletedComment } from './NonDeletedComment'

const Comment = ({ comment, getRepliesById }) => {
  const replies = getRepliesById(comment.id)
  const [openReplies, setOpenReplies] = useState(false)
  const toggleOpenReplies = () => setOpenReplies((cur) => !cur)
  return (
    <>
      {
        comment.deleted_at !== null
          ? (
          <DeletedComment
            comment={comment}
            toggleOpenReplies={toggleOpenReplies}
          />
            )
          : <NonDeletedComment
            comment={comment}
            toggleOpenReplies={toggleOpenReplies}
          />
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
