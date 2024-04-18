import { FunnelIcon } from '@heroicons/react/24/outline'
import { Button, List, Typography } from '@material-tailwind/react'
import { useSearchParams } from 'react-router-dom'
import SidebarListItem from './SidebarListItem'

const SidebarUserFilteringOptions = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const country = searchParams.get('country')
  const openToWork = searchParams.get('otw')
  const languages = searchParams.get('lang')
  const itField = searchParams.get('it')
  const technologies = searchParams.get('tech')
  const anyKey = country || openToWork || languages || itField || technologies

  const handleFilterChange = (key, value) => () => {
    setSearchParams((prevSearchParams) => {
      const newSearchParams = new URLSearchParams(prevSearchParams)
      newSearchParams.set(key, value)
      return newSearchParams
    })
  }

  const handleFiltersReset = (key, value) => {
    setSearchParams({})
  }

  return (
    <List className='text-inherit pb-0'>
        <div className='flex items-center justify-between mb-3 pr-3'>
          <Typography variant="h2" className='flex gap-1 items-center text-grey-light text-md'>
          <FunnelIcon width="1em" strokeWidth={2.5} stroke="#508DDD" className='w-5 h-5' />
            Filtrar por
          </Typography>
          {anyKey && (
        <Button
          variant='text'
          onClick={handleFiltersReset}
          className='text-primary-light font-normal text-sm normal-case p-0 inline-flex'>
            Restaurar
        </Button>
          )}
        </div>
        <div>
        <SidebarListItem className="flex flex-col items-start" onClick={handleFilterChange('country')}>
          <Typography className='text-sm font-normal'>País</Typography>
          <Typography className="text-sm">{
            !country
              ? 'Cualquiera'
              : 'Childe'
          }</Typography>
        </SidebarListItem>
        <SidebarListItem className="flex flex-col items-start" onClick={handleFilterChange('otw')}>
          <Typography className='text-sm font-normal'>Disponibilidad laboral</Typography>
          <Typography className="text-sm">{
            !openToWork
              ? 'Cualquiera'
              : 'Disponible'
          }</Typography>
        </SidebarListItem>
        <SidebarListItem className="flex flex-col items-start" onClick={handleFilterChange('lang')}>
          <Typography className='text-sm font-normal'>Idiomas</Typography>
          <Typography className="text-sm">{
            !languages
              ? 'Cualquiera'
              : 'Español'
            }</Typography>
          </SidebarListItem>
        <SidebarListItem className="flex flex-col items-start" onClick={handleFilterChange('it')}>
          <Typography className='text-sm font-normal'>Especialidad IT</Typography>
          <Typography className="text-sm">{
            !itField
              ? 'Cualquiera'
              : 'Desarrollo Web'
          }</Typography>
        </SidebarListItem>
        <SidebarListItem className="flex flex-col items-start" onClick={handleFilterChange('tech')}>
          <Typography className='text-sm font-normal'>Tecnologías</Typography>
          <Typography className="text-sm">{
            !technologies
              ? 'Cualquiera'
              : 'Git/GitHub'
          }</Typography>
        </SidebarListItem>
      </div>
    </List>
  )
}

export default SidebarUserFilteringOptions
