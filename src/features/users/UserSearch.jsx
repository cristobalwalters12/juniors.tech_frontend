import { useGetUsers } from './useGetUsers'
import { useEffect, useState } from 'react'
import { Avatar } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import { LanguageDictionary, CountryDiccionary, ItFieldDictionary, TechnologyDictionary } from '../editUserProfile/Dictionary'

const UserSearch = () => {
  const [users, setUsers] = useState([])
  const { isLoading, usersAll, isError, error } = useGetUsers()

  useEffect(() => {
    if (usersAll) {
      setUsers(usersAll.data)
    }
  }, [usersAll])

  if (isLoading) return (<h1 className='text-blue-gray-50'>Cargando...</h1>)

  if (isError) return (<h1 className='text-blue-gray-50'>{error.message}</h1>)

  console.log('usuarios', users)

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-center bg-cover">
        {users.map((user) => (
          <div key={user.id} className="max-w-3xl w-full mx-auto z-10">
            <div className="flex flex-col">
              <div className="bg-white border border-white shadow-lg rounded-3xl p-4 m-4">
                <div className="flex-none sm:flex">
                  <div className="relative h-32 w-32 sm:mb-0 mb-3">
                    <Avatar
                      size="lg"
                      className="w-32 h-32 object-cover rounded-2xl"
                      variant="circular"
                      src={user.avatar_url}
                      alt={user.username}
                    />
                  </div>
                  <div className="flex-auto sm:ml-5 justify-evenly">
                    <div className="flex items-center justify-between sm:mt-2">
                      <div className="flex items-center">
                        <div className="flex flex-col">
                          <div className="w-full flex-none text-lg text-accent-dark font-bold leading-none">
                              <span>{user.username}</span>
                              {user.country_id && (
                                <>
                                  <span className="text-accent-dark mx-1">·</span>
                                  <span className="text-grey-dark">{CountryDiccionary.find(country => country.value === user.country_id)?.label}</span>
                                </>
                              )}
                          </div>
                          <div className="flex text-gray-500 my-1">
                            <span className="mr-3">{user.score} {user.score === 1 ? 'punto' : 'puntos'}</span>
                            <div>
                            {user.open_to_work && (
                              <>
                                <span className="mr-3 border-r border-gray-200  max-h-0"></span>
                                <span>Abierto a ofertas</span>
                              </>
                            )}
                            </div>
                          </div>
                          {user.languages.length > 0 && (
                            <div className="flex-auto text-gray-500 my-1">
                              {user.languages.map((langId, index) => (
                                <span key={langId}>
                                  {LanguageDictionary.find(lang => lang.value === langId)?.label}
                                  {index !== user.languages.length - 1 ? ', ' : ''}
                                </span>
                              ))}
                            </div>
                          )}
                          {user.it_field_id && (
                            <div className="flex-auto text-gray-500 my-1">
                              <span>{ItFieldDictionary.find(field => field.value === user.it_field_id)?.label}</span>
                            </div>
                          )}
                          {user.technologies.length > 0 && (
                            <div className="flex-auto text-primary-dark font-bold my-1">
                              {user.technologies.map((techId, index) => (
                                <span key={techId}>
                                  {TechnologyDictionary.find(tech => tech.value === techId)?.label}
                                  {index !== user.technologies.length - 1 ? ', ' : ''}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex text-sm text-gray-500">
                        <Link to={`/users/${user.username}`}>
                          <button className="flex-no-shrink bg-primary-dark hover:bg-primary-light px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-accent-dark hover:border-accent-dhover text-white rounded-full transition ease-in duration-300">Ir al perfil</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default UserSearch
