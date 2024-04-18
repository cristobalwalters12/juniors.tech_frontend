import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { FunnelIcon } from '@heroicons/react/24/outline'
import { Button, Card, List, Typography } from '@material-tailwind/react'
import {
  /* Link,  */
  useSearchParams
} from 'react-router-dom'
import SidebarListItem from './SidebarListItem'
import SortIcon from '../Icons/SortIcon'

/* const DEFAULT_ORDERS = {
  votes: 'desc',
  date: 'asc'
} */

export default function SidebarSearch () {
  const [searchParams] = useSearchParams()
  const sort = searchParams.get('sort')
  const order = searchParams.get('order')
  /* const category = searchParams.get('category')

  const handleSortingOptionChange = (value) => () => {
    const newSort = value
    setSearchParams((prevSearchParams) => {
      const newSearchParams = new URLSearchParams(prevSearchParams)
      const prevSort = newSearchParams.get('sort')
      const prevOrder = newSearchParams.get('order')
      let newOrder
      if (prevSort === newSort) {
        newOrder = prevOrder === 'desc' ? 'asc' : 'desc'
      } else {
        newOrder = DEFAULT_ORDERS[newSort]
        newSearchParams.set('sort', newSort)
      }
      newSearchParams.set('order', newOrder)
      return newSearchParams
    })
  }

  const handleSortingOptionReset = () => {
    setSearchParams((prevSearchParams) => {
      const newSearchParams = new URLSearchParams(prevSearchParams)
      newSearchParams.delete('sort')
      newSearchParams.delete('order')
      return newSearchParams
    })
  }

  const handleCategoryChange = (e) => {
    setSearchParams((prevSearchParams) => {
      const newSearchParams = new URLSearchParams(prevSearchParams)
      newSearchParams.set('category', e.target.value)
      return newSearchParams
    })
  }

  const handleCategoryReset = () => {
    setSearchParams((prevSearchParams) => {
      const newSearchParams = new URLSearchParams(prevSearchParams)
      newSearchParams.delete('category')
      return newSearchParams
    })
  } */

  return (
    <Card shadow={false} className='bg-accent-dark text-grey-dark h-full overflow-x-clip overflow-y-auto'>
      <List className='text-inherit pb-0'>
        <Typography variant="h2" className='flex gap-1 items-center text-grey-light mb-3 text-md'>
        <MagnifyingGlassIcon width="1em" strokeWidth={3} fill="#508DDD" className='w-5 h-5' />
          Buscar
        </Typography>
        <SidebarListItem>Publicaciones</SidebarListItem>
        <SidebarListItem>Usuarios</SidebarListItem>
      </List>
      <hr className='border-primary-dark my-2'/>
      <List className='text-inherit pb-0'>
        <div className='flex items-center justify-between mb-3 pr-3'>
          <Typography variant="h2" className='flex gap-1 items-center text-grey-light text-md'>
          <SortIcon/>
            Ordenar por
          </Typography>
          <Button variant='text' className='text-primary-light font-normal text-sm normal-case p-0 inline-flex'>Restaurar</Button>
        </div>
        <SidebarListItem className="flex flex-col items-start">
          <Typography className='text-sm font-normal'>Votos</Typography>
          <Typography className="text-sm">{
          sort !== 'votes'
            ? 'Cualquiera'
            : (
                order === 'asc' ? 'Menos votadas primero' : 'Más votadas primero'
              )
          }</Typography>
        </SidebarListItem>
        <SidebarListItem className="flex flex-col items-start">
          <Typography className='text-sm font-normal'>Fecha</Typography>
          <Typography className="text-sm">{
          sort !== 'date'
            ? 'Cualquiera'
            : (
                order === 'asc' ? 'Más recientes primero<' : 'Más antiguas primero'
              )
          }</Typography>
        </SidebarListItem>
      </List>
      <hr className='border-primary-dark my-2'/>
      <List className='text-inherit pb-0'>
        <div className='flex items-center justify-between mb-3 pr-3'>
          <Typography variant="h2" className='flex gap-1 items-center text-grey-light text-md'>
          <FunnelIcon width="1em" strokeWidth={2.5} stroke="#508DDD" className='w-5 h-5' />
            Buscar sobre
          </Typography>
          <Button variant='text' className='text-primary-light font-normal text-sm normal-case p-0 inline-flex'>Restaurar</Button>
        </div>
        <SidebarListItem id="L1w-xYdnDH">Hojas de vida</SidebarListItem>
        <SidebarListItem id="S5L4FfEnjz">Proyectos grupales</SidebarListItem>
        <SidebarListItem id="vq8EkwRM5Q">Ofertas de trabajo</SidebarListItem>
        <SidebarListItem id="WsMK91X7dK">Sugerencias de cursos</SidebarListItem>
        <SidebarListItem id="X9lWwZFUMs">Portafolios</SidebarListItem>
        <SidebarListItem id="xOnWXzDLgx">Grupos de estudio</SidebarListItem>
      </List>
    </Card>
  )
}
