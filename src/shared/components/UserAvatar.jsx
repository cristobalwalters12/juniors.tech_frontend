import { useState } from 'react'
import { Avatar } from '@material-tailwind/react'
import AvatarIcon from './Icons/AvatarIcon'

const UserAvatar = ({ size, className, avatarUrl, username }) => {
  const [validUrl, setValidUrl] = useState(avatarUrl !== undefined)

  const handleImageError = () => setValidUrl(false)

  return avatarUrl && validUrl
    ? (<Avatar
        src={avatarUrl}
        alt={username}
        size={size}
        className={className}
        onError={handleImageError}
      />)
    : (<AvatarIcon size={size} className={`${className || ''}`} />)
}

export default UserAvatar
