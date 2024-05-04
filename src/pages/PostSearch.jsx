import PostList from '../features/posts/PostList'
import { useSearchParams } from 'react-router-dom'
import { useDocumentTitle } from '../shared/hooks/useDocumentTitle'
import { useSearchPosts } from '../features/posts/useSearchPosts'
import Pagination from '../shared/components/Pagination'
import SkeletonList from '../shared/components/Skeletons/SkeletonList'

const SearchPosts = () => {
  const [searchParams] = useSearchParams()
  const decodedQuery = decodeURIComponent(searchParams.get('q'))
  const page = searchParams.get('page') || 1
  const q = decodedQuery === 'null' ? '' : decodedQuery
  const { isLoading, data: searchResults } = useSearchPosts({ title: q })
  const title = q ? `${q} - Página ${page}` : ' en Juniors.tech'
  useDocumentTitle(`Buscar ${title}`)

  return (
    <div className={`flex h-full flex-col gap-4 pr-4 ${searchResults?.posts.length > 0 ? 'max-w-[48rem]' : ''}`}>
      {q
        ? isLoading
          ? (<SkeletonList totalSkeletons={5} />)
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
