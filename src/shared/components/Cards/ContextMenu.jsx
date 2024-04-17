import { EllipsisVerticalIcon, FlagIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import { Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react'
import { useAuthStore } from '../../../stores/authStore'
import { ROLES } from '../../../config/constants/roles'
import RequireAuthOnClick from '../Auth/RequireAuthOnClick'

const ContextMenu = ({
  ownerId,
  onEdit: handleEdit,
  onDelete: handleDelete,
  onReport: handleReport
}) => {
  const userId = useAuthStore(state => state.id)
  const roles = useAuthStore(state => state.roles)
  const isCurrUserOwner = ownerId === userId
  const isCurrUserAdminOrMod = roles.some(role => role === ROLES.ADMIN || role === ROLES.MOD)
  const hasSpecialPermissions = isCurrUserOwner || isCurrUserAdminOrMod

  return (
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
              <MenuItem className='p-3 flex items-center gap-2' onClick={handleDelete}>
                <TrashIcon className="h-4 w-4" />
                Eliminar
              </MenuItem>
            }
              <MenuItem>
                <RequireAuthOnClick onClickAuthenticated={handleReport} className='p-3 flex items-center gap-2'>
                  <FlagIcon className="h-4 w-4" />
                  Reportar
                </RequireAuthOnClick>
              </MenuItem>
            </MenuList>
          </Menu>
  )
}

export default ContextMenu
