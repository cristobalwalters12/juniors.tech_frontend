import { useGetUsers } from './useGetUsers'

const UserList = () => {
  const { isLoading, users, isError, error } = useGetUsers()
  if (isLoading) return (<h1 className='text-blue-gray-50'>Cargando...</h1>)

  if (isError) return (<h1 className='text-blue-gray-50'>{error.message}</h1>)

  return (
    <div className='text-blue-gray-50'>
      {users.map(user => (
        <div key={user.id} >
          <h2 className='font-extrabold'>{user.roles}</h2>
          <h3 className='text-blue-gray-200'>{user.category}</h3>
          <p>{user.body}</p>
        </div>
      ))}
    </div>
  )
}

export default UserList
