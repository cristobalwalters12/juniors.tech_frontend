import {
  Card,
  Typography,
  Input,
  Button,
  CardBody,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter
} from '@material-tailwind/react'
import { useAuthStore } from '../../stores/authStore'
import ProfileAvatar from '../../shared/components/ProfileAvatar'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useUserDesactivateAccount } from './useUserDesactivateAccount'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { showErrorToast } from '../../shared/utils/showErrorToast'
import { useDocumentTitle } from '../../shared/hooks/useDocumentTitle'

const DesactivateAccount = () => {
  useDocumentTitle('Desactivar cuenta')
  const user = useAuthStore(state => state.user)
  const idUser = useAuthStore(state => state.id)
  const { logout } = useAuthStore()
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)
  const { desactivate } = useUserDesactivateAccount()
  const navigate = useNavigate()

  const { register, handleSubmit } = useForm()
  const handleConfirm = () => {
    handleSubmit(onSubmit)()
    handleOpen()
  }

  const onSubmit = data => {
    const user = {
      usernameId: idUser,
      password: data.password
    }
    desactivate(user, {
      onSuccess: () => {
        toast.success('Inicio de sesión correcto')
        navigate('/register')
        logout()
      },
      onError: (error) => {
        showErrorToast(error)
      }
    })
  }

  return (
    <Card className="mt-6">
      <div className='flex mt-6 ml-6 flex-col'>
            <Typography color='black' className='mt-3 text-xl'>
                {user}
            </Typography>
        </div>
        <div className='flex ml-6  flex-col' >
            <Typography color='black' variant='h3' className='mt-6'>
                Imagen de Perfil
            </Typography>
            <ProfileAvatar alt="avatar" size='xxl' className='mt-6' />
        </div>
      <CardBody>
        <Typography color='black' variant='h3'>
          Desactivar cuenta
        </Typography>
        <Typography color='black' className='mt-3'>
          Para desactivar tu cuenta, escribe tu contraseña y presiona el botón &quot;Desactivar cuenta&quot;.
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='w-full sm:w-6/12'>
        <Input type="password" label="Contraseña" {...register('password', { required: true })} />
        </div>
        <div className='mt-6'>
        <Button type="button" onClick={handleOpen}>
          Desactivar cuenta
        </Button>
        </div>
        </form>
      </CardBody>
      <div>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Desactivar Cuenta</DialogHeader>
        <DialogBody>
          ¿Estas seguro que quieres desactivar tu cuenta?
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancelar</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleConfirm}>
            <span>Confirmar</span>
          </Button>
        </DialogFooter>
      </Dialog>
      </div>
    </Card>
  )
}
export default DesactivateAccount
