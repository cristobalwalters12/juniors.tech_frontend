import { toast } from 'react-toastify'

const ERROR_CODES = {
  ERR_BAD_REQUEST: 'Recurso no encontrado',
  ERR_NETWORK: 'Error de conexión'
}
const showErrorToast = ({ code, response: { status, data: { message } } }, customMessage) => {
  let toastMessage = ''
  if (status >= 400 && status < 500) {
    toastMessage = message
  } else {
    toastMessage = ERROR_CODES[code] || customMessage || message
  }
  toast.error(toastMessage)
}

export { showErrorToast }
