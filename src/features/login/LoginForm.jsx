import { useForm, Controller } from 'react-hook-form'
import {
  Card,
  Input,
  Button,
  Typography
} from '@material-tailwind/react'
import './css/loginForm.css'
import { useLoginUser } from './userLogin'
import { Link, useNavigate } from 'react-router-dom'
import { showErrorToast } from '../../shared/utils/showErrorToast'
const LoginForm = ({ onClose, onSwitch }) => {
  const { control, handleSubmit } = useForm()
  const { loginUser } = useLoginUser()
  const navigate = useNavigate()

  const onSubmit = data => {
    const user = {
      email: data.email,
      password: data.password
    }
    loginUser(user, {
      onSuccess: () => {
        onClose
          ? onClose()
          : navigate('/home')
      },
      onError: (error) => {
        showErrorToast(error, 'Error al iniciar sesión')
      }
    })
  }
  return (
    <Card color="white" shadow={false} className="w-11/12 sm:w-7/12">
      <Typography variant="h2" color="blue-gray" className='text-center mt-4'>
        Inicia Sesión
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mt-6'>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => <Input {...field} label="email" />}
          />
        </div>
        <div className='mt-6'>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => <Input {...field} type="password" label="Password"/>}
          />
        </div>
          <Button type="submit" className="mt-6" fullWidth>
            Iniciar Sesión
          </Button>
      </form>
      <div>
      </div>
      <Typography variant='paragraph' className='mt-6'>
        ¿No tienes Cuenta? <span>
          {
            onSwitch
              ? <button onClick={onSwitch} className='font-bold'>Registrate</button>
              : <Link to="/register" className='font-bold'>Registrate</Link>
          }
        </span>
      </Typography>
      <Typography variant='paragraph' className='mt-6 sm:text-left'>
        Al continuar, aceptas nuestros Términos de servicio y Política de privacidad
      </Typography>
    </Card>
  )
}

export default LoginForm
