import { useAuthStore } from '../../../stores/authStore'
import useModalStore from '../../../stores/modalStore'

const RequireAuthOnClick = ({ onClickAuthenticated, children, className }) => {
  const loggedIn = useAuthStore(state => state.isAuth)
  const openModal = useModalStore(state => state.open)
  const handleClick = () => loggedIn ? onClickAuthenticated() : openModal('login')
  return (
    <div onClick={handleClick} className={className}>{children}</div>
  )
}

export default RequireAuthOnClick
