import { useState } from 'react'
import { Avatar } from '@material-tailwind/react'
import AvatarIcon from './Icons/AvatarIcon'

const UserAvatar = ({ size, className, avatarUrl, username, ...props }) => {
  const [validUrl, setValidUrl] = useState(avatarUrl !== undefined)

  const handleImageError = () => setValidUrl(false)

  return avatarUrl && validUrl
    ? (<Avatar
        src={avatarUrl}
        alt={username}
        size={size}
        className={className}
        onError={handleImageError}
        {...props}
      />)
    : (<AvatarIcon size={size} className={`${className || ''}`} {...props} />)
}

export default UserAvatar
