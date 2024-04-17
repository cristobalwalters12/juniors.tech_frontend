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
import { getCategories, addCategory, removeCategory, editCategory } from '../../services/categories'

const TABLE_HEAD = ['Categoría', 'Acciones']

export function CategoryManagementTable () {
  const [openDialogIndex, setOpenDialogIndex] = useState(null)
  const [tableRows, setTableRows] = useState([])
  const [newCategoryName, setNewCategoryName] = useState('')
  const [openAddDialog, setOpenAddDialog] = useState(false)
  const [editName, setEditName] = useState('')
  const [editIndex, setEditIndex] = useState(null)

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await getCategories()
      const categories = response.data
      setTableRows(categories)
    } catch (error) {
      console.error('Error al obtener las categorías:', error)
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
      const categoryToDelete = tableRows[openDialogIndex]
      if (categoryToDelete.name === 'Otros') {
        alert('No puedes eliminar esta categoría.')
        return
      }
      await removeCategory(categoryToDelete.id)
      const updatedRows = [...tableRows]
      updatedRows.splice(openDialogIndex, 1)
      setTableRows(updatedRows)
      handleCloseDialog()
    } catch (error) {
      console.error('Error al eliminar la categoría:', error)
    }
  }

  const handleOpenAddDialog = () => {
    setOpenAddDialog(true)
  }

  const handleCloseAddDialog = () => {
    setOpenAddDialog(false)
    setNewCategoryName('')
  }

  const handleAddCategory = async () => {
    try {
      await addCategory(newCategoryName)
      const response = await getCategories()
      const updatedCategories = response.data
      setTableRows(updatedCategories)
      handleCloseAddDialog()
    } catch (error) {
      console.error('Error al agregar la categoría:', error)
    }
  }

  const handleEditCategory = async (categoryId, updatedName) => {
    try {
      await editCategory(categoryId, updatedName)
      const updatedRows = [...tableRows]
      updatedRows[editIndex].name = updatedName
      setTableRows(updatedRows)
      setEditIndex(null)
      setEditName('')
    } catch (error) {
      console.error('Error al editar la categoría:', error)
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
              {tableRows.map(({ name }, index) => {
                return (
                  <tr key={index}>
                    <td className="p-2">
                      {editIndex === index
                        ? (
                          <Input
                          type="text"
                          placeholder="Nombre"
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
                          className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        />
                          )
                        : (
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {name}
                        </Typography>
                          )}
                    </td>
                    <td className="p-2">
                      {editIndex === index
                        ? (
                        <Button
                          onClick={() => handleEditCategory(tableRows[index].id, editName)}
                          color="blue-gray"
                          buttonType="filled"
                          size="sm"
                        >
                          Guardar
                        </Button>
                          )
                        : (
                        <>
                          <Button
                            onClick={() => {
                              setEditName(name)
                              setEditIndex(index)
                            }}
                            color="blue-gray"
                            variant='text'
                            size="sm"
                          >
                            Editar
                          </Button>
                          <Button
                            onClick={() => handleOpenDialog(index)}
                            color="red"
                            variant='text'
                            size="sm"
                          >
                            Eliminar
                          </Button>
                        </>
                          )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </Card>
      <div className="mt-3 flex justify-start">
        <Button variant='outlined' color='black' onClick={handleOpenAddDialog}>Agregar categoría</Button>
        <Dialog open={openAddDialog} size="sm" handler={handleCloseAddDialog}>
          <DialogHeader>
            <Typography variant="h5">Agregar categoría</Typography>
          </DialogHeader>
          <DialogBody>
            <div className="grid gap-3">
            <Input
                type="text"
                placeholder="Nombre"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
            </div>
          </DialogBody>
          <DialogFooter className="space-x-2">
            <Button variant="text" color="gray" onClick={handleCloseAddDialog}>
              Cancelar
            </Button>
            <Button variant="gradient" onClick={handleAddCategory}>
              Agregar categoría
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
      <Dialog open={openDialogIndex !== null} size="sm" handler={handleCloseDialog}>
        <DialogHeader>
          <Typography variant="h5" color="blue-gray">
            ¿Estás seguro que deseas eliminar la categoría{' '}
            {tableRows[openDialogIndex]?.name}?
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
