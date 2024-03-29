import { useState } from 'react'
import { Navbar, Collapse, Typography, Button, IconButton, Input } from '@material-tailwind/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

export function NavbarSearch () {
  const [openNav, setOpenNav] = useState(false)

  return (
    <Navbar className="max-w-full mx-auto w-full rounded-none px-4 py-2">
      <div className="flex flex-col items-center justify-between text-blue-gray-900 lg:flex-row">
        <Typography
          as={Link}
          to="/"
          variant="h6"
          className="cursor-pointer py-1.5 lg:ml-2 text-center lg:text-left"
          onClick={() => setOpenNav(false)}
        >
          Juniors.TECH
        </Typography>
        <div className="relative flex w-full gap-2 md:w-max">
          <Input
            type="search"
            color="black"
            label="Buscar en Juniors.tech"
            className="pr-12"
            containerProps={{
              className: 'min-w-[380px]' // Ajustar según tus necesidades
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
        <div className="hidden lg:block">
          <Link to="/AddPost">
            <Button variant="text" size="sm" color="black">
              Crear Publicación
            </Button>
          </Link>
          <Link to="/">
            <Button variant="gradient" size="sm">
              Cerrar Sesión
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
        <div className="flex flex-col w-full gap-2 lg:hidden">
          <Link to="/login" onClick={() => setOpenNav(false)}>
            <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
              Crear Publicación
            </Button>
          </Link>
          <Link to="/register" onClick={() => setOpenNav(false)}>
            <Button variant="gradient" size="sm" fullWidth>
              Cerrar Sesión
            </Button>
          </Link>
        </div>
      </Collapse>
    </Navbar>
  )
}
