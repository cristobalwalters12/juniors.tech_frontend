import { useNavigate } from 'react-router-dom'
import { Button } from '@material-tailwind/react'

function ReportManagementSelector () {
  const navigate = useNavigate()

  const handleSelectPublicaciones = () => {
    navigate('/admin-panel/reports-management/posts-reports')
  }

  const handleSelectComentarios = () => {
    navigate('/admin-panel/reports-management/comments-reports')
  }

  const handleSelectUsuarios = () => {
    navigate('/admin-panel/reports-management/users-reports')
  }

  return (
    <div className="flex flex-col items-center space-y-4 gap-4">
      <Button
        className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-blue-gray-600 text-xl"
        onClick={handleSelectPublicaciones}
      >
        Gestionar Reportes de Publicaciones
      </Button>
      <Button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-gray-600 text-lg"
        onClick={handleSelectComentarios}
      >
        Gestionar Reportes de Comentarios
      </Button>
      <Button
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-blue-gray-600 text-lg"
        onClick={handleSelectUsuarios}
      >
        Gestionar Reportes de Usuarios
      </Button>
    </div>
  )
}

export default ReportManagementSelector
