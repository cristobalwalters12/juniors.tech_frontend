import { Link } from 'react-router-dom'
import { List, ListItem, Card, Typography } from '@material-tailwind/react'

export function ListDefault () {
  return (
    <Card className="w-60 h-screen overflow-y-auto rounded-none">
      <List>
        <Typography variant="h5" color="blue-gray">
          Panel de Administrador
        </Typography>
        <Link to='/admin-panel/role-management'>
        <ListItem>Gestión de roles</ListItem>
        </Link>
        <ListItem>Gestión de reportes</ListItem>
        <ListItem>Gestión de usuarios</ListItem>
      </List>
      <List>
        <ListItem className="p-0">
          <Typography variant="h6" color="blue-gray">
            Reportes de
          </Typography>
        </ListItem>
        <ListItem className="p-0">
          <label
            htmlFor="vertical-list-react"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <Typography color="blue-gray" className="font-medium">
              Publicaciones
            </Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label
            htmlFor="vertical-list-vue"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <Typography color="blue-gray" className="font-medium">
              Comentarios
            </Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label
            htmlFor="vertical-list-svelte"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <Typography color="blue-gray" className="font-medium">
              Usuarios
            </Typography>
          </label>
        </ListItem>
      </List>
    </Card>
  )
}
