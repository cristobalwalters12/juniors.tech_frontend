import RegisterFormEmail from '../features/registerEmail/RegisterFormEmail'
import RegisterWords from '../features/register/RegisterWords'

const RegisterEmail = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen items-center" >
      <div className="flex flex-1 justify-center items-center">
        <RegisterWords/>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <RegisterFormEmail/>
      </div>
    </div>
  )
}

export default RegisterEmail
