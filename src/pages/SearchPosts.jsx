import PostList from '../features/posts/PostList'
import { useSearchParams } from 'react-router-dom'
import { useDocumentTitle } from '../shared/hooks/useDocumentTitle'
import { useSearchPosts } from '../features/posts/useSearchPosts'
import Pagination from '../shared/components/Pagination'

const SearchPosts = () => {
  const searchResults = useSearchPosts()
  const [searchParams] = useSearchParams()
  const q = searchParams.get('q')
  useDocumentTitle(`Buscar ${q || ' en Juniors.tech'}`)

  return (
    <div className="flex h-full flex-col gap-4 pr-4 max-w-[48rem]">
      {q && searchResults.data &&
        <>
          <div className="flex flex-1 flex-row">
            <PostList {...searchResults.data} />
          </div>
          <div className='pb-4 mx-auto'>
            <Pagination {...searchResults.data} />
          </div>
        </>
      }
    </div>
  )
}

export default SearchPosts
