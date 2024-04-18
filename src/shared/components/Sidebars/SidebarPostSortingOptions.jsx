import { Button, List, Typography } from '@material-tailwind/react'
import { useSearchParams } from 'react-router-dom'
import SidebarListItem from './SidebarListItem'
import SortIcon from '../Icons/SortIcon'

const DEFAULT_ORDERS = {
  votes: 'desc',
  date: 'asc'
}

const SidebarPostSortingOptions = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const sort = searchParams.get('sort')
  const order = searchParams.get('order')

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

  return (
    <List className='text-inherit pb-0'>
    <div className='flex items-center justify-between mb-3 pr-3'>
      <Typography variant="h2" className='flex gap-1 items-center text-grey-light text-md'>
      <SortIcon/>
        Ordenar por
      </Typography>
      {sort && (
        <Button
          variant='text'
          onClick={handleSortingOptionReset}
          className='text-primary-light font-normal text-sm normal-case p-0 inline-flex'>
            Restaurar
        </Button>
      )}
    </div>
    <SidebarListItem className="flex flex-col items-start" onClick={handleSortingOptionChange('votes')}>
      <Typography className='text-sm font-normal'>Votos</Typography>
      <Typography className="text-sm">{
      sort !== 'votes'
        ? 'Cualquiera'
        : (
            order === 'asc' ? 'Menos votadas primero' : 'Más votadas primero'
          )
      }</Typography>
    </SidebarListItem>
    <SidebarListItem className="flex flex-col items-start" onClick={handleSortingOptionChange('date')}>
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
  )
}

export default SidebarPostSortingOptions
