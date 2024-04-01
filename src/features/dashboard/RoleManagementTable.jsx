import React from 'react'
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
import mockUsers from '../../../__mocks__/store/mockUsers'

const TABLE_HEAD = ['Name', 'Acciones']

export function RoleManagementTable () {
  const [openDialogs, setOpenDialogs] = React.useState(mockUsers.map(() => false)) // Usa tus datos de usuario mock
  const [confirmIndex, setConfirmIndex] = React.useState(null)
  const [tableRows, setTableRows] = React.useState(mockUsers.map((user) => ({ name: user.name }))) // Usa tus datos de usuario mock
  const [openAddDialog, setOpenAddDialog] = React.useState(false)
  const [newModeratorName, setNewModeratorName] = React.useState('')

  const handleOpenDialog = (index) => {
    setOpenDialogs((prev) => prev.map((_, i) => (i === index)))
    setConfirmIndex(index)
  }

  const handleCloseDialog = () => {
    setOpenDialogs((prev) => prev.map(() => false))
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
    setNewModeratorName('')
  }

  const handleAddModerator = () => {
    console.log('Agregando moderador:', newModeratorName)
    setTableRows([...tableRows, { name: newModeratorName }])
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
              {tableRows.map(({ name }, index) => {
                const isLast = index === tableRows.length - 1
                const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50'

                return (
                  <React.Fragment key={name}>
                    <tr>
                      <td className={classes}>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {name}
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
                          Quitar rol de moderador
                        </Typography>
                      </td>
                    </tr>
                    <Dialog open={openDialogs[index]} handler={handleCloseDialog}>
                      <DialogHeader>
                        <Typography variant="h5" color="blue-gray">
                          Quitar el rol de moderador a {name}
                        </Typography>
                      </DialogHeader>
                      <DialogBody divider className="grid place-items-center gap-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-16 w-16 text-red-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                            clipRule="evenodd" />
                        </svg>
                        <Typography className="text-center font-normal" variant='h3' color='blue-gray'>
                          ¿Estás seguro?
                        </Typography>
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
        <Button variant='outline' color='white' onClick={handleOpenAddDialog}>Agregar moderador</Button>
        <Dialog open={openAddDialog} size="xs" handler={handleCloseAddDialog}>
          <div className="flex items-center justify-between">
            <DialogHeader className="flex flex-col items-start">
              <Typography className="mb-1" variant="h4">
                Agregar moderador
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
                Nombre del moderador
              </Typography>
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
            <Button variant="gradient" color="gray" onClick={handleAddModerator}>
              Agregar moderador
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </div>
  )
}
