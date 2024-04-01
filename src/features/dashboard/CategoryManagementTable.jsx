import React, { useState } from 'react'
import {
  Card,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input
} from '@material-tailwind/react'

const TABLE_HEAD = ['Categoría', 'Acciones']

export function CategoryManagementTable () {
  const [openDialogs, setOpenDialogs] = useState([])
  const [confirmIndex, setConfirmIndex] = useState(null)
  const [tableRows, setTableRows] = useState([])
  const [openAddDialog, setOpenAddDialog] = useState(false)
  const [newCategoryName, setNewCategoryName] = useState('')

  const handleOpenDialog = (index) => {
    setOpenDialogs(prev => prev.map((_, i) => i === index))
    setConfirmIndex(index)
  }

  const handleCloseDialog = () => {
    setOpenDialogs(prev => prev.map(() => false))
    setConfirmIndex(null)
  }

  const handleConfirm = () => {
    const updatedRows = [...tableRows]
    updatedRows.splice(confirmIndex, 1)
    setTableRows(updatedRows)
    handleCloseDialog()
  }

  const handleOpenAddDialog = () => {
    setOpenAddDialog(true)
  }

  const handleCloseAddDialog = () => {
    setOpenAddDialog(false)
    setNewCategoryName('')
  }

  const handleAddCategory = () => {
    console.log('Agregando categoría:', newCategoryName)
    setTableRows([...tableRows, { category: newCategoryName }])
    handleCloseAddDialog()
  }

  return (
    <div>
      <Card className="w-full overflow-hidden md:w-3/4">
        <div className="overflow-x-auto">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
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
              {tableRows.map(({ category }, index) => {
                const isLast = index === tableRows.length - 1
                const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50'

                return (
                  <React.Fragment key={category}>
                    <tr>
                      <td className={classes}>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {category}
                        </Typography>
                      </td>
                      <td className={`${classes} bg-blue-gray-50/50`}>
                        <Typography
                          onClick={() => handleOpenDialog(index)}
                          as="a"
                          href="#"
                          variant="small"
                          color="blue-gray"
                          className="font-medium hover:bg-blue-200 p-2 rounded-md"
                        >
                          Editar
                        </Typography>
                        <Typography
                          onClick={() => handleOpenDialog(index)}
                          as="a"
                          href="#"
                          variant="small"
                          color="blue-gray"
                          className="font-medium hover:bg-blue-200 p-2 rounded-md"
                        >
                          Eliminar
                        </Typography>
                      </td>
                    </tr>
                    <Dialog open={openDialogs[index]} handler={handleCloseDialog}>
                      <DialogHeader>
                        <Typography variant="h5" color="blue-gray">
                          ¿Estás seguro que deseas eliminar la categoría {category}?
                        </Typography>
                      </DialogHeader>
                      <DialogBody divider className="grid place-items-center gap-4">
                        {/* Aquí puedes mostrar algún mensaje de confirmación */}
                      </DialogBody>
                      <DialogFooter className="space-x-2">
                        <Button variant="text" color="blue-gray" onClick={handleCloseDialog}>
                          Cancelar
                        </Button>
                        <Button variant="gradient" onClick={handleConfirm}>
                          Confirmar
                        </Button>
                      </DialogFooter>
                    </Dialog>
                  </React.Fragment>
                )
              })}
            </tbody>
          </table>
        </div>
      </Card>
      <div className="mt-7 flex justify-start">
        <Button variant="outline" color="white" onClick={handleOpenAddDialog}>
          Agregar categoría
        </Button>
        <Dialog open={openAddDialog} size="xs" handler={handleCloseAddDialog}>
          <div className="flex items-center justify-between">
            <DialogHeader className="flex flex-col items-start">
              <Typography className="mb-1" variant="h4">
                Agregar categoría
              </Typography>
            </DialogHeader>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-3 h-5 w-5 cursor-pointer"
              onClick={handleCloseAddDialog}
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <DialogBody>
            <div className="grid gap-6">
              <Typography className="-mb-1" color="blue-gray" variant="h6">
                Nombre de la categoría
              </Typography>
              <Input
                label="Nombre"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
              />
            </div>
          </DialogBody>
          <DialogFooter className="space-x-2">
            <Button variant="text" color="gray" onClick={handleCloseAddDialog}>
              Cancelar
            </Button>
            <Button variant="gradient" color="gray" onClick={handleAddCategory}>
              Agregar categoría
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </div>
  )
}
