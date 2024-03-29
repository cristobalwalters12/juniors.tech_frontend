import PostList from '../features/posts/PostList'
import { HolyGrailLayout } from '../layouts/HolyGrailLayout'
import { ProfileOption } from '../shared/components/ProfileOption'

const Home = () => {
  return (
    <HolyGrailLayout>
      <PostList />
      <ProfileOption />
    </HolyGrailLayout>
  )
}

export default Home
