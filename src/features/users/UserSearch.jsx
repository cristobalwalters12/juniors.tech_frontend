import { useGetUsers } from './useGetUsers'
import { useEffect, useState } from 'react'
import { Avatar } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

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
              <div className="bg-white border border-white shadow-lg  rounded-3xl p-4 m-4">
                <div className="flex-none sm:flex">
                  <div className="relative h-32 w-32   sm:mb-0 mb-3">
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
                          <div className="w-full flex-none text-lg text-gray-800 font-bold leading-none">{user.username}</div>
                          <div className="flex-auto text-gray-500 my-1">
                            <span className="mr-3 ">{user.score} {user.score === 1 ? 'punto' : 'puntos'}</span>
                            <span className="mr-3 border-r border-gray-200  max-h-0"></span>
                            {user.open_to_work && (<span>Abierto a ofertas</span>)}
                          </div>
                        </div>
                      </div>
                      <div className="flex text-sm text-gray-500">
                        <Link to={`/users/${user.username}`}>
                          <button className="flex-no-shrink bg-green-400 hover:bg-green-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300">Ir al perfil</button>
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
