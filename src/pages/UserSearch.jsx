import { useSearchParams } from 'react-router-dom'
import useSearchUsers from '../features/users/useSearchUsers'
import { useDocumentTitle } from '../shared/hooks/useDocumentTitle'
import UserSummary from '../features/users/UserSummary'
import Pagination from '../shared/components/Pagination'
import { Spinner } from '@material-tailwind/react'

const UserSearch = () => {
  const [searchParams] = useSearchParams()
  const decodedQuery = decodeURIComponent(searchParams.get('q'))
  const q = decodedQuery === 'null' ? '' : decodedQuery
  const { isLoading, data: searchResults } = useSearchUsers({ username: q })
  useDocumentTitle(`Buscar ${q || ' en Juniors.tech'}`)

  return (
      <div className={`flex flex-col items-center ${searchResults?.users.length > 0 ? 'max-w-[48rem] justify-center' : ''}`}>
        {q
          ? isLoading
            ? (<div>
                <Spinner className="h-16 w-16 text-gray-900/50" />
              </div>
              )
            : searchResults?.users && searchResults?.users.length > 0
              ? <>
                  <div className="flex-1 w-full">
                  {searchResults?.users.map((user) => (
                    <UserSummary key={user.id} user={user} />
                  ))}
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

export default UserSearch
