import { Button, Card, CardBody, CardFooter, List, Typography } from '@material-tailwind/react'
import { ArrowDownIcon, ArrowUpIcon, ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline'

const PostSummarySkeleton = () => {
  return (
    <Card className=" w-full pt-3">
      <List className="flex flex-row items-center gap-1 mx-4">
        <Typography as="div" variant="small" className="h-3 w-36 rounded-full bg-gray-300 animate-pulse">
          &nbsp;
        </Typography>
        <span className="font-semibold text-gray-300 animate-pulse">&middot;</span>
        <Typography as="div" variant="small" className="h-3 w-20 rounded-full bg-gray-300 animate-pulse">
          &nbsp;
        </Typography>
      </List>
      <CardBody className="pb-0 pt-2">
        <Typography as="div" variant="h2" className="mb-5 h-6 min-w-56 w-1/2 rounded-md bg-gray-300 animate-pulse">
          &nbsp;
        </Typography>
        <Typography as="div" variant="paragraph" className="h-4 my-1 w-full rounded-md bg-gray-300 animate-pulse">
          &nbsp;
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center pt-4 pb-5">
        <div className="flex items-center gap-1">
          <Button variant="text" disabled className="rounded-full p-1.5">
            <ArrowUpIcon className="h-4 w-4"/>
          </Button>
          <Typography as="div" variant="paragraph" className="h-4 w-4 rounded-md bg-gray-300 animate-pulse">
            &nbsp;
          </Typography>
          <Button variant="text" disabled className="rounded-full p-1.5">
            <ArrowDownIcon className="h-4 w-4"/>
          </Button>
        </div>
        <Button variant="text" disabled className="rounded-full py-1.5 px-2.5">
          <div className="flex items-center gap-1">
            <ChatBubbleOvalLeftIcon className="h-4 w-4" />
            <Typography as="div" variant="paragraph" className="h-4 w-4 rounded-md bg-gray-300 animate-pulse">
            &nbsp;
          </Typography>
          </div>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default PostSummarySkeleton
