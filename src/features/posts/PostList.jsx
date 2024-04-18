import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, IconButton } from '@material-tailwind/react'
import PostSummary from './PostSummary'
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

const PostList = ({ posts, totalMatches: totalPosts, totalPages, limit: postsPerPage, currPage }) => {
  const [active, setActive] = useState(1)
  const [currentPage, setCurrentPage] = useState(currPage)

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
    <div className='flex flex-col gap-3 max-w-[48rem]'>
      {posts?.map((post) => (
        <Link key={post.id} to={`/posts/${post.id}/${post.slug}`}>
          <PostSummary post={post} />
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
