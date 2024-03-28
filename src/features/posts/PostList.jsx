import { useGetPosts } from './useGetPosts'
import { Card, CardBody, Typography, List, CardFooter } from '@material-tailwind/react'
import { CardFooterPost } from '../../shared/components/CardFooterPost'

const PostList = () => {
  const { isLoading, posts, isError, error } = useGetPosts()

  if (isLoading) return (<h1 className='text-blue-gray-50'>Cargando...</h1>)
  if (isError) return (<h1 className='text-blue-gray-50'>{error.message}</h1>)

  return (
    <>
      {posts.map(post => (
        <Card key={post.id} className=" max-w-[48rem] mx-auto my-3">
          <List className='flex-row mx-4'>
            <Typography variant="small" color="blue-gray" className="font-normal mx-1">
              {post.category}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              fecha
            </Typography>
          </List>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className='mb-3'>
              {post.title}
            </Typography>
            <Typography>
              {post.body}
            </Typography>
          </CardBody>
          <CardFooter>
          <CardFooterPost voteDirection={post.vote_direction} voteCount={post.vote_count} commentCount={post.comment_count} owner={true} />
          </CardFooter>
        </Card>
      ))}
    </>
  )
}

export default PostList
