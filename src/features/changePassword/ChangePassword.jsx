import {
  Card,
  Typography,
  Input,
  Button,
  CardBody
} from '@material-tailwind/react'
import { useAuthStore } from '../../stores/authStore'
import ProfileAvatar from '../../shared/components/ProfileAvatar'
import { useForm } from 'react-hook-form'
import { useUserChangePassword } from './userUserchangePassword'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { showErrorToast } from '../../shared/utils/showErrorToast'
const ChangePassword = () => {
  const user = useAuthStore(state => state.user)
  const navigate = useNavigate()

  const { change } = useUserChangePassword()
  const { register, handleSubmit } = useForm()

  const onSubmit = data => {
    const userData = {
      password: data.password,
      newPassword: data.newPassword
    }
    change(userData, {
      onSuccess: () => {
        navigate(`/users/${user}`)
        toast.success('Contraseña cambiada correctamente , la proxima vez que inicies sesion tendras que iniciar sesion con la nueva contraseña')
      },
      onError: (error) => {
        showErrorToast(error, 'Contraseña actual invalida')
      }
    })
  }
  return (
    <Card className="mt-6">
      <div className='flex mt-6 ml-6 flex-col'>
            <Typography color='black' variant='h3'>
                Editar Perfil
            </Typography>
            <Typography color='black' className='mt-3 text-xl'>
                {user}
            </Typography>
        </div>
        <div className='flex ml-6  flex-col' >
            <ProfileAvatar alt="avatar" size='xxl' className='mt-6' />
        </div>
      <CardBody>
        <Typography color='black' variant='h3'>
          Cambiar Contraseña
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='w-full sm:w-6/12'>
        <Typography color='black' className='mt-3'>
          Contraseña Actual
          </Typography>
          <Input type="password" label="Contraseña" {...register('password', { required: true })} />
        </div>
        <div className='w-full sm:w-6/12'>
        <Typography color='black' className='mt-3'>
          Contraseña Nueva
          </Typography>
          <Input type="password" label="Contraseña" {...register('newPassword', { required: true })} />
        </div>
        <div className='mt-6'>
        <Button type="submit">
          Cambiar Contraseña
        </Button>
        </div>
        </form>
      </CardBody>

    </Card>
  )
}

export default ChangePassword
