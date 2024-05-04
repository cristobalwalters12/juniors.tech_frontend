import { toast } from 'react-toastify'

const ERROR_CODES = {
  ERR_BAD_REQUEST: 'Recurso no encontrado',
  ERR_NETWORK: 'Error de conexión'
}
const showErrorToast = (error, customMessage) => {
  let toastMessage = ''
  if (error.response && error.response.status >= 400 && error.response.status < 500) {
    toastMessage = error.response.data.message
  } else {
    toastMessage = ERROR_CODES[error.code] || customMessage || error?.response.data.message
  }
  toast.error(toastMessage)
}

export { showErrorToast }
