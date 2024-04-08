import { Link, useLocation } from 'react-router-dom'
import { List, ListItem, Card, Typography } from '@material-tailwind/react'

export function ListDefault () {
  const location = useLocation()

  return (
    <Card className="w-60 h-screen overflow-y-auto rounded-none">
      <List>
        <Typography variant="h5" color="blue-gray">
          Panel de Administrador
        </Typography>
        <Link to='/admin-panel/role-management'>
          <ListItem className={location.pathname === '/admin-panel/role-management' ? 'bg-blue-200' : ''}>
            Gestión de roles
          </ListItem>
        </Link>
        <Link to='/admin-panel/reports-management'>
          <ListItem className={location.pathname === '/admin-panel/reports-management' ? 'bg-blue-200' : ''}>
            Gestión de reportes
          </ListItem>
        </Link>
        <Link to='/admin-panel/category-management'>
          <ListItem className={location.pathname === '/admin-panel/category-management' ? 'bg-blue-200' : ''}>
            Gestión de categorias
          </ListItem>
        </Link>
      </List>
      <List>
        <ListItem className="p-0">
          <Typography variant="h6" color="blue-gray">
            Reportes de
          </Typography>
        </ListItem>
        <ListItem className="p-0">
          <Link to='/admin-panel/reports-management/posts-reports'>
            <Typography color="blue-gray" className={location.pathname === '/admin-panel/reports-management/posts-reports' ? 'bg-blue-200 font-medium' : 'font-medium'}>
              Publicaciones
            </Typography>
          </Link>
        </ListItem>
        <ListItem className="p-0">
          <Link to='/admin-panel/reports-management/comments-reports'>
            <Typography color="blue-gray" className={location.pathname === '/admin-panel/reports-management/comments-reports' ? 'bg-blue-200 font-medium' : 'font-medium'}>
              Comentarios
            </Typography>
          </Link>
        </ListItem>
        <ListItem className="p-0">
          <Link to='/admin-panel/reports-management/users-reports'>
            <Typography color="blue-gray" className={location.pathname === '/admin-panel/reports-management/users-reports' ? 'bg-blue-200 font-medium' : 'font-medium'}>
              Usuarios
            </Typography>
          </Link>
        </ListItem>
      </List>
    </Card>
  )
}
