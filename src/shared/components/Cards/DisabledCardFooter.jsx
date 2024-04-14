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

const DisabledCardFooter = ({ commentCount, className, openReplyForm }) => {
  return (
    <div className={`mt-1 flex items-center ${className}`}>
      <div className="flex items-center gap-1">
        <Button variant="text" disabled className="rounded-full p-1.5">
          <ArrowUpIcon className='h-4 w-4' />
        </Button>
        <Button variant="text" disabled className="rounded-full p-1.5">
          <ArrowDownIcon className="h-4 w-4" />
        </Button>
      </div>
      <Button variant="text" disabled className="rounded-full py-1.5 px-2.5">
        <div className="flex items-center gap-1">
          <ChatBubbleOvalLeftIcon className="h-4 w-4" />
          <Typography
            color="gray"
            className="text-xs font-normal text-blue-gray-500"
          >
            {commentCount}
          </Typography>
        </div>
      </Button>
      <Button variant="text" disabled className="rounded-full py-1.5 px-2.5">
        <ShareIcon className="h-4 w-4" />
      </Button>
    </div>
  )
}

export { DisabledCardFooter }
