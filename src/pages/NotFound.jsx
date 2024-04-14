import { Link } from 'react-router-dom'
import NotFoundGif from '../assets/images/NotFound.gif'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button
} from '@material-tailwind/react'

export default function NotFound () {
  return (
    <>
      <div className='flex-column'>
        <Typography
          as="a"
          href="#"
          variant="h1"
          className="flex justify-center mt-20 cursor-pointer py-1.5"
          >
          Página no encontrada
        </Typography>
        <Card className='flex-col-reverse w-screen h-full items-center lg:flex-row m-0 text-center lg:rounded-l-none lg:rounded-r-none'>
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 text-center lg:rounded-l-none lg:rounded-r-none"
            >
            <Typography
              variant="h2"
              color="gray"
              className="mb-4 text-center"
            >
              ¡Ups! No pudimos encontrar la página que buscabas
            </Typography>
            <Link to='/'>
              <Button className="sm:text-center">
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
