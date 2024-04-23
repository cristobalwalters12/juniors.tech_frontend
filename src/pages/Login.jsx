import LoginForm from '../features/login/LoginForm'
import LoginWords from '../features/login/LoginWords'
const Login = () => {
  return (
      <>
        <div className="flex flex-col md:flex-row h-screen items-center">
          <div className="flex flex-1 justify-center items-center">
            <LoginWords/>
          </div>
          <div className="flex flex-1 justify-center items-center">
            <div className="w-11/12 sm:w-7/12">
            <LoginForm/>

            </div>

          </div>
        </div>
      </>
  )
}
export default Login
