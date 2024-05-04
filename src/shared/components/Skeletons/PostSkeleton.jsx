import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { Button, Card, CardBody, CardHeader, Typography } from '@material-tailwind/react'
import { CardFooterSkeleton } from './CardFooterSkeleton'

const PostSkeleton = () => {
  return (
    <article>
      <Card
        color="transparent"
        shadow={false}
        className="w-full pt-2"
      >
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="mx-0 flex justify-between pt-0 pb-2"
        >
          <div className='flex items-center gap-2'>
            <div>
            <Button variant='text' className='rounded-full p-0 w-10 h-10 flex items-center justify-center' onClick={() => {}}>
              <ArrowLeftIcon className='h-4 w-4' />
            </Button>
            </div>
            <div className='w-[4.3rem] h-[3rem] animate-pulse rounded-full bg-gray-300'></div>
            <div className="flex w-full flex-col">
              <Typography as="div" variant="small" className="h-4 w-40 rounded-full bg-gray-300 animate-pulse">
                &nbsp;
              </Typography>
              <div className="flex items-center gap-1.5">
                <Typography as="div" variant="small" className="h-4 w-24 rounded-full bg-gray-300 animate-pulse">
                  &nbsp;
                </Typography>
                <span className="text-gray-300 animate-pulse">&middot;</span>
                <Typography as="div" variant="small" className="h-4 w-20 rounded-full bg-gray-300 animate-pulse">
                  &nbsp;
                </Typography>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardBody className="mb-2 mt-4 p-0 flex flex-col gap-2">
          <Typography as="div" variant="h2" className="mt-1 mb-3 h-7 min-w-56 w-1/2 rounded-md bg-gray-300 animate-pulse">
            &nbsp;
          </Typography>
          <Typography as="div" variant="paragraph" className="h-4 my-1 w-full rounded-md bg-gray-300 animate-pulse">
            &nbsp;
          </Typography>
          <Typography as="div" variant="paragraph" className="h-4 -mt-1 mb-1 w-full rounded-md bg-gray-300 animate-pulse">&nbsp;</Typography>
          <Typography as="div" variant="paragraph" className="h-4 -mt-1 mb-1 w-full rounded-md bg-gray-300 animate-pulse">&nbsp;</Typography>
          <Typography as="div" variant="paragraph" className="h-4 -mt-1 mb-1 w-3/4 rounded-md bg-gray-300 animate-pulse">&nbsp;</Typography>
        </CardBody>
        <CardFooterSkeleton resourceType="post" />
      </Card>
    </article>
  )
}

export default PostSkeleton
