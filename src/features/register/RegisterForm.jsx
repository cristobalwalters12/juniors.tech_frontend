import {
  Card,

  Button,
  Typography
} from '@material-tailwind/react'
import './css/registerForm.css'
import { Link } from 'react-router-dom'

const RegisterForm = ({ onEmailClick, onClose, onSwitch }) => {
  return (
    <Card color="white" shadow={false} className="w-full">
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
        <Button className="mt-6 rounded-none" fullWidth variant="outlined" onClick={onEmailClick}>
          Correo Electronico
        </Button>
        </div>
        <Typography variant='paragraph' className='mt-6'>
          ¿Ya tienes una cuenta? <span>
          {
            onSwitch
              ? <button onClick={onSwitch} className='font-bold'>Inicia sesión </button>
              : <Link to="/login" className='font-bold'>Inicia sesión</Link>
          }
        </span>
        </Typography>
        <Typography variant='h6' className='mt-6 text-center sm:text-left'>
          al continuar, aceptas nuestros <Link to="/login">Términos de servicio</Link> y <Link to="/login">Política de privacidad</Link>
        </Typography>
      </Card>
  )
}
export default RegisterForm
