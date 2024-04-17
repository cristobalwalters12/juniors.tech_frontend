import {
  Typography,
  Button
} from '@material-tailwind/react'
import {
  ChatBubbleOvalLeftIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  ShareIcon
} from '@heroicons/react/24/outline'
import ContextMenu from './ContextMenu'

const CustomCardFooter = ({
  comment,
  post,
  onEdit,
  onShowReplies,
  onVote,
  onShare,
  onReport,
  onDelete,
  className
}) => {
  const resourceType = post ? 'post' : 'comment'
  const resource = resourceType === 'post' ? post : comment
  const isDeleted = resourceType === 'comment' && resource.deletedAt !== null
  const handleVote = (voteDirection) => () => onVote(voteDirection)
  return (
    <div className={`mt-1 flex items-center ${className}`}>
      <div className="flex items-center gap-1">
        <Button variant="text" disabled={isDeleted} onClick={handleVote(-1)} className="rounded-full p-1.5">
          <ArrowUpIcon className={`h-4 w-4 ${resource.voteDirection === 1 ? 'text-blue-600' : ''}`} />
        </Button>
        {!isDeleted &&
          <Typography
            color="gray"
            className="text-xs font-normal text-blue-gray-500"
          >
            {resource.voteCount}
          </Typography>}
        <Button variant="text" disabled={isDeleted} onClick={handleVote(-1)} className="rounded-full p-1.5">
          <ArrowDownIcon className={`h-4 w-4 ${resource.voteDirection === -1 ? 'text-blue-600' : ''}`} />
        </Button>
      </div>
        <Button variant="text" disabled={isDeleted} className="rounded-full py-1.5 px-2.5" onClick={onShowReplies}>
          <div className="flex items-center gap-1">
            <ChatBubbleOvalLeftIcon className="h-4 w-4" />
            <Typography
              color="gray"
              className="text-xs font-normal text-blue-gray-500"
            >
              {resource.commentCount}
            </Typography>
          </div>
        </Button>
        {!isDeleted &&
          <Button variant="text" className="rounded-full py-1.5 px-2.5" onClick={onShare}>
            <div className="flex items-center gap-1">
              <ShareIcon className="h-4 w-4" />
              <Typography
                color="gray"
                className="text-xs font-normal text-blue-gray-500 capitalize"
              >
                Share
              </Typography>
            </div>
          </Button>
        }
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
