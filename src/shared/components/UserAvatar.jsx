import { Avatar } from '@material-tailwind/react'
import AvatarIcon from './Icons/AvatarIcon'

const UserAvatar = ({ size, className, avatarUrl, username }) => {
  return avatarUrl
    ? <Avatar src={avatarUrl} alt={username} size={size} className={className}/>
    : (<AvatarIcon size={size} className={`${className || ''}`} />)
}

export default UserAvatar
