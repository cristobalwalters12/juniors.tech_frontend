import { useAuthStore } from '../../stores/authStore'
import UserAvatar from './UserAvatar'

const ProfileAvatar = ({ size, className }) => {
  const avatarUrl = useAuthStore(state => state.avatarUrl)
  const username = useAuthStore(state => state.user)

  return (
  <UserAvatar
    avatarUrl={avatarUrl}
    username={username}
    size={size}
    className={className}
  />)
}

export default ProfileAvatar
