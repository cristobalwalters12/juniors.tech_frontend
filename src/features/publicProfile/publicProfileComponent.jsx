import {
  Card,
  Avatar,
  CardBody,
  Typography
} from '@material-tailwind/react'
import { useEffect, Fragment } from 'react'
import { useAuthStore } from '../../stores/authStore'
import { usePublicUserInformation } from './usePublicUserInformation'
const PublicProfileComponent = () => {
  const user = useAuthStore((state) => state.user)
  const { publicProfile, data } = usePublicUserInformation()

  useEffect(() => {
    publicProfile({ username: user })
  }, [publicProfile, user])

  return (
      <Card className="mt-6">
        <div className='flex m-6'>
        <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size='xxl' />
          <div className='ml-5'>
            <Typography color="black" variant='h2'>
              {user}
            </Typography>
            <Typography color="black">
              Miembro por N meses
            </Typography>
            <Typography color="black">
            {data?.employmentStatus}
            </Typography>
            <Typography color="black">
            {data?.country}
            </Typography>
          </div>
        </div>
        <CardBody>
          <Typography color="black" variant='h2'>
            Estadisticas
          </Typography>
          <div className='flex mt-6 gap-6'>
            <div>
              <Typography color="black" variant='h3'>
                {data?.numberOfPosts}
              </Typography>
              <Typography color="black">
                Publicaciones
              </Typography>
            </div>
            <div>
              <Typography color="black" variant='h3'>
                {data?.comments}
              </Typography>
              <Typography color="black">
                Comentarios
              </Typography>
            </div>
            <div>
              <Typography color="black" variant='h3'>
                {data?.likes}
              </Typography>
              <Typography color="black">
                Puntos
              </Typography>
            </div>
          </div>
          <div className='mt-6'>
            <Typography color="black" variant='h2'>
              Acerca de mi
            </Typography>
            <Typography color="black" className='mt-4'>
              {data?.About}
            </Typography>
          </div>
          <div className='mt-6'>
            <div className='mt-6'>
            <Typography color='black' variant='h2'>
              Idioma
            </Typography>
            <div className='flex gap-6 mt-4'>
              {data?.Languaje.map((lang, index) => (
                <Fragment key={index}>
                  <Typography color='black'>
                    {lang}
                  </Typography>
                  {index < data.Languaje.length - 1 && <Typography color='black'>-</Typography>}
                </Fragment>
              ))}
            </div>
          </div>
          </div>
          <div className='mt-6'>
            <Typography color='black' variant='h2'>
              Áreas de interés en IT
            </Typography>
            <div className='flex gap-6 mt-4'>
              {data?.it_field.map((field, index) => (
                <Fragment key={index}>
                  <Typography color='black'>
                    {field}
                  </Typography>
                  {index < data.it_field.length - 1 && <Typography color='black'>-</Typography>}
                </Fragment>
              ))}
            </div>
          </div>
          <div className='mt-6'>
            <Typography color='black' variant='h2'>
              Lenguajes y Herramientas
            </Typography>
            <div className='flex gap-6 mt-4'>
              {data?.technologies.map((tech, index) => (
                <Fragment key={index}>
                  <Typography color='black'>
                    {tech}
                  </Typography>
                  {index < data.technologies.length - 1 && <Typography color='black'>-</Typography>}
                </Fragment>
              ))}
            </div>
          </div>
          <div className='mt-6'>
            <Typography color='black' variant='h2'>
              Redes
            </Typography>
            <div className='flex gap-6 flex-col mt-4'>
              {data?.socialNetwork && (
                <Typography color='black'>
                  <a href={data.socialNetwork.toString()}>Linkedin</a>
                </Typography>
              )}
            </div>
          </div>
          <div className='mt-6'>
          <Typography color='black' variant='h2'>
              publicaciones Destacadas
            </Typography>
            <div className='flex flex-col gap-3 mt-4'>
              <Typography>
                <a href>Como hacer un login con React y Firebase</a>
              </Typography>
              <Typography>
                <a href>Como hacer un login con React y Firebase</a>
              </Typography>
              <Typography>
                <a href>Como hacer un login con React y Firebase</a>
              </Typography>
            </div>
          </div>
        </CardBody>
      </Card>
  )
}

export default PublicProfileComponent
