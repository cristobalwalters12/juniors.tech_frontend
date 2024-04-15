import { Outlet, Navigate, useLocation, useParams } from 'react-router-dom'
import { useAuthStore } from '../../../stores/authStore'

const RequireAccountOwner = () => {
  const accountUsername = useAuthStore((state) => state.user)
  const { username: requestedUsername } = useParams()
  const isAccountOwner = accountUsername === requestedUsername
  const location = useLocation()
  return (
    isAccountOwner
      ? <Outlet />
      : <Navigate to='/login' state={{ from: location }} replace />
  )
}

export default RequireAccountOwner
