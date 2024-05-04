import { Link, useSearchParams } from 'react-router-dom'
import useSearchUsers from '../features/users/useSearchUsers'
import { useDocumentTitle } from '../shared/hooks/useDocumentTitle'
import UserSummary from '../features/users/UserSummary'
import Pagination from '../shared/components/Pagination'
import UserSkeletonList from '../shared/components/Skeletons/UserSkeletonList'

const UserSearch = () => {
  const [searchParams] = useSearchParams()
  const decodedQuery = decodeURIComponent(searchParams.get('q'))
  const page = searchParams.get('page') || 1
  const q = decodedQuery === 'null' ? '' : decodedQuery
  const { isLoading, data: searchResults } = useSearchUsers({ username: q })
  const title = q ? `${q} - Página ${page}` : ' en Juniors.tech'
  useDocumentTitle(`Buscar ${title}`)

  return (
      <div className={`flex flex-col items-center ${isLoading || searchResults?.users.length > 0 ? 'max-w-[48rem] justify-center' : ''}`}>
        {q
          ? <div className="flex flex-1 flex-col gap-4 w-full">
              {isLoading
                ? (<UserSkeletonList totalSkeletons={3} />)
                : searchResults?.users && searchResults?.users.length > 0
                  ? (<>
                      <div className="flex flex-1 flex-col gap-4 w-full">
                        {searchResults.users.map((user) => (
                          <Link key={user.id} to={`/users/${encodeURIComponent(user.username)}`}>
                            <UserSummary user={user} />
                          </Link>
                        ))}
                        </div>
                        <div className='pb-4 mx-auto'>
                          <Pagination {...searchResults} />
                        </div>
                      </>
                    )
                  : <div className='text-center'>No hay resultados para esta búsqueda</div>
              }
            </div>
          : <div className='text-center'>Busca publicaciones y usuarios en Juniors.tech</div>
        }
      </div>
  )
}

export default UserSearch
