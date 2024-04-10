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

const RegisterForm = () => {
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
        navigate('/home')
      }
    })
  }
  return (
    <Card color="white" shadow={false} className="w-full card-size">
      <Typography variant="h2" color="blue-gray" className='text-center mt-4'>
        Inicia Sesión
      </Typography>
      <div className=''>
        <Button className="mt-6" fullWidth variant="outlined">
          Con tu cuenta de Google
        </Button>
        <Button className="mt-6" fullWidth variant="outlined">
          Con tu cuenta de LinkedIn
        </Button>
        <Button className="mt-6" fullWidth variant="outlined">
          Con tu cuenta de GitHub
        </Button>
      </div>

      <Typography variant="h4" color="blue-gray" className='text-center mt-6'>
        O con tu
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
          <Button type="submit" className="mt-6" fullWidth variant="outlined">
            Iniciar Sesión
          </Button>
      </form>
      <div>
      </div>
      <Typography variant='paragraph' className='mt-6'>
        ¿No tienes Cuenta? <Link to="/register" className='font-bold'>Registrate</Link>
      </Typography>
      <Typography variant='paragraph' className='mt-6 sm:text-left'>
        Al continuar, aceptas nuestros Términos de servicio y Política de privacidad
      </Typography>
    </Card>
  )
}

export default RegisterForm
