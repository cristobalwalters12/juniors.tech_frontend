import { useGetPosts } from './useGetPosts'

const PostList = () => {
  const { isLoading, posts = [], isError, error } = useGetPosts()
  if (isLoading) return (<h1>Cargando...</h1>)

  if (isError) {
    console.log({ error: error.message })
    return (<h1>{error.message}</h1>)
  }

  return (
    <div>
      {posts.map(post => (
        <div key={post.id} >
          <h2 className='font-extrabold'>{post.title}</h2>
          <h3>{post.category}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default PostList
