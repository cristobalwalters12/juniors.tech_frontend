import { useState } from 'react'
import {
  List,
  ListItem,
  Card,
  Typography,
  Accordion,
  AccordionHeader,
  AccordionBody
} from '@material-tailwind/react'
import {
  ChevronDownIcon,
  CodeBracketIcon,
  AcademicCapIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/solid'
import Logo from '../Logo'
import SidebarListItem from './SidebarListItem'
import { DEVELOPERS, INSTRUCTORS } from '../../../config/constants/aboutUs'
import SidebarListHeader from './SidebarListHeader'
import { useNavigate, useSearchParams } from 'react-router-dom'
import SidebarPostFilteringOptions from './SidebarPostFilteringOptions'

export default function SidebarHome ({ currPath }) {
  const [, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const [open, setOpen] = useState({
    junior: false,
    dev: false,
    instructor: false
  })

  const handleSortingOptionChange = (sort, order) => () => {
    if (!currPath.startsWith('/home')) return navigate(`/home?sort=${sort}&order=${order}`)

    setSearchParams((prevSearchParams) => {
      const newSearchParams = new URLSearchParams(prevSearchParams)
      newSearchParams.set('sort', sort)
      newSearchParams.set('order', order)
      return newSearchParams
    })
  }

  const toggleOpen = (key) => () => {
    setOpen(prevState => ({
      ...prevState,
      [key]: !prevState[key]
    }))
  }
  const isOpen = (key) => open[key]

  return (
    <Card shadow={false} className='bg-accent-dark text-grey-dark h-full overflow-x-clip overflow-y-auto'>
      <List className='text-inherit pb-0'>
        <Typography variant="h2" className='flex gap-1 items-center text-grey-light mb-3 text-md'>
          <ArrowTrendingUpIcon width="1.7em" strokeWidth={20} fill="#508DDD" />
          Ver publicaciones
        </Typography>
        <SidebarListItem onClick={handleSortingOptionChange('votes', 'desc')}>Más votadas</SidebarListItem>
        <SidebarListItem onClick={handleSortingOptionChange('date', 'desc')}>Más recientes</SidebarListItem>
      </List>
      <hr className='border-primary-dark my-2'/>
      <SidebarPostFilteringOptions />
      <hr className='border-primary-dark my-2'/>
      <Accordion
        open={isOpen('junior')}
        icon={
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`mx-auto h-4 w-4 text-grey-dark transition-transform ${isOpen('junior') ? 'rotate-180' : ''}`}
          />
        }
      >
        <ListItem className="p-0" selected={isOpen('junior')}>
          <AccordionHeader id='' onClick={toggleOpen('junior')} className="border-b-0 p-3 transition-all bg-accent-dark  hover:bg-accent-dhover focus:bg-accent-dhover focus:text-accent-light  hover:text-accent-light active:text-accent-light focus:opacity-80 hover:opacity-95 active:opacity-80 tracking-wide shadow-md">
            <Logo className="text-grey-light text-[1rem]"/>
          </AccordionHeader>
        </ListItem>
        <AccordionBody className="py-1">
          <List className="p-0 text-grey-dark">
            <SidebarListItem>Acerca del proyecto</SidebarListItem>
            <SidebarListItem>Políticas de privacidad</SidebarListItem>
            <SidebarListItem>Términos de uso</SidebarListItem>
          </List>
        </AccordionBody>
      </Accordion>
      <hr className='border-primary-dark my-2'/>
      <Accordion
        open={isOpen('dev')}
        icon={
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`mx-auto h-4 w-4 text-grey-dark transition-transform ${isOpen('dev') ? 'rotate-180' : ''}`}
          />
        }
      >
          <SidebarListHeader
            selected={isOpen('dev')}
            onClick={toggleOpen('dev')}
            icon={<CodeBracketIcon width="1.25em" strokeWidth={1} stroke="#508DDD"/>}
            label="Desarrolladores"
          />
        <AccordionBody className="py-1">
          <List className="p-0 text-grey-dark">
            {DEVELOPERS.map(({ name, href }) => (
              <a key={name} href={href} target='_blank' rel="noreferrer">
                <SidebarListItem>{name}</SidebarListItem>
              </a>
            ))}
          </List>
        </AccordionBody>
      </Accordion>
      <hr className='border-primary-dark my-2'/>
      <Accordion
        open={isOpen('instructor')}
        icon={
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`mx-auto h-4 w-4 text-grey-dark transition-transform ${isOpen('instructor') ? 'rotate-180' : ''}`}
          />
        }
      >
        <SidebarListHeader
            selected={isOpen('instructor')}
            onClick={toggleOpen('instructor')}
            icon={<AcademicCapIcon width="1.25em" strokeWidth={2} fill="#508DDD" />}
            label="Instructores"
          />
        <AccordionBody className="py-1">
          <List className="p-0 text-grey-dark">
            {INSTRUCTORS.map(({ name, href }) => (
              <a key={name} href={href} target='_blank' rel="noreferrer">
                <SidebarListItem>{name}</SidebarListItem>
              </a>
            ))}
          </List>
        </AccordionBody>
      </Accordion>
    </Card>
  )
}
