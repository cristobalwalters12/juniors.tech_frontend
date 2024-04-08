import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { useAuthStore } from '../../stores/authStore'

const RequireAuth = ({ allowedRoles }) => {
  const isAuth = useAuthStore((state) => state.isAuth)
  const role = useAuthStore((state) => state.role)
  const location = useLocation()
  return (
    isAuth && role?.find(role => allowedRoles?.includes(role))
      ? <Outlet />
      : <Navigate to='/login' state={{ from: location }} replace />
  )
}

export default RequireAuth
