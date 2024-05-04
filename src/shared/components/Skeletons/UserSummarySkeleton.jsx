import { Card, Chip, Typography } from '@material-tailwind/react'

const UserSummarySkeleton = () => {
  return (
    <Card className='flex gap-2 w-full p-4 pt-5'>
      <div className='flex gap-4'>
        <div className='self-center min-w-14 min-h-14 w-full h-full max-w-24 max-h-24'>
          <div className='w-full h-full animate-pulse rounded-full bg-gray-300'></div>
        </div>
        <div className='flex-1 text-grey-dark'>
          <div className='flex items-center gap-2'>
            <Typography as="div" variant="h2" className="h-5 w-24 rounded-md bg-gray-300 animate-pulse">
              &nbsp;
            </Typography>
            <span className="text-gray-300 animate-pulse">&middot;</span>
            <Typography as="div" variant="h2" className="h-5 w-20 rounded-md bg-gray-300 animate-pulse">
              &nbsp;
            </Typography>
          </div>
          <div className='flex flex-col gap-2 mt-2 text-md w-full'>
            <div className='flex items-center gap-2'>
              <Typography as="div" variant="paragraph" className="h-4 w-8 rounded-md bg-gray-300 animate-pulse">
                &nbsp;
              </Typography>
              <span className="text-gray-300 animate-pulse">&middot;</span>
              <Typography as="div" variant="h2" className="h-4 w-20 rounded-md bg-gray-300 animate-pulse">
                &nbsp;
              </Typography>
            </div>
            <Typography as="div" variant="paragraph" className="h-4 w-40 rounded-md bg-gray-300 animate-pulse">
              &nbsp;
            </Typography>
            <Typography as="div" variant="paragraph" className="h-4 w-full rounded-md bg-gray-300 animate-pulse">
              &nbsp;
            </Typography>
          </div>
        </div>
      </div>
      <div className='flex flex-wrap gap-2 mt-2'>
        {Array(3).fill(null).map((_, index) => (
          <Chip
            key={index}
            variant="ghost"
            value=""
            size="sm"
            className="rounded-full h-7 w-16 text-gray-300 animate-pulse"
            />
        ))}
      </div>
    </Card>
  )
}

export default UserSummarySkeleton
