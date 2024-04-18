import { useEffect, useState } from 'react'
import PostList from '../features/posts/PostList'
import { useSearchParams } from 'react-router-dom'
import { searchPost } from '../services/search'

const SearchPosts = () => {
  const [results, setResults] = useState([])
  const [searchParams] = useSearchParams()

  const q = searchParams.get('q')
  const sort = searchParams.get('sort')
  const order = searchParams.get('order')
  const page = searchParams.get('page')
  const limit = searchParams.get('limit')
  const category = searchParams.get('category')

  useEffect(() => {
    if (!q || q.trim() === '') return

    searchPost({ q, category, page, limit, sort, order }).then(results => setResults(results))
  }, [searchParams, q, category, page, limit, sort, order])

  return (
    <div className="flex min-h-full flex-col">
      <div className="flex flex-1 flex-row">
        {results && <PostList {...results} />}
      </div>
    </div>

  )
}

export default SearchPosts
