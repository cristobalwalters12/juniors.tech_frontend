import PostList from '../features/posts/PostList'
import { useSearchParams } from 'react-router-dom'
import { useDocumentTitle } from '../shared/hooks/useDocumentTitle'
import { useSearchPosts } from '../features/posts/useSearchPosts'
import Pagination from '../shared/components/Pagination'
import { Spinner } from '@material-tailwind/react'

const SearchPosts = () => {
  const [searchParams] = useSearchParams()
  const q = searchParams.get('q')
  const { isLoading, data: searchResults } = useSearchPosts({ q })
  useDocumentTitle(`Buscar ${q || ' en Juniors.tech'}`)

  return (
    <div className={`flex h-full flex-col gap-4 pr-4 ${searchResults?.posts.length > 0 ? 'max-w-[48rem]' : ''}`}>
      {q
        ? isLoading
          ? (<div className='flex justify-center'>
            <Spinner className="h-16 w-16 text-gray-900/50" />
          </div>
            )
          : searchResults?.posts && searchResults?.posts.length > 0
            ? <>
            <div className="flex flex-1 flex-row">
              <PostList {...searchResults} />
            </div>
            <div className='pb-4 mx-auto'>
              <Pagination {...searchResults} />
            </div>
          </>
            : <div className='text-center'>No hay resultados para esta búsqueda</div>
        : <div className='text-center'>Busca publicaciones y usuarios en Juniors.tech</div>
      }
    </div>
  )
}

export default SearchPosts
