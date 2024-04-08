import React from 'react'
import { Link } from 'react-router-dom'
import NotFoundGif from '../assets/images/NotFound.gif'
import {
  Navbar,
  Card,
  CardHeader,
  CardBody,
  Collapse,
  Typography,
  IconButton,
  Button
} from '@material-tailwind/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

function NavList () {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Link to="/login" >
        <Button
          as="li"
          variant="text"
          color="blue-gray"
          className="p-1 mr-16 font-medium"
        >
          Iniciar sesión
        </Button>
      </Link>
    </ul>
  )
}

function getCardHeaderClasses (isMobile) {
  if (isMobile) {
    return 'm-0 lg:w-full text-center lg:text-left lg:rounded-l-none lg:rounded-r-none lg:pr-20'
  } else {
    return 'm-0 text-center  lg:rounded-l-none lg:rounded-r-none '
  }
}

export default function NavbarSimple () {
  const [openNav, setOpenNav] = React.useState(false)

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false)

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  const isMobile = window.innerWidth < 960

  return (
    <>
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-blue-gray-200">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="ml-14 cursor-pointer py-1.5"
          >
            Juniors.TECH
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
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
          <NavList />
        </Collapse>
      </Navbar>
      <div className='flex-column'>
        <Typography
          as="a"
          href="#"
          variant="h1"
          className="flex justify-center mt-20 cursor-pointer py-1.5"
          >
          Página no encontrada
        </Typography>
        <Card className={` flex-col-reverse w-screen h-full items-center lg:flex-row ${getCardHeaderClasses(isMobile)}`}>
          <CardHeader
            shadow={false}
            floated={false}
            className={getCardHeaderClasses(isMobile)}
            >
            <Typography
              variant="h2"
              color="gray"
              className={`mb-4 ${isMobile ? '' : 'text-center'}`}
            >
              ¡Ups! No pudimos encontrar la página que buscabas
            </Typography>
            <Link to='/'>
              <Button
                className={isMobile ? '' : 'text-center'}
              >
                Volver a la página de inicio
              </Button>
            </Link>
          </CardHeader>
          <CardBody>
            <img
              src={NotFoundGif}
              alt="Not Found"
              className="h-full w-full lg:w-auto"
            />
          </CardBody>
        </Card>
      </div>
    </>
  )
}
