import LoginForm from '../features/login/LoginForm'
import LoginWords from '../features/login/LoginWords'
import NavbarRegisterLogin from '../shared/components/navbarRegisterLogin'
const Login = () => {
  return (
      <>
        <NavbarRegisterLogin />
        <div className="flex flex-col md:flex-row h-screen items-center">
          <div className="flex flex-1 justify-center items-center">
            <LoginWords/>
          </div>
          <div className="flex flex-1 justify-center items-center">
            <LoginForm/>
          </div>
        </div>
      </>
  )
}
export default Login
