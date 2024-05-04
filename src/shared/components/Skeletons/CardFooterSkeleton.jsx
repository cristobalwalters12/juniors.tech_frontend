import { Typography, Button } from '@material-tailwind/react'
import { ChatBubbleOvalLeftIcon, ArrowDownIcon, ArrowUpIcon, LinkIcon, EllipsisVerticalIcon } from '@heroicons/react/24/outline'

const CardFooterSkeleton = ({ resourceType }) => {
  return (
    <div className={'mt-1 flex items-center'}>
      <div className="flex items-center gap-1">
        <Button variant="text" disabled={true} className="rounded-full p-1.5">
          <ArrowUpIcon className="h-4 w-4" />
        </Button>
          <Typography as="div" variant="paragraph" className="h-4 w-4 rounded-md bg-gray-300 animate-pulse">
            &nbsp;
          </Typography>
        <Button variant="text" disabled={true} className="rounded-full p-1.5">
          <ArrowDownIcon className="h-4 w-4" />
        </Button>
      </div>
        <Button
          variant="text"
          disabled={true}
          className="rounded-full py-1.5 px-2.5"
        >
          <div className="flex items-center gap-1">
            <ChatBubbleOvalLeftIcon className="h-4 w-4" />
            <Typography as="div" variant="paragraph" className="h-4 w-4 rounded-md bg-gray-300 animate-pulse">
              &nbsp;
            </Typography>
          </div>
        </Button>
        {resourceType === 'post' && <LinkIcon className="h-4 w-4" />}
        {resourceType === 'comment' && <EllipsisVerticalIcon className="h-4 w-4" />
        }
    </div>
  )
}

export { CardFooterSkeleton }
