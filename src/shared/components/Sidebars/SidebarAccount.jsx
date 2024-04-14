import { Link, useLocation } from 'react-router-dom'
import { List, Card, Typography, Accordion, AccordionBody } from '@material-tailwind/react'
import { ChevronDownIcon, FlagIcon, ShieldCheckIcon, TagIcon, UserGroupIcon } from '@heroicons/react/24/solid'
import SidebarListItem from './SidebarListItem'
import SidebarListHeader from './SidebarListHeader'
import { useState } from 'react'

export function SidebarAdmin () {
  const location = useLocation()
  const [openReportOptions, setOpenReportOptions] = useState(false)
  const toggleReportOptions = () => setOpenReportOptions(prevState => !prevState)
  const showAsSelectedIn = (currPath) => currPath === location.pathname ? 'bg-primary-dark text-accent-light opacity-80' : ''

  return (
    <Card shadow={false} className='bg-accent-dark text-grey-dark h-full overflow-x-clip overflow-y-auto'>
      <List className='text-inherit pb-0'>
        <Typography variant="h2" color="blue-gray" className='flex gap-1 items-center text-grey-light mb-3 text-md'>
          <ShieldCheckIcon width="1.25em" strokeWidth={1} fill="#508DDD" /> Panel de Administrador
        </Typography>
        <Link to='/admin/roles'>
          <SidebarListItem>
            <Typography variant="h2" className='flex gap-1 items-center text-grey-light text-md'>
              <UserGroupIcon width="1em" strokeWidth={2} fill="#508DDD" className='w-5 h-5' /> Gestión de roles
            </Typography>
          </SidebarListItem>
        </Link>
        <Accordion
          open={openReportOptions}
          icon={
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`mx-auto h-4 w-4 text-grey-dark transition-transform ${openReportOptions ? 'rotate-180' : ''}`}
          />
        }>
          <Link to='/admin/reports'>
            <SidebarListHeader
                selected={openReportOptions}
                onClick={toggleReportOptions}
                className="text-sm"
                icon={<FlagIcon width="1.25em" strokeWidth={2} fill="#508DDD" />}
                label="Gestión de reportes"
              />
          </Link>
          <AccordionBody className="py-1">
            <List className="p-0 text-grey-dark">
              <Link to='/admin/reports/posts'>
                <SidebarListItem className={showAsSelectedIn('/admin/reports/posts')}>Reportes de publicaciones</SidebarListItem>
              </Link>
              <Link to='/admin/reports/comments'>
                <SidebarListItem className={showAsSelectedIn('/admin/reports/comments')}>Reportes de comentarios</SidebarListItem>
              </Link>
              <Link to='/admin/reports/users'>
                <SidebarListItem className={showAsSelectedIn('/admin/reports/users')}>Reportes de usuarios</SidebarListItem>
              </Link>
            </List>
          </AccordionBody>
        </Accordion>
        <Link to='/admin/categories'>
          <SidebarListItem>
            <Typography variant="h2" className='flex gap-1 items-center text-grey-light text-md'>
              <TagIcon width="1em" strokeWidth={2} fill="#508DDD" className='w-5 h-5' /> Gestión de categorías
            </Typography>
          </SidebarListItem>
        </Link>
      </List>
    </Card>
  )
}
