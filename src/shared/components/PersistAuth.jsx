import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { useAuthStore } from '../../stores/authStore'

const PersistAuth = () => {
  const isAuth = useAuthStore((state) => state.isAuth)
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  return (
    isAuth
      ? <Navigate to='/home' state={{ from }} replace />
      : <Outlet />
  )
}

export default PersistAuth
