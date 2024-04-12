import {
  Card,
  Avatar,
  CardBody,
  Typography
} from '@material-tailwind/react'
import { useEffect, Fragment } from 'react'
import { usePublicUserInformation } from './usePublicUserInformation'
import { useParams } from 'react-router-dom'
import Nestbutton from './NestButton'
import { useAuthStore } from '../../stores/authStore'
const PublicProfileComponent = () => {
  const { username } = useParams()
  const { publicProfile, data } = usePublicUserInformation(username)
  const idUser = useAuthStore(state => state.id)
  useEffect(() => {
    publicProfile({ username })
  }, [publicProfile, username])

  const validateid = () => {
    if (idUser === data?.id) {
      return true
    }
    return false
  }
  return (
      <Card className="mt-6">
        <div className='flex m-6'>
        <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size='xxl' />
        <div className='flex'>
        <div className='ml-5'>
          <Typography color="black" variant='h2'>
            {data?.username} ({data?.pronoun})
          </Typography>
          <Typography color="black">
            Miembro por N meses
          </Typography>
          <Typography color="black">
          {data?.employmentStatusId}
          </Typography>
          <Typography color="black">
          {data?.countryId}
          </Typography>
        </div>
        <div className='ml-36'>
          <Nestbutton isSameUser={validateid()} />
        </div>
      </div>
        </div>
        <CardBody>
          <Typography color="black" variant='h2'>
            Estadisticas
          </Typography>
          <div className='flex mt-6 gap-6'>
            <div>
              <Typography color="black" variant='h3'>
                {data?.postCount}
              </Typography>
              <Typography color="black">
                Publicaciones
              </Typography>
            </div>
            <div>
              <Typography color="black" variant='h3'>
                {data?.commentCount}
              </Typography>
              <Typography color="black">
                Comentarios
              </Typography>
            </div>
            <div>
              <Typography color="black" variant='h3'>
                {data?.score}
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
              {data?.about}
            </Typography>
          </div>
          <div className='mt-6'>
            <div className='mt-6'>
            <Typography color='black' variant='h2'>
              Idioma
            </Typography>
            <div className='flex gap-6 mt-4'>
            {data?.languages && data.languages.map((lang, index) => (
            <Fragment key={index}>
              <Typography color='black'>
                {lang}
              </Typography>
              {index < data.languages.length - 1 && <Typography color='black'>-</Typography>}
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
            {data?.itField }
            </div>
          </div>
          <div className='mt-6'>
            <Typography color='black' variant='h2'>
              Lenguajes y Herramientas
            </Typography>
            <div className='flex gap-6 mt-4'>
            {data?.technologies && data.technologies.map((tech, index) => (
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
              {data?.social_networks && data.social_networks.map((network, index) => (
                network && <Typography color='black' key={index}>
                  <a href={network.toString()}>Red Social {index + 1}</a>
                </Typography>
              ))}
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
