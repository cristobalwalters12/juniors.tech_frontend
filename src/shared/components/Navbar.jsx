import React from 'react'
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton
} from '@material-tailwind/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

export function NavbarLanding () {
  const [openNav, setOpenNav] = React.useState(false)

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
        <Navbar className="mx-auto max-w-screen-xl px-4 py-2">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    variant="h6"
                    className="mr-4 cursor-pointer py-1.5 lg:ml-2"
                >
                    Juniors.TECH
                </Typography>
                <div className="hidden lg:block">
                <Link to="/register">
            <Button variant="text" size="sm" color="blue-gray">
              Registrarse
            </Button>
          </Link>

          <Link to="/login">
            <Button variant="gradient" size="sm">
              Iniciar Sesión
            </Button>
          </Link>
                </div>
                <IconButton
                    variant="text"
                    color="blue-gray"
                    className="lg:hidden"
                    onClick={() => setOpenNav(!openNav)}
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
                <div className="flex w-full flex-col gap-2 lg:hidden">
                <Link to="/login">
            <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
              Registrarse
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="gradient" size="sm" fullWidth>
              Iniciar Sesión
            </Button>
          </Link>
                </div>
            </Collapse>
        </Navbar>
  )
}
