import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button
} from '@material-tailwind/react'

const NestButton = ({ isSameUser }) => {
  return (
      <Menu>
        <MenuHandler>
          <Button variant='text' size='lg'>+ Más opciones</Button>
        </MenuHandler>
        <MenuList>
          {isSameUser
            ? (
            <MenuItem>Editar Perfil</MenuItem>
              )
            : (
            <MenuItem>Reportar Usuario</MenuItem>
              )}
        </MenuList>
      </Menu>
  )
}

export default NestButton
