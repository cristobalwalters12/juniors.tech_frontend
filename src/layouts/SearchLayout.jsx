import { useState } from 'react'
import Sidebar from '../shared/components/Sidebar'
import VerifyUser from '../pages/VerifyUser'
import PostList from '../features/posts/PostList'

const SearchLayout = () => {
  const [orderDirection, setOrderDirection] = useState('desc')
  const [orderBy, setOrderBy] = useState('vote_count')

  const handleAscendente = () => {
    setOrderDirection('asc')
  }

  const handleDescendente = () => {
    setOrderDirection('desc')
  }

  const handleOrderChange = (field) => {
    setOrderBy(field)
  }

  return (
    <div className="flex min-h-screen flex-col">
  <header className=" p-4"><VerifyUser /></header>
  <div className="flex flex-1 flex-row">
    <aside className="w-1/3 p-4 max-w-[18rem]">
      <Sidebar
        handleAscendente={handleAscendente}
        handleDescendente={handleDescendente}
        handleOrderChange={handleOrderChange}
      />
    </aside>
    <PostList orderBy={orderBy} orderDirection={orderDirection} />
  </div>
</div>

  )
}

export default SearchLayout
