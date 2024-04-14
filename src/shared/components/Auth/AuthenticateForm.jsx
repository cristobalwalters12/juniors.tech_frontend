import { useState } from 'react'
import LoginForm from '../../../features/login/LoginForm'
import RegisterForm from '../../../features/registerEmail/RegisterFormEmail'
import useModalStore from '../../../stores/modalStore'

const AuthenticateForm = () => {
  const [translate, setTranslate] = useState(false)
  const closeModal = useModalStore(state => state.close)
  const toggleLogin = () => setTranslate((prevState) => !prevState)
  return (
    <div className="p-2 max-w-[24rem] overflow-hidden">
      <div className={`grid grid-cols-2 transition-transform ease-in-out duration-700 ${translate ? '-translate-x-1/2' : ''}`} style={{ width: '200%' }}>
        <div className="px-4" >
        <LoginForm onClose={closeModal} onSwitch={toggleLogin} />
        </div>
        <div className="px-4" >
        <RegisterForm className="inline-block" onClose={closeModal} onSwitch={toggleLogin} />
        </div>
      </div>
    </div>
  )
}

export default AuthenticateForm
