import { Navigate } from 'react-router-dom'
import PostList from '../features/posts/PostList'
import { useGetPosts } from '../features/posts/useGetPosts'

const Home = () => {
  const getPostsQuery = useGetPosts()

  if (getPostsQuery.isLoading) {
    return <h2>Cargando...</h2>
  }

  if (getPostsQuery.isError) {
    return <Navigate to="not-found"/>
  }

  return (
    <div className="min-h-screen">
      <PostList {...getPostsQuery.data} />
    </div>
  )
}

export default Home
