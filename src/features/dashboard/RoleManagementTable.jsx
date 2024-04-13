import { useState, useEffect } from 'react'
import {
  Card,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogFooter,
  DialogBody,
  Input
} from '@material-tailwind/react'
import { getMods, addModerator, removeModerator } from '../../services/mods'
import { useAuthStore } from '../../stores/authStore'

const TABLE_HEAD = ['Nombre', 'Acciones']

export function RoleManagementTable () {
  const [openDialogIndex, setOpenDialogIndex] = useState(null)
  const [tableRows, setTableRows] = useState([])
  const [newModeratorName, setNewModeratorName] = useState('')
  const [openAddDialog, setOpenAddDialog] = useState(false)

  useEffect(() => {
    fetchModerators()
  }, [])

  const roles = useAuthStore((state) => {
    return state.roles
  })
  const isAdmin = roles.some(rol => rol === 'administrador')

  const fetchModerators = async () => {
    try {
      const response = await getMods()
      const moderators = response.data
      setTableRows(moderators)
    } catch (error) {
      console.error('Error al obtener los moderadores:', error)
    }
  }

  const handleOpenDialog = (index) => {
    setOpenDialogIndex(index)
  }

  const handleCloseDialog = () => {
    setOpenDialogIndex(null)
  }

  const handleConfirmDelete = async () => {
    try {
      if (isAdmin) {
        await removeModerator(tableRows[openDialogIndex].username)
        const updatedRows = [...tableRows]
        updatedRows.splice(openDialogIndex, 1)
        setTableRows(updatedRows)
        handleCloseDialog()
      } else {
        console.error('No tienes permisos para eliminar un moderador.')
      }
    } catch (error) {
      console.error('Error al eliminar el moderador:', error)
    }
  }

  const handleOpenAddDialog = () => {
    setOpenAddDialog(true)
  }

  const handleCloseAddDialog = () => {
    setOpenAddDialog(false)
    setNewModeratorName('')
  }

  const handleAddModerator = async () => {
    try {
      if (isAdmin) {
        console.log({ isAdmin })
        await addModerator(newModeratorName)
        const updatedRows = [...tableRows, { username: newModeratorName }]
        setTableRows(updatedRows)
        handleCloseAddDialog()
      } else {
        console.error('No tienes permisos para agregar un moderador.')
      }
    } catch (error) {
      console.error('Error al agregar el moderador:', error)
    }
  }

  return (
    <div>
      <Card className="w-full overflow-hidden md:w-3/4 max-h-[400px]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map(({ username }, index) => {
                return (
                  <tr key={index}>
                    <td className="p-2">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {username}
                      </Typography>
                    </td>
                    <td className="p-2">
                      <Button
                        onClick={() => handleOpenDialog(index)}
                        color="red"
                        variant='text'
                        size="sm"
                      >
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </Card>
      <div className="mt-3 flex justify-start">
        <Button variant='outlined' color='black' onClick={handleOpenAddDialog}>Agregar moderador</Button>
        <Dialog open={openAddDialog} size="sm" onClose={handleCloseAddDialog}>
          <DialogHeader>
            <Typography variant="h5">Agregar moderador</Typography>
          </DialogHeader>
          <DialogBody>
            <div className="grid gap-3">
              <Input
                label="Nombre"
                value={newModeratorName}
                onChange={(e) => setNewModeratorName(e.target.value)}
              />
            </div>
          </DialogBody>
          <DialogFooter className="space-x-2">
            <Button variant="text" color="gray" onClick={handleCloseAddDialog}>
              Cancelar
            </Button>
            <Button variant="gradient" onClick={handleAddModerator}>
              Agregar moderador
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
      <Dialog open={openDialogIndex !== null} size="sm" onClose={handleCloseDialog}>
        <DialogHeader>
          <Typography variant="h5" color="blue-gray">
            ¿Estás seguro que deseas eliminar al moderador{' '}
            {tableRows[openDialogIndex]?.username}?
          </Typography>
        </DialogHeader>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="blue-gray" onClick={handleCloseDialog}>
            Cancelar
          </Button>
          <Button variant="gradient" onClick={handleConfirmDelete}>
            Confirmar
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  )
}
