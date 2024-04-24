import { FunnelIcon } from '@heroicons/react/24/outline'
import { Button, List, Typography } from '@material-tailwind/react'
import { useSearchParams } from 'react-router-dom'
import SidebarListItem from './SidebarListItem'
import { useGetCategories } from '../../hooks/useGetCategories'

const SidebarPostFilteringOptions = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const getCategoriesQuery = useGetCategories()
  const category = searchParams.get('category')

  const handleCategoryChange = (value) => () => {
    setSearchParams((prevSearchParams) => {
      const newSearchParams = new URLSearchParams(prevSearchParams)
      newSearchParams.set('category', value)
      newSearchParams.set('page', 1)
      return newSearchParams
    })
  }

  const handleCategoryReset = () => {
    setSearchParams((prevSearchParams) => {
      const newSearchParams = new URLSearchParams(prevSearchParams)
      newSearchParams.delete('category')
      newSearchParams.set('page', 1)
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
          {category && (
        <Button
          variant='text'
          onClick={handleCategoryReset}
          className='text-primary-light font-normal text-sm normal-case p-0 inline-flex'>
            Restaurar
        </Button>
          )}
        </div>
        <div>
          {
            getCategoriesQuery.data?.map(({ id, name }) => {
              return (
                <SidebarListItem
                  key={id}
                  id={id}
                  onClick={handleCategoryChange(id)}
                >
                  {name}
                </SidebarListItem>
              )
            })
          }
        </div>
      </List>
  )
}

export default SidebarPostFilteringOptions
