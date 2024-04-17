import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  GlobeAmericasIcon,
  PencilIcon,
  ShieldCheckIcon,
  PowerIcon
} from '@heroicons/react/24/solid'
import { Button, Menu, MenuHandler, MenuItem, MenuList, Typography } from '@material-tailwind/react'
import { useAuthStore } from '../../../stores/authStore'
import { ROLES } from '../../../config/constants/roles'
import ProfileAvatar from '../ProfileAvatar'

const ProfileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const username = useAuthStore(state => state.user)
  const logout = useAuthStore(state => state.logout)
  const roles = useAuthStore(state => state.roles)
  const isAdmin = roles.includes(ROLES.ADMIN)
  const navigate = useNavigate()
  const toggleMenu = () => setIsMenuOpen(prevState => !prevState)
  const goTo = (to) => () => navigate(to)

  return (
    <Menu open={isMenuOpen} handler={toggleMenu} placement="bottom-end">
      <MenuHandler>
        <Button variant='text' className='p-0.5 rounded-full'>
          <ProfileAvatar size="sm" className="w-10 h-10" />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        <MenuItem className="flex flex-col items-start outline-none cursor-not-allowed pointer-events-none hover:bg-transparent focus:bg-white active:bg-white">
          <Typography variant="h6" color="blue-gray">
            {username}
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-medium text-blue-gray-500 capitalize"
            >Rol{roles.length > 0 ? 'es' : ''}:
          </Typography>
          <ul>{roles.map(role => <li key={role}>- {role}</li>)}</ul>
          </MenuItem>
          <hr className="my-1" />
          <MenuItem className='p-3 flex items-center gap-2' onClick={goTo(`/users/${username}`)}>
            <GlobeAmericasIcon className="h-4 w-4" />
            Ver perfil público
          </MenuItem>
          <MenuItem className='p-3 flex items-center gap-2' onClick={goTo(`/users/${username}/edit`)}>
            <PencilIcon className="h-4 w-4" />
            Editar perfil
          </MenuItem>

          {roles.length > 1 && <MenuItem className='p-3 flex items-center gap-2' onClick={goTo('/admin/roles')}>
            <ShieldCheckIcon className="h-4 w-4" />
            Ir al panel {isAdmin ? 'admin' : 'mod'}
          </MenuItem>}
          <MenuItem
            onClick={logout}
            className='p-3 flex items-center gap-2 hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10'>
            <PowerIcon className="h-4 w-4 text-red-500" />
            Cerrar sesión
          </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default ProfileMenu
