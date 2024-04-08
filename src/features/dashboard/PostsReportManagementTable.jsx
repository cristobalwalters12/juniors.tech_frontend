import React, { useState } from 'react'
import {
  Card,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter
} from '@material-tailwind/react'

const TABLE_HEAD = ['Publicación', 'Autor de la publicación', 'Autor del reporte', 'Motivo del reporte', 'Acciones']

export function PostReportTable () {
  const [openDialogs, setOpenDialogs] = useState([])
  const [confirmIndex, setConfirmIndex] = useState(null)
  const [tableRows, setTableRows] = useState([])

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
              {tableRows.map(({ publication, authorPublication, authorReport, reason }, index) => {
                const isLast = index === tableRows.length - 1
                const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50'

                return (
                  <React.Fragment key={`${publication}-${authorReport}`}>
                    <tr>
                      <td className={classes}>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          <a href={publication.link}>{publication.title}</a>
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {authorPublication}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {authorReport}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {reason}
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
                          Eliminar publicación
                        </Typography>
                        <Typography
                          onClick={() => handleOpenDialog(index)}
                          as="a"
                          href="#"
                          variant="small"
                          color="blue-gray"
                          className="font-medium hover:bg-blue-200 p-2 rounded-md"
                        >
                          Silenciar usuario
                        </Typography>
                        <Typography
                          onClick={() => handleOpenDialog(index)}
                          as="a"
                          href="#"
                          variant="small"
                          color="blue-gray"
                          className="font-medium hover:bg-blue-200 p-2 rounded-md"
                        >
                          Desestimar reporte
                        </Typography>
                      </td>
                    </tr>
                    <Dialog open={openDialogs[index]} handler={handleCloseDialog}>
                      <DialogHeader>
                        <Typography variant="h5" color="blue-gray">
                          Confirmar acción
                        </Typography>
                      </DialogHeader>
                      <DialogBody divider className="grid place-items-center gap-4">
                        <Typography className="text-center font-normal" variant='h3' color='blue-gray'>
                          ¿Estás seguro de realizar esta acción?
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
    </div>
  )
}
