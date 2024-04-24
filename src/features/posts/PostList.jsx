import { Link } from 'react-router-dom'
import PostSummary from './PostSummary'

const PostList = ({ posts }) => {
  return (
    <div className='flex flex-col gap-3 w-full max-w-[48rem]'>
      {posts?.map((post) => (
        <Link key={post.id} to={`/posts/${post.id}/${post.slug}`}>
          <PostSummary post={post} />
        </Link>
      ))}
    </div>
  )
}

export default PostList
