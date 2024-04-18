import { Navigate } from 'react-router-dom'
import PostList from '../features/posts/PostList'
import { useGetPosts } from '../features/posts/useGetPosts'
import { useDocumentTitle } from '../shared/hooks/useDocumentTitle'

const Home = () => {
  const getPostsQuery = useGetPosts()
  useDocumentTitle('Home - Juniors.tech')

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
