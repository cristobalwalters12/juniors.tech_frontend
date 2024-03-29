import RegisterForm from '../features/register/registerForm'
import RegisterFormEmail from '../features/registerEmail/RegisterFormEmail'
import RegisterWords from '../features/register/RegisterWords'
import NavbarRegisterLogin from '../shared/components/navbarRegisterLogin'
import { useState } from 'react'

const Register = () => {
  const [showEmailForm, setShowEmailForm] = useState(false)

  return (
    <>
    <NavbarRegisterLogin />
    <div className="flex flex-col md:flex-row h-screen items-center">
      <div className="flex flex-1 justify-center items-center">
        <RegisterWords/>
      </div>
      <div className="flex flex-1 justify-center items-center">
        {showEmailForm ? <RegisterFormEmail/> : <RegisterForm onEmailClick={() => setShowEmailForm(true)}/>}
      </div>
    </div>
    </>
  )
}

export default Register
