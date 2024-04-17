import { toast } from 'react-toastify'

const ERROR_CODES = {
  ERR_BAD_REQUEST: 'Recurso no encontrado',
  ERR_NETWORK: 'Error de conexión'
}
const showErrorToast = ({ code, message }, customMessage) => {
  const toastMessage = ERROR_CODES[code] || customMessage || message
  toast.error(toastMessage)
}

export { showErrorToast }
