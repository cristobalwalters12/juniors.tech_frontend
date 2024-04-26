import { FunnelIcon } from '@heroicons/react/24/outline'
import { Button, List, Typography } from '@material-tailwind/react'
import { useSearchParams } from 'react-router-dom'
import CountryDiccionary from '../../../features/editUserProfile/Dictionary/CountryDictionary'
import SidebarSelect from './SidebarSelect'
import ItFieldDictionary from '../../../features/editUserProfile/Dictionary/ItFieldDictionary'
import TechnologyDictionary from '../../../features/editUserProfile/Dictionary/TechnologyDictionary'
import SidebarListItem from './SidebarListItem'
import LanguageDictionary from '../../../features/editUserProfile/Dictionary/LanguageDictionary'

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

  const handleFiltersReset = () => {
    setSearchParams((prevSearchParams) => {
      const newSearchParams = new URLSearchParams(prevSearchParams)
      newSearchParams.delete('country')
      newSearchParams.delete('otw')
      newSearchParams.delete('lang')
      newSearchParams.delete('it')
      newSearchParams.delete('tech')
      return newSearchParams
    })
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
        <div className='flex flex-col gap-1'>
        <SidebarListItem
          className="flex flex-col items-start"
          onClick={handleFilterChange('otw', openToWork === '1' ? '0' : '1')}
        >
          <Typography className='text-sm font-normal'>Disponibilidad laboral</Typography>
          <Typography className="text-sm">{
            openToWork === null
              ? 'Cualquiera'
              : openToWork === '1' ? 'Disponible' : 'No disponible'
          }</Typography>
        </SidebarListItem>
        <SidebarSelect placeholder="País" options={CountryDiccionary} queryParamName="country" />
        <SidebarSelect placeholder="Idiomas" options={LanguageDictionary} queryParamName="lang" isMulti={true} />
        <SidebarSelect placeholder="Especialidad IT" options={ItFieldDictionary} queryParamName="it" />
        <SidebarSelect placeholder="Tecnologías" options={TechnologyDictionary} queryParamName="tech" isMulti={true} />
      </div>
    </List>
  )
}

export default SidebarUserFilteringOptions
