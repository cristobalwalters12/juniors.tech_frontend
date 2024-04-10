import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Input,
  Avatar,
  Drawer
} from '@material-tailwind/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ROLES } from '../../config/roles'
import { useAuthStore } from '../../stores/authStore'

function NavbarSearch ({ profile, role }) {
  const [openNav, setOpenNav] = useState(false)
  const [openRight, setOpenRight] = useState(false)
  const cerrarSesion = useAuthStore((state) => state.logout)
  const openDrawerRight = () => setOpenRight(true)
  const closeDrawerRight = () => setOpenRight(false)
  const roles = useAuthStore(state => state.roles)
  const handleNavToggle = () => setOpenNav(!openNav)

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/posts/new')
  }

  return (
    <>
      {profile &&
        <div>
          <Navbar className="max-w-full mx-auto w-full px-4 py-2">
            <div className="flex items-center justify-between text-blue-gray-900 lg:flex-row">
              <Link to="/home">
                <Typography
                  variant="h6"
                  className="cursor-pointer py-1.5 lg:ml-2 text-center lg:text-left"
                  >
                  Juniors.tech
                </Typography>
              </Link>
              <div className="relative flex w-full gap-2 md:w-max">
                <Input
                  type="search"
                  color="black"
                  label="Buscar en Juniors.tech"
                  className="pr-12"
                  containerProps={{
                    className: 'min-w-[280px]'
                  }}
                  labelProps={{
                    className: 'text-gray-500'
                  }}
                />
                <Button
                  size="sm"
                  color="white"
                  className="!absolute right-1 top-1 rounded"
                >
                  Buscar
                </Button>
              </div>
              <Button
                onClick={openDrawerRight}
                variant="text"
                className="rounded-full p-1"
              >
                <Avatar
                  variant="circular"
                  alt="avatar"
                  className="cursor-pointer"
                  src="https://docs.material-tailwind.com/img/face-2.jpg"
                  size="lg"
                />
              </Button>
              <div className="hidden lg:block">
                <Button onClick={handleClick} variant="text" size="sm" color="black">
                  Crear Publicación
                </Button>
              </div>
              <IconButton
                variant="text"
                color="blue-gray"
                className="lg:hidden"
                onClick={handleNavToggle}
              >
                {openNav
                  ? (
                  <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    )
                  : (
                  <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
              </IconButton>
            </div>
            <Collapse open={openNav}>
              <div className="flex flex-col w-full gap-2 lg:hidden">
                <Link to="/posts/new">
                  <Button
                    variant="outlined"
                    size="sm"
                    color="blue-gray"
                    fullWidth
                  >
                    Crear Publicación
                  </Button>
                </Link>
              </div>
            </Collapse>
          </Navbar>
          <Drawer
            placement="right"
            open={openRight}
            onClose={closeDrawerRight}
            className="p-4"
          >
            <div className="mb-6 flex items-center justify-between">
              <Typography variant="h5" color="blue-gray">
                {profile}
              </Typography>
              <IconButton
                variant="text"
                color="blue-gray"
                onClick={closeDrawerRight}
              >
                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
              </IconButton>
            </div>
            <div className="flex items-center gap-4">
              <Avatar
                variant="circular"
                alt={profile}
                className="cursor-pointer"
                src="https://docs.material-tailwind.com/img/face-2.jpg" size="xxl" />
              <div>
                <Typography variant="h6" color="blue-gray">
                  {profile}
                </Typography>
                <Typography variant="h6" color="blue-gray">
                Rol: {Array.isArray(roles) ? roles.join(', ') : [roles].join(', ')}
                </Typography>
              </div>
            </div>
            <div className="mt-4">
              <ul className="list-none list-inside">
                <li>
                  <Link to='/publicProfile'>
                    <Button variant="text" className='m-4' color="blue-gray">
                      Ir al perfil
                    </Button>
                  </Link>
                  {role && role.includes(ROLES.ADMIN) && <Link to='/admin-panel'>
                    <Button variant="text" className='m-4' color="blue-gray">
                      Ir al panel de admin
                    </Button>
                  </Link>}
                </li>
                <li>
                <Button onClick={cerrarSesion} variant="gradient" size="sm" fullWidth>
                  Cerrar Sesión
                </Button>
                </li>
              </ul>
            </div>
          </Drawer>
        </div>
      }
    </>
  )
}

export default NavbarSearch
