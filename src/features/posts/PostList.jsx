import { useState, useEffect } from 'react'
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
import { Card, CardBody, Typography, List, Button, IconButton } from '@material-tailwind/react'
import { CardFooter } from '../../shared/components/CardFooter'
import { useAuthStore } from '../../stores/authStore'
import { FormattedDate } from '../../shared/components/FormattedDate'
import { useGetPosts } from '../../features/posts/useGetPosts'

import { Link } from 'react-router-dom'

const PostList = ({ orderBy, orderDirection }) => {
  const [posts, setPosts] = useState([])
  const [active, setActive] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const currUserId = useAuthStore((state) => state.id)
  const postsPerPage = 4
  const { data: postsData, isLoading, isError } = useGetPosts()

  useEffect(() => {
    if (postsData) {
      setPosts(postsData.data.posts)
    }
  }, [postsData])

  if (isLoading) {
    return <div>Cargando...</div>
  }

  if (isError) {
    return <div>Error al obtener los posts</div>
  }

  const totalPosts = posts ? posts.length : 0
  const totalPages = Math.ceil(totalPosts / postsPerPage)

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
  const indexOfFirstPost = indexOfLastPost - postsPerPage

  const sortedPosts = [...posts].sort((a, b) => {
    if (orderDirection === 'asc') {
      return a[orderBy] - b[orderBy]
    } else {
      return b[orderBy] - a[orderBy]
    }
  })

  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost)
  console.log('postList', currentPosts)
  return (
    <div className="main-content">
      {currentPosts.map((post) => (
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
                  <Typography>{post.body || ''}</Typography>
                </CardBody>
                <CardFooter
                    voteDirection={post.voteDirection}
                    voteCount={post.voteCount}
                    commentCount={post.commentCount}
                    owner={post.author_id === currUserId}
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
