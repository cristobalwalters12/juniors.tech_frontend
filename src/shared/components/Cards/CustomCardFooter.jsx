import { Typography, Button } from '@material-tailwind/react'
import { ChatBubbleOvalLeftIcon, ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/outline'
import ContextMenu from './ContextMenu'
import ShareResourceTooltip from './ShareResourceTooltip'
import RequireAuthOnClick from '../Auth/RequireAuthOnClick'

const CustomCardFooter = ({
  comment,
  post,
  onEdit,
  onReply,
  onVote,
  onReport,
  onDelete,
  disableReply,
  className
}) => {
  const resourceType = post ? 'post' : 'comment'
  const resource = resourceType === 'post' ? post : comment
  const isDeleted = resourceType === 'comment' && resource.deletedAt !== null
  const link = resourceType === 'post' ? `/posts/${resource.id}` : `/posts/${resource.postId}#${resource.id}`

  const handleVote = (voteDirection) => () => onVote(voteDirection)
  const handleReply = () => onReply()

  return (
    <div className={`mt-1 flex items-center ${className}`}>
      <div className="flex items-center gap-1">
      <RequireAuthOnClick onClickAuthenticated={handleVote(1)} stopPropagation={true}>
        <Button variant="text" disabled={isDeleted} className="rounded-full p-1.5">
          <ArrowUpIcon className={`h-4 w-4 ${resource.voteDirection === 1 ? 'text-blue-600' : ''}`} />
        </Button>
      </RequireAuthOnClick>
        {!isDeleted &&
          <Typography
            color="gray"
            className="text-xs font-normal text-blue-gray-500"
          >
            {resource.voteCount}
          </Typography>}
        <RequireAuthOnClick onClickAuthenticated={handleVote(-1)} stopPropagation={true}>
        <Button variant="text" disabled={isDeleted} className="rounded-full p-1.5">
          <ArrowDownIcon className={`h-4 w-4 ${resource.voteDirection === -1 ? 'text-blue-600' : ''}`} />
        </Button>
      </RequireAuthOnClick>
      </div>

      <RequireAuthOnClick onClickAuthenticated={handleReply} stopPropagation={true}>
        <Button
          variant="text"
          disabled={isDeleted || disableReply}
          className="rounded-full py-1.5 px-2.5"
        >
          <div className="flex items-center gap-1">
            <ChatBubbleOvalLeftIcon className="h-4 w-4" />
            <Typography
              color="gray"
              className="text-xs font-normal text-blue-gray-900"
            >
              {resource.commentCount}
            </Typography>
          </div>
        </Button>
        </RequireAuthOnClick>
        {resourceType === 'post' && <ShareResourceTooltip link={link} />}
        {resourceType === 'comment' &&
          resource.deletedAt === null &&
          <ContextMenu
            ownerId={resource.authorId}
            onEdit={onEdit}
            onReport={onReport}
            onDelete={onDelete}
          />
        }
    </div>
  )
}

export { CustomCardFooter }
