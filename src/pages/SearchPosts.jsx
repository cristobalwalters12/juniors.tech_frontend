import { useEffect, useState } from 'react'
import PostList from '../features/posts/PostList'
import { useSearchParams } from 'react-router-dom'
import { searchPost } from '../services/search'

const SearchPosts = () => {
  const [results, setResults] = useState([])
  const [searchParams] = useSearchParams()

  const title = searchParams.get('title')
  const sort = searchParams.get('sort')
  const order = searchParams.get('order')
  const page = searchParams.get('page')
  const limit = searchParams.get('limit')
  const category = searchParams.get('category')

  useEffect(() => {
    if (!title || title.trim() === '') return

    searchPost({ title, category, page, limit, sort, order }).then(results => setResults(results))
  }, [searchParams, title, category, page, limit, sort, order])

  return (
    <div className="flex min-h-screen flex-col">
    <div className="flex flex-1 flex-row">
    {results && <PostList {...results} />}
  </div>
</div>

  )
}

export default SearchPosts
