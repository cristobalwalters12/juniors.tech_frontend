import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button
} from '@material-tailwind/react'

import { Link } from 'react-router-dom'
import { useAuthStore } from '../../stores/authStore'
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid'

const NestButton = ({ isSameUser }) => {
  const username = useAuthStore(state => state.user)
  return (
      <Menu>
        <MenuHandler>
        <Button variant="text" className="rounded-full p-1.5">
          <EllipsisVerticalIcon className="h-4 w-4" />
        </Button>
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
