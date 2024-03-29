import { useForm, Controller } from 'react-hook-form'
import {
  Card,
  Input,
  Button,
  Typography
} from '@material-tailwind/react'
import './css/loginForm.css'
import { useLoginUser } from './userLogin'
import { useNavigate } from 'react-router-dom'

const RegisterForm = () => {
  const { control, handleSubmit } = useForm()
  const { loginUser } = useLoginUser()
  const navigate = useNavigate()

  const onSubmit = data => {
    console.log(data)
    const user = {
      email: data.email,
      password: data.password
    }
    loginUser(user, {
      onSuccess: () => {
        navigate('/PublicProfile')
      }
    })
  }
  return (
    <Card color="white" shadow={false} className="w-full card-size">
      <Typography variant="h2" color="blue-gray" className='text-center mt-4'>
        Inicia Sesión
      </Typography>
      <div className=''>
        <Button className="mt-6 rounded-none" fullWidth variant="outlined">
          Con tu cuenta de Google
        </Button>
        <Button className="mt-6 rounded-none" fullWidth variant="outlined">
          Con tu cuenta de LinkedIn
        </Button>
        <Button className="mt-6 rounded-none" fullWidth variant="outlined">
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
            render={({ field }) => <Input {...field} label="email" className='rounded-none' />}
          />
        </div>
        <div className='mt-6'>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => <Input {...field} type="password" label="Password" className='rounded-none' />}
          />
        </div>
          <Button type="submit" className="mt-6 rounded-none" fullWidth variant="outlined">
            Iniciar Sesión
          </Button>
      </form>
      <div>
      </div>
      <Typography variant='h6' className='mt-6 text-center'>
        ¿No tienes Cuenta ? <a href="/Register">Registrate </a>
      </Typography>
      <Typography variant='h6' className='mt-6 text-center sm:text-left'>
        al continuar, aceptas nuestros <a href="/login">Términos de servicio</a> y <a href="/login">Política de privacidad</a>
      </Typography>

    </Card>

  )
}

export default RegisterForm
