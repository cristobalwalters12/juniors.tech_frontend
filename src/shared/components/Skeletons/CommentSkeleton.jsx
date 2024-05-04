import {
  Card,
  CardBody,
  CardHeader,
  Typography
} from '@material-tailwind/react'
import { CardFooterSkeleton } from './CardFooterSkeleton'

const CommentSkeleton = ({ className }) => {
  return (
      <Card
        color="transparent"
        shadow={false}
        className={`w-full p-3 pb-2 bg-grey-lighter ${className || ''}`}
      >
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="m-0 flex items-center gap-2"
          >
          <div className='w-[2.705rem] h-[2.5rem] animate-pulse rounded-full bg-gray-300'></div>
          <div className="flex w-full flex-row gap-1.5 items-center">
            <Typography as="div" variant="small" className="h-4 w-24 rounded-md bg-gray-300 animate-pulse">
              &nbsp;
            </Typography>
            <span className="text-gray-300 animate-pulse">&middot;</span>
            <Typography as="div" variant="small" className="h-4 w-20 rounded-full bg-gray-300 animate-pulse">
              &nbsp;
            </Typography>
          </div>
        </CardHeader>
        <CardBody className="mb-0 p-0 pr-2">
          <div className='ml-11'>
            <Typography as="div" variant="paragraph" className="h-4 -mt-1 mb-1 w-3/4 rounded-md bg-gray-300 animate-pulse">&nbsp;</Typography>
            <CardFooterSkeleton resourceType="comment" />
          </div>
        </CardBody>
      </Card>
  )
}

export { CommentSkeleton }
