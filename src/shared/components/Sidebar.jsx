import React from 'react'
import {
  List, ListItem, Card, Typography, Accordion,
  AccordionHeader,
  AccordionBody
} from '@material-tailwind/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function Sidebar ({ handleAscendente, handleDescendente }) {
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
    <Card >
      <List>
        <Typography variant="h4" color="blue-gray">
          Ordenar por
        </Typography>
        <ListItem onClick={handleDescendente}>Más votados</ListItem>
        <ListItem onClick={handleAscendente}>Menos votados</ListItem>
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
            <a href="https://github.com/achaverrar">
              <ListItem>
                Ayxa Chaverra
              </ListItem>
            </a>
            <a href="https://github.com/cristobalwalters12">
              <ListItem>
                Cristóbal Walters
              </ListItem>
            </a>
            <a href="https://github.com/lukitas0606">
              <ListItem>
                Nicolás Contreras
              </ListItem>
            </a>
            <a href="https://github.com/jonaisenberg">
              <ListItem>
                Jonathan Araos
              </ListItem>
            </a>
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
