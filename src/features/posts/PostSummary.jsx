import { Button, Card, CardBody, CardFooter, List, Typography } from '@material-tailwind/react'
import { FormattedDate } from '../../shared/components/FormattedDate'
import { ArrowDownIcon, ArrowUpIcon, ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline'
// import { ShareIcon } from '@heroicons/react/24/solid'
// import { useNavigate } from 'react-router-dom'

const PostSummary = ({ post }) => {
  // const navigate = useNavigate()
  // const handleVote = () => {}
  // const handleRedirect = () => navigate(`/posts/${post.id}/${post.slug}`)
  // const handleShare = () => {}
  return (
          <Card className=' w-full pt-3'>
            <List className='flex-row gap-1 mx-4'>
              <Typography variant='small' color='blue-gray' className='font-bold'>
                {post.category}
              </Typography>
              <span className='font-semibold'>&middot;</span>
              <Typography variant='small' color='gray' className='font-normal'>
                <FormattedDate date={post.createdAt}/>
              </Typography>
            </List>
            <CardBody className='pb-0 pt-2'>
              <Typography variant='h5' color='blue-gray' className='mb-3'>
                {post.title}
              </Typography>
              <Typography className='truncate'>{post.body}</Typography>
            </CardBody>
            <CardFooter className='flex items-center pt-4 pb-5'>
            <div className="flex items-center gap-1">
              <Button variant="text" disabled className="rounded-full p-1.5">
                <ArrowUpIcon className={`h-4 w-4 ${post.voteDirection === 1 ? 'text-blue-600' : ''}`} />
              </Button>
              <Typography
                color="gray"
                className="text-xs font-normal text-blue-gray-500"
              >
                {post.voteCount}
              </Typography>
              <Button variant="text" disabled className="rounded-full p-1.5">
                <ArrowDownIcon className={`h-4 w-4 ${post.voteDirection === -1 ? 'text-blue-600' : ''}`} />
              </Button>
            </div>
              <Button variant="text" disabled className="rounded-full py-1.5 px-2.5" >
                <div className="flex items-center gap-1">
                  <ChatBubbleOvalLeftIcon className="h-4 w-4" />
                  <Typography
                    color="gray"
                  className="text-xs font-normal text-blue-gray-500"
                  >
                    {post.commentCount}
                  </Typography>
                </div>
              </Button>
              {/* <Button variant="text" className="rounded-full py-1.5 px-2.5" onClick={handleShare}>
                <div className="flex items-center gap-1">
                  <ShareIcon className="h-4 w-4" />
                  <Typography
                    color="gray"
                    className="text-xs font-normal text-blue-gray-500 capitalize"
                  >
                    Share
                  </Typography>
                </div>
              </Button> */}
            </CardFooter>
        </Card>
  )
}

export default PostSummary
