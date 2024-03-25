import PostList from '../features/posts/PostList'
import { HolyGrailLayout } from '../layouts/HolyGrailLayout'

const Home = () => {
  return (
    <HolyGrailLayout>
      <PostList />
    </HolyGrailLayout>
  )
}

export default Home
