import { useState } from 'react'
import { EllipsisVerticalIcon, FlagIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react'
import { useAuthStore } from '../../../stores/authStore'
import { ROLES } from '../../../config/constants/roles'
import RequireAuthOnClick from '../Auth/RequireAuthOnClick'

const ContextMenu = ({
  ownerId,
  onEdit: handleEdit,
  onDelete,
  onReport: handleReport
}) => {
  const [openDialog, setOpenDialog] = useState(false)
  const toggleOpenDialog = () => setOpenDialog(prev => !prev)
  const userId = useAuthStore(state => state.id)
  const roles = useAuthStore(state => state.roles)
  const isCurrUserOwner = ownerId === userId
  const isCurrUserAdminOrMod = roles.some(role => role === ROLES.ADMIN || role === ROLES.MOD)
  const hasSpecialPermissions = isCurrUserOwner || isCurrUserAdminOrMod

  const handleDelete = () => {
    onDelete()
    toggleOpenDialog()
  }
  return (<>

          <Menu>
            <MenuHandler>
              <Button variant="text" className="rounded-full p-1.5">
                <EllipsisVerticalIcon className="h-4 w-4" />
              </Button>
            </MenuHandler>
            <MenuList className='p-0'>
            {isCurrUserOwner &&
              <MenuItem className='p-3 flex items-center gap-2' onClick={handleEdit}>
                <PencilIcon className="h-4 w-4" />
                Editar
              </MenuItem>
            }
            {hasSpecialPermissions &&
              <MenuItem className='p-3 flex items-center gap-2' onClick={toggleOpenDialog}>
                <TrashIcon className="h-4 w-4" />
                Eliminar
              </MenuItem>
            }
              <MenuItem className='p-0'>
                <RequireAuthOnClick onClickAuthenticated={handleReport} className='p-3 flex items-center gap-2'>
                  <FlagIcon className="h-4 w-4" />
                  Reportar
                </RequireAuthOnClick>
              </MenuItem>
            </MenuList>
          </Menu>
          <Dialog open={openDialog} handler={toggleOpenDialog} size='xs'>
          <DialogHeader>Eliminar</DialogHeader>
          <DialogBody>¿De verdad quieres eliminar este recurso?</DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="gray"
              onClick={toggleOpenDialog}
              className="mr-1"
            >
              <span>Cancelar</span>
            </Button>
            <Button variant="gradient" color="red" onClick={handleDelete}>
              <span>Confirmar</span>
            </Button>
          </DialogFooter>
        </Dialog>
        </>
  )
}

export default ContextMenu
