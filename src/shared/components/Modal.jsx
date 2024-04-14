import { cloneElement } from 'react'
import { createPortal } from 'react-dom'
import { Button } from '@material-tailwind/react'
import useModalStore from '../../stores/modalStore'
import useOutsideClick from '../hooks/useOutsideClick'

const Overlay = ({ children }) => {
  return (
    <div
    className='absolute inset-0 w-full h-full pointer-events-auto z-[9995] bg-black bg-opacity-60 backdrop-blur-sm'
      style={{ opacity: 1 }}
      >
      {children}
    </div>
  )
}

export const OpenModal = ({ opens: name, children }) => {
  const openModal = useModalStore(state => state.open)
  return cloneElement(children, { onClick: () => openModal(name) })
}

const Modal = ({ children, name }) => {
  const openName = useModalStore(state => state.openName)
  const closeModal = useModalStore(state => state.close)
  const closableRef = useOutsideClick(closeModal, true)
  if (openName !== name) return null
  return createPortal(
    <Overlay>
      <div
        ref={closableRef}
        className='flex flex-col fixed z-[9999] pointer-events-auto bg-white box-border rounded-md shadow-2xl shadow-blue-gray-900/10 p-2'
        style={{ transform: 'translate(-50%, -50%)', top: '50%', left: '50%' }}
        >
        <Button variant='text' onClick={closeModal} className='flex justify-center items-center self-end rounded-full h-10 w-10 p-3'>
          x
        </Button>
        <div>{children}</div>
      </div>
    </Overlay>,
    document.getElementById('modal')
  )
}

export default Modal
