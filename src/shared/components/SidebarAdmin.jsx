import React from 'react'
import {
  List, ListItem, Card, Typography, Accordion,
  AccordionHeader,
  AccordionBody
} from '@material-tailwind/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export function ListDefault () {
  const [open, setOpen] = React.useState({
    junior: 0,
    dev: 0,
    instructor: 0
  })

  const handleOpen = (key, value) => {
    setOpen(prevState => ({
      ...prevState,
      [key]: prevState[key] === value ? 0 : value
    }))
  }

  const isOpen = (key, value) => open[key] === value

  return (
    <Card className="w-96 h-screen overflow-y-auto border-none">
      <List>
        <Typography variant="h4" color="blue-gray">
          Panel de Administrador
        </Typography>
        <ListItem>Gestión de roles</ListItem>
        <ListItem>Gestión de reportes</ListItem>
        <ListItem>Gestión de usuarios</ListItem>
      </List>
      <List>
        <ListItem className="p-0">
          <Typography variant="h4" color="blue-gray">
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
      <Accordion
        open={isOpen('junior', 1)}
        icon={
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`mx-auto h-4 w-4 transition-transform ${isOpen('junior', 1) ? 'rotate-180' : ''}`}
          />
        }
      >
        <ListItem className="p-0" selected={isOpen('junior', 1)}>
          <AccordionHeader onClick={() => handleOpen('junior', 1)} className="border-b-0 p-3">
            <Typography variant="h4" color="blue-gray">
              Juniors.tech
            </Typography>
          </AccordionHeader>
        </ListItem>
        <AccordionBody className="py-1">
          <List className="p-0">
            <ListItem>
              Acerca del proyecto
            </ListItem>
            <ListItem>
              Políticas de privacidad
            </ListItem>
            <ListItem>
              Términos de uso
            </ListItem>
          </List>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={isOpen('dev', 2)}
        icon={
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`mx-auto h-4 w-4 transition-transform ${isOpen('dev', 2) ? 'rotate-180' : ''}`}
          />
        }
      >
        <ListItem className="p-0" selected={isOpen('dev', 2)}>
          <AccordionHeader onClick={() => handleOpen('dev', 2)} className="border-b-0 p-3">
            <Typography variant="h4" color="blue-gray">
              Desarrolladores
            </Typography>
          </AccordionHeader>
        </ListItem>
        <AccordionBody className="py-1">
          <List className="p-0">
            <ListItem>
              Ayxa Chaverra
            </ListItem>
            <ListItem>
              Cristóbal Walters
            </ListItem>
            <ListItem>
              Nicolás Contreras
            </ListItem>
            <ListItem>
              Jonathan Araos
            </ListItem>
          </List>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={isOpen('Instructor', 3)}
        icon={
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`mx-auto h-4 w-4 transition-transform ${isOpen('Instructor', 3) ? 'rotate-180' : ''}`}
          />
        }
      >
        <ListItem className="p-0" selected={isOpen('Instructor', 3)}>
          <AccordionHeader onClick={() => handleOpen('Instructor', 3)} className="border-b-0 p-3">
            <Typography variant="h4" color="blue-gray">
              Instructores
            </Typography>
          </AccordionHeader>
        </ListItem>
        <AccordionBody className="py-1">
          <List className="p-0">
            <ListItem>
              Emiliano Rotta
            </ListItem>
            <ListItem>
              Fabián Pino
            </ListItem>
            <ListItem>
              Raúl Farias
            </ListItem>
            <ListItem>
              Loreto Bustos
            </ListItem>
          </List>
        </AccordionBody>
      </Accordion>
    </Card>
  )
}
