import RegisterForm from '../features/register/registerForm'
import RegisterWords from '../features/register/RegisterWords'
import NavbarRegisterLogin from '../shared/components/navbarRegisterLogin'

const Register = () => {
  return (
    <>
    <NavbarRegisterLogin />
    <div className="flex flex-col md:flex-row h-screen items-center">
      <div className="flex flex-1 justify-center items-center">
        <RegisterWords/>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <RegisterForm/>
      </div>
    </div>
    </>
  )
}

export default Register
