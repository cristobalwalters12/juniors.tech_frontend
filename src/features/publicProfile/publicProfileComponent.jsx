import {
  Card,
  CardBody,
  Typography
} from '@material-tailwind/react'
import { useEffect, Fragment } from 'react'
import { usePublicUserInformation } from './usePublicUserInformation'
import { useParams, Link } from 'react-router-dom'
import Nestbutton from './NestButton'
import { useAuthStore } from '../../stores/authStore'
import UserAvatar from '../../shared/components/UserAvatar'
import { FormattedDate } from '../../shared/components/FormattedDate'
import { useDocumentTitle } from '../../shared/hooks/useDocumentTitle'
import { usePublicPostInformation } from './userPostUserInformation'

const PublicProfileComponent = () => {
  const { username } = useParams()
  const { publicProfile, data } = usePublicUserInformation(username)
  const { publicPost, posts } = usePublicPostInformation(data?.id)
  useDocumentTitle(`Perfil de ${username}`)
  const idUser = useAuthStore(state => state.id)

  useEffect(() => {
    publicProfile({ username })
  }, [publicProfile, username])
  useEffect(() => {
    if (data?.id) {
      publicPost({ id: data.id })
    }
  }, [publicPost, data])

  const isSameUser = idUser === data?.id

  return (
      <Card className="mt-6">
        <div className='flex m-6'>
          <UserAvatar avatarUrl={data?.avatarUrl} username={data?.username} alt="avatar" size='xxl' />
        <div className='flex'>
          <div className='flex'>
            <div className='ml-5'>
              <Typography color="black" variant='h3'>
                {data?.username} ({data?.pronoun})
              </Typography>
              <FormattedDate date={data?.createdAt} />
              <Typography color="black">
              {data?.employmentStatus}
              </Typography>
              <Typography color="black">
              {data?.country}
              </Typography>
            </div>
            <div className='sm:ml-36'>
              <Nestbutton isSameUser={isSameUser} />
            </div>
          </div>
        </div>
        </div>
        <CardBody>
          <Typography color="black" variant='h3'>
            Estadísticas
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
            <Typography color="black" variant='h3'>
              Acerca de mí
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
                {lang || 'N/A'}
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
              <a href={network || '#'}>{network}</a>
            </Typography>
            ))}
            </div>
          </div>
          <div className='mt-6'>
          <Typography color='black' variant='h3'>
              Publicaciones destacadas
            </Typography>
            <div className='flex flex-col gap-3 mt-4'>
            <div className='flex flex-col gap-3 mt-4'>
              {posts && posts.map((post, index) => (
                <Typography color='black' key={index}>
                  <Link to={`/posts/${post.id}`}>
                    {post.title}
                  </Link>
                </Typography>
              ))}
              </div>
              </div>
            </div>
          </CardBody>
        </Card>
  )
}

export default PublicProfileComponent
