import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { List, Card, Typography, Accordion, AccordionBody } from '@material-tailwind/react'
import { ChevronDownIcon, Cog6ToothIcon, GlobeAmericasIcon, PencilIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import SidebarListItem from './SidebarListItem'
import SidebarListHeader from './SidebarListHeader'
import { useAuthStore } from '../../../stores/authStore'

export function SidebarAccount () {
  const location = useLocation()
  const username = useAuthStore(state => state.user)
  const [openAccountOptions, setOpenAccountOptions] = useState(false)
  const toggleAccountOptions = () => setOpenAccountOptions(prevState => !prevState)
  const showAsSelectedIn = (currPath) => currPath === location.pathname ? 'bg-primary-dark text-accent-light opacity-80' : ''

  return (
    <Card shadow={false} className='bg-accent-dark text-grey-dark h-full overflow-x-clip overflow-y-auto'>
      <List className='text-inherit pb-0'>
        <Typography variant="h2" color="blue-gray" className='flex gap-1 items-center text-grey-light mb-3 text-md'>
          <UserCircleIcon width="1em" strokeWidth={2} fill="#508DDD" className='w-5 h-5' /> Cuenta
        </Typography>
        <Link to={`/users/${username}`}>
          <SidebarListItem>
            <Typography variant="h2" className='flex gap-1 items-center text-grey-light text-md'>
              <GlobeAmericasIcon width="1em" strokeWidth={2} fill="#508DDD" className='w-5 h-5' /> Ver perfil público
            </Typography>
          </SidebarListItem>
        </Link>
        <Link to={`/users/${username}/edit`}>
          <SidebarListItem>
            <Typography variant="h2" className='flex gap-1 items-center text-grey-light text-md'>
              <PencilIcon width="1em" strokeWidth={2} fill="#508DDD" className='w-5 h-5' /> Editar perfil
            </Typography>
          </SidebarListItem>
        </Link>
        <Accordion
          open={openAccountOptions}
          icon={
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`mx-auto h-4 w-4 text-grey-dark transition-transform ${openAccountOptions ? 'rotate-180' : ''}`}
          />
        }>
          <SidebarListHeader
              selected={openAccountOptions}
              onClick={toggleAccountOptions}
              className="text-sm"
              icon={<Cog6ToothIcon width="1.25em" strokeWidth={2} fill="#508DDD" />}
              label="Configuración de cuenta"
            />
          <AccordionBody className="py-1">
            <List className="p-0 text-grey-dark">
              <Link to={`/users/${username}/change-password`}>
                <SidebarListItem className={showAsSelectedIn(`/users/${username}/change-password`)}>Cambiar contraseña</SidebarListItem>
              </Link>
              <Link to={`/users/${username}/deactivate-account`}>
                <SidebarListItem className={showAsSelectedIn(`/users/${username}/deactivate-account`)}>Desactivar cuenta</SidebarListItem>
              </Link>
            </List>
          </AccordionBody>
        </Accordion>
      </List>
    </Card>
  )
}
