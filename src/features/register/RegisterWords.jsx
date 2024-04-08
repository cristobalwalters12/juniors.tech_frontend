import { Typography, Card } from '@material-tailwind/react'
import './css/registerForm.css'
import registerImage from '../../assets/images/register.png'
const RegisterWords = () => {
  return (
    <div >
      <Card className='div-words' shadow={false}>
      <Typography color="blue-gray" variant="h2" >
        Únete a la mayor red de desarrolladores junior de LATAM
      </Typography>
      <img src= {registerImage} alt="" />
      </Card>

    </div>
  )
}

export default RegisterWords
