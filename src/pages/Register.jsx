import RegisterFormEmail from '../features/registerEmail/RegisterFormEmail'
import RegisterWords from '../features/register/RegisterWords'
import { useDocumentTitle } from '../shared/hooks/useDocumentTitle'

const Register = () => {
  useDocumentTitle('Regístrate')
  return (
    <>
    <div className="flex flex-col md:flex-row h-screen items-center">
      <div className="flex flex-1 justify-center items-center">
        <RegisterWords/>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <div className='w-11/12 sm:w-8/12'>
          <RegisterFormEmail/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Register
