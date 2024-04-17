import { Avatar } from '@material-tailwind/react'
import { useAuthStore } from '../../stores/authStore'
import AvatarIcon from './Icons/AvatarIcon'

const ProfileAvatar = ({ size, className }) => {
  const avatarUrl = useAuthStore(state => state.avatarUrl)
  const username = useAuthStore(state => state.user)

  return avatarUrl
    ? <Avatar src={avatarUrl} alt={username} size={size} className={className}/>
    : (<AvatarIcon size={size} className={`${className || ''}`} />)
}

export default ProfileAvatar
