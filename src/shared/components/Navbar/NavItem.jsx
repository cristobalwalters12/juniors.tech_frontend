import { useLocation } from 'react-router-dom'
import { matchesAnyPath } from '../../utils/matchesAnyPath'

const NavItem = ({ className, showIn, hideIn, children }) => {
  const currPath = useLocation().pathname
  if (showIn) {
    const showComponent = showIn ? matchesAnyPath(currPath, showIn) : true
    if (!showComponent) return null
    return (
      <div className={className}>{children}</div>
    )
  } else if (hideIn) {
    const hideComponent = hideIn ? matchesAnyPath(currPath, hideIn) : false
    if (hideComponent) return null
    return (
      <div className={className}>{children}</div>
    )
  } else {
    return (
      <div className={className}>{children}</div>
    )
  }
}

export default NavItem
