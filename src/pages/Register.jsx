import RegisterForm from '../features/register/registerForm'
import RegisterWords from '../features/register/RegisterWords'
const Register = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white justify-center items-center h-screen">
      <div className="w-1/2 flex justify-center items-center">
        <RegisterWords/>
      </div>
      <div className="w-1/2 flex ">
        <RegisterForm/>
      </div>
    </div>
  )
}

export default Register
