import { Typography, Card } from '@material-tailwind/react'
import './css/loginForm.css'
import loginImage from '../../assets/images/login.png'
const RegisterWords = () => {
  return (
    <div >
      <Card className='div-words text-center' shadow={false} >
      <Typography color="blue-gray" variant="h2" >
      ¡Hola, otra vez!
      </Typography>
      <Typography color="blue-gray" variant="h5" >
      Para seguir, inicia sesión.
      </Typography>
      <img src={loginImage} alt="login" />

      </Card>

    </div>
  )
}

export default RegisterWords
