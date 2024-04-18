import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button
} from '@material-tailwind/react'

import { Link } from 'react-router-dom'
import { useAuthStore } from '../../stores/authStore'

const NestButton = ({ isSameUser }) => {
  const username = useAuthStore(state => state.user)
  return (
      <Menu>
        <MenuHandler>
          <Button variant='text' size='lg'>+ Más opciones</Button>
        </MenuHandler>
        <MenuList>
          {isSameUser
            ? (
              <MenuItem>
              <Link to={`/users/${username}/edit`}>
                Editar Perfil
              </Link>
            </MenuItem>
              )
            : (
            <MenuItem>Reportar Usuario</MenuItem>
              )}
        </MenuList>
      </Menu>
  )
}

export default NestButton
