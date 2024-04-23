import { Link } from 'react-router-dom'
import { useDocumentTitle } from '../shared/hooks/useDocumentTitle'
import { useGetPosts } from '../features/posts/useGetPosts'
import PostSummary from '../features/posts/PostSummary'
import { useCallback, useRef } from 'react'
import { Spinner } from '@material-tailwind/react'

const Home = () => {
  useDocumentTitle('Home')
  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    data,
    status,
    error
  } = useGetPosts()

  const intObserver = useRef()
  const lastPostRef = useCallback(post => {
    if (isFetchingNextPage) return

    if (intObserver.current) intObserver.current.disconnect()

    intObserver.current = new IntersectionObserver(posts => {
      if (posts[0].isIntersecting && hasNextPage) {
        fetchNextPage()
      }
    })

    if (post) intObserver.current.observe(post)
  }, [isFetchingNextPage, fetchNextPage, hasNextPage])

  if (status === 'loading') {
    return (
    <div className='flex justify-center'>
      <Spinner className="h-16 w-16 text-gray-900/50" />
    </div>
    )
  }

  if (status === 'error') {
    return <div>Error: {error.message}</div>
  }

  const posts = data?.pages.flatMap(page => page.posts) || []

  return (
    <div className='min-h-full flex flex-col gap-3 max-w-[48rem] mb-4 mr-4'>
      {posts.map((post, index, { length }) => {
        if (index === length - 1) {
          return (
          <Link ref={lastPostRef} key={post.id} to={`/posts/${post.id}/${post.slug}`}>
            <PostSummary post={post} />
          </Link>
          )
        }
        return (
          <Link key={post.id} to={`/posts/${post.id}/${post.slug}`}>
            <PostSummary post={post} />
          </Link>
        )
      })}
      {isFetchingNextPage && (
        <div className='flex justify-center'>
          <Spinner className="h-16 w-16 text-gray-900/50" />
        </div>
      )}
    </div>
  )
}

export default Home
