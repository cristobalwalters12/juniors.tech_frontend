import { Button } from '@material-tailwind/react'
import { NavLink, useLocation } from 'react-router-dom'
import PrimaryButton from '../Buttons/PrimaryButton'

const NavTextButton = ({ children, to, primaryIn, className }) => {
  const currPath = useLocation().pathname
  let isPrimary = false
  if (primaryIn && (primaryIn === '*' || currPath === primaryIn)) {
    isPrimary = true
  }
  const classNames = `${className || ''}`
  const ButtonContent = isPrimary
    ? <PrimaryButton className={classNames}>{children}</PrimaryButton>
    : <Button variant="text" className={`px-2 py-1 ${classNames}`}>{children}</Button>

  return to
    ? <NavLink to={to} className={classNames}>{ButtonContent}</NavLink>
    : ButtonContent
}

export default NavTextButton
