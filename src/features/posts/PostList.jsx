import { useGetPosts } from './useGetPosts'

const PostList = () => {
  const { isLoading, posts, isError, error } = useGetPosts()
  if (isLoading) return (<h1 className='text-blue-gray-50'>Cargando...</h1>)

  if (isError) return (<h1 className='text-blue-gray-50'>{error.message}</h1>)

  return (
    <div className='text-blue-gray-50'>
      {posts.map(post => (
        <div key={post.id} >
          <h2 className='font-extrabold'>{post.title}</h2>
          <h3 className='text-blue-gray-200'>{post.category}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default PostList
