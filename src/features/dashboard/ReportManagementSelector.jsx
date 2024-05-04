import { useNavigate } from 'react-router-dom'
import { Button } from '@material-tailwind/react'
import { useDocumentTitle } from '../../shared/hooks/useDocumentTitle'

function ReportManagementSelector () {
  useDocumentTitle('Gestión de reportes')
  const navigate = useNavigate()

  const handleSelectPublicaciones = () => {
    navigate('/admin/reports/posts')
  }

  const handleSelectComentarios = () => {
    navigate('/admin/reports/comments')
  }

  const handleSelectUsuarios = () => {
    navigate('/admin/reports/users')
  }

  return (
    <div className="flex flex-col items-center space-y-4 gap-4">
      <Button
        className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-gray-600 text-lg normal-case"
        onClick={handleSelectPublicaciones}
      >
        Gestionar reportes de publicaciones
      </Button>
      <Button
        className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-gray-600 text-lg normal-case"
        onClick={handleSelectComentarios}
      >
        Gestionar reportes de comentarios
      </Button>
      <Button
        className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-gray-600 text-lg normal-case"
        onClick={handleSelectUsuarios}
      >
        Gestionar reportes de usuarios
      </Button>
    </div>
  )
}

export default ReportManagementSelector
