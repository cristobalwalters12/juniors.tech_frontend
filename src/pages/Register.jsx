import RegisterForm from '../features/register/registerForm'
import RegisterWords from '../features/register/RegisterWords'

const Register = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 bg-white justify-center items-center h-screen">
      <div className="flex justify-center items-center">
        <RegisterWords/>
      </div>
      <div className="flex justify-center items-center">
        <RegisterForm/>
      </div>
    </div>
  )
}

export default Register
