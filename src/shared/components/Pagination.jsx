import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { Button } from '@material-tailwind/react'
import { useSearchParams } from 'react-router-dom'
import PaginationButtons from './PaginationButtons'

const Pagination = ({ totalPages, currPage, prevPage, nextPage }) => {
  const [, setSearchParams] = useSearchParams()

  const goToPage = (page) => {
    setSearchParams(prevState => {
      const newSearchParams = new URLSearchParams(prevState)
      newSearchParams.set('page', page)
      return newSearchParams
    })
  }

  return (
    <div className='flex items-center gap-4'>
        <Button
          variant='text'
          className='flex items-center gap-2 rounded-full'
          onClick={() => goToPage(currPage - 1)}
          disabled={prevPage === null}
        >
          <ArrowLeftIcon strokeWidth={2} className='h-4 w-4' /> Anterior
        </Button>
        <PaginationButtons currPage={currPage} totalPages={totalPages} goToPage={goToPage} />
        <Button
          variant='text'
          className='flex items-center gap-2 rounded-full'
          onClick={() => goToPage(currPage + 1)}
          disabled={nextPage === null}
        >
          Siguiente <ArrowRightIcon strokeWidth={2} className='h-4 w-4' />
        </Button>
      </div>
  )
}

export default Pagination
