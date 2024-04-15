import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { useAuthStore } from '../../../stores/authStore'

const RequireAuth = ({ allowedRoles }) => {
  const isAuth = useAuthStore((state) => state.isAuth)
  const roles = useAuthStore((state) => state.roles)
  const location = useLocation()
  return (
    isAuth && roles?.find(role => allowedRoles?.includes(role))
      ? <Outlet />
      : <Navigate to='/login' state={{ from: location }} replace />
  )
}

export default RequireAuth
