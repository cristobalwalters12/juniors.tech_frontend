import {
  Card,

  Button,
  Typography
} from '@material-tailwind/react'
import './css/registerForm.css'

import { Link } from 'react-router-dom'

const RegisterForm = () => {
  return (
    <Card color="white" shadow={false} className="w-full card-size">
        <Typography variant="h2" color="blue-gray" className='text-center mt-4'>
          Regístrate
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
        <div>
        <Link to="/registerEmail">
        <Button className="mt-6 rounded-none" fullWidth variant="outlined">
          Correo Electronico
        </Button>
        </Link>
        </div>
        <Typography variant='h6' className='mt-6 text-center'>
          ¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a>
        </Typography>
        <Typography variant='h6' className='mt-6 text-center sm:text-left'>
          al continuar, aceptas nuestros <a href="/login">Términos de servicio</a> y <a href="/login">Política de privacidad</a>
        </Typography>

      </Card>
  )
}
export default RegisterForm