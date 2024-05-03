import { Link } from 'react-router-dom'
import { useDocumentTitle } from '../shared/hooks/useDocumentTitle'
import { useGetPosts } from '../features/posts/useGetPosts'
import PostSummary from '../features/posts/PostSummary'
import { useCallback, useRef } from 'react'
import { Button, Spinner } from '@material-tailwind/react'
import { showErrorToast } from '../shared/utils/showErrorToast'

const Home = () => {
  useDocumentTitle('Página de inicio')
  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    isLoading,
    isError,
    data,
    refetch,
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

  if (isLoading) {
    return (
    <div className='flex justify-center'>
      <Spinner className="h-16 w-16 text-gray-900/50" />
    </div>
    )
  }

  if (isError) {
    showErrorToast(error, error.message)
    return (
      <div className='w-full text-lg'>
        <div className='mx-auto w-fit'>
          <p>Ha ocurrido un error al cargar las publicaciones</p>
          <div className='mt-4'>
            <Button onClick={refetch} size='sm' loading={isFetching} className='normal-case text-sm'>Volver a cargar</Button>
          </div>
        </div>
      </div>
    )
  }

  const posts = data?.pages.flatMap(page => page.posts) || []

  return (
    <div className={`flex flex-col gap-3 mb-4 mr-4 ${posts.length > 0 ? 'max-w-[48rem]' : ''}`}>
      {posts.length > 0
        ? posts.map((post, index, { length }) => {
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
        })
        : (<div className='text-center w-full text-lg'>
            <p>Aún no hay publicaciones en esta categoría.</p>
            <Link to="/posts/new" className='text-primary-dark font-semibold'>Anímate a crear la primera</Link>
          </div>)
    }
      {isFetchingNextPage && (
        <div className='flex justify-center'>
          <Spinner className="h-16 w-16 text-gray-900/50" />
        </div>
      )}
    </div>
  )
}

export default Home
