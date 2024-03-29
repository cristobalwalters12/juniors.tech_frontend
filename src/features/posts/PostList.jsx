import { useGetPosts } from './useGetPosts'

const PostList = () => {
  const query = useGetPosts()
  if (query.isLoading) return (<h1>Cargando...</h1>)

  if (query.isError) {
    return (<h1>{query.error.message}</h1>)
  }

  return (
    <div>
      {query.data.map(post => (
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
