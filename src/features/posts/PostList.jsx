import { useState } from 'react'
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
import { Card, CardBody, Typography, List, Button, IconButton } from '@material-tailwind/react'
import { useAuthStore } from '../../stores/authStore'
import { FormattedDate } from '../../shared/components/FormattedDate'

import { Link } from 'react-router-dom'
import { CustomCardFooter } from '../../shared/components/Cards/CustomCardFooter'

const PostList = ({ posts, totalMatches: totalPosts, totalPages, limit: postsPerPage, currPage }) => {
  const [active, setActive] = useState(1)
  const [currentPage, setCurrentPage] = useState(currPage)
  const currUserId = useAuthStore((state) => state.id)

  const getItemProps = (index) => ({
    variant: active === index ? 'filled' : 'text',
    color: 'gray',
    onClick: () => {
      setActive(index)
      setCurrentPage(index)
    },
    className: 'rounded-full'
  })

  const next = () => {
    if (currentPage === totalPages) return
    setActive(active + 1)
    setCurrentPage(currentPage + 1)
  }

  const prev = () => {
    if (currentPage === 1) return
    setActive(active - 1)
    setCurrentPage(currentPage - 1)
  }

  const indexOfLastPost = currentPage * postsPerPage
  /* eslint-disable no-unused-vars */
  const indexOfFirstPost = indexOfLastPost - postsPerPage

  return (
    <div>
      {posts?.map((post) => (
        <Link key={post.id} to={`/posts/${post.id}`}>
          <Card className='max-w-[48rem] my-3'>
            <List className='flex-row mx-4'>
              <Typography variant='small' color='blue-gray' className='font-normal mx-1'>
                {post.category}
              </Typography>
              <Typography variant='small' color='gray' className='font-normal'>
                <FormattedDate date={post.createdAt}/>
              </Typography>
            </List>
            <CardBody>
              <Typography variant='h5' color='blue-gray' className='mb-3'>
                {post.title}
              </Typography>
              <Typography>{post.body}</Typography>
            </CardBody>
            <CustomCardFooter
                voteDirection={post.voteDirection}
                voteCount={post.voteCount}
                commentCount={post.commentCount}
                owner={post.authorId === currUserId}
              />
          </Card>
        </Link>
      ))}
      <div className='flex items-center gap-4'>
        <Button
          variant='text'
          className='flex items-center gap-2 rounded-full'
          onClick={prev}
          disabled={currentPage === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className='h-4 w-4' /> Anterior
        </Button>
        <div className='flex items-center gap-2'>
          {Array.from({ length: totalPages }, (_, index) => (
            <IconButton key={index + 1} {...getItemProps(index + 1)}>
              {index + 1}
            </IconButton>
          ))}
        </div>
        <Button
          variant='text'
          className='flex items-center gap-2 rounded-full'
          onClick={next}
          disabled={currentPage === totalPages}
        >
          Siguiente <ArrowRightIcon strokeWidth={2} className='h-4 w-4' />
        </Button>
      </div>
    </div>
  )
}

export default PostList
