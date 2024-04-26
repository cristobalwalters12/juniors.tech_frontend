import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { Card, List, Typography } from '@material-tailwind/react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import SidebarListItem from './SidebarListItem'
import SidebarPostSortingOptions from './SidebarPostSortingOptions'
import SidebarPostFilteringOptions from './SidebarPostFilteringOptions'
import SidebarUserSortingOptions from './SidebarUserSortingOptions'
import SidebarUserFilteringOptions from './SidebarUserFilteringOptions'

export default function SidebarSearch () {
  const location = useLocation()
  const searchType = location.pathname?.split('/')?.[2]
  const [searchParams] = useSearchParams()
  const q = searchParams.get('q')

  return (
    <Card shadow={false} className='bg-accent-dark text-grey-dark h-full overflow-x-clip overflow-y-auto'>
      <List className='text-inherit pb-0'>
        <Typography variant="h2" className='flex gap-1 items-center text-grey-light mb-3 text-md'>
        <MagnifyingGlassIcon width="1em" strokeWidth={3} fill="#508DDD" className='w-5 h-5' />
          Buscar
        </Typography>
        <Link to={`/search/posts${q ? `?q=${q}` : ''}`}>
          <SidebarListItem>Publicaciones</SidebarListItem>
        </Link>
        <Link to={`/search/users${q ? `?q=${q}` : ''}`}>
          <SidebarListItem>Usuarios</SidebarListItem>
        </Link>
      </List>
      <hr className='border-primary-dark my-2'/>
      { searchType === 'posts' &&
        (<>
          <SidebarPostSortingOptions />
          <hr className='border-primary-dark my-2'/>
          <SidebarPostFilteringOptions />
        </>)}
        { searchType === 'users' &&
        (<>
          <SidebarUserSortingOptions />
          <hr className='border-primary-dark my-2'/>
          <SidebarUserFilteringOptions />
        </>)}
    </Card>
  )
}
