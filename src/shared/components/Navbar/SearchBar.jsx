import CustomInput from '../CustomInput'
import { IconButton } from '@material-tailwind/react'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useSearchParams } from 'react-router-dom'

const SearchBar = ({ className }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const q = searchParams.get('q') || ''

  const handleChange = (e) => {
    setSearchParams((prevSearchParams) => {
      const newSearchParams = new URLSearchParams(prevSearchParams)
      newSearchParams.set('q', e.target.value)
      newSearchParams.set('page', 1)
      return newSearchParams
    }, { replace: true })
  }

  const handleReset = () => {
    setSearchParams({}, { replace: true })
  }

  return (
    <div className={`relative w-full ${className || ''}`}>
      <div className='absolute flex items-center justify-center w-10 p-2 h-full top-0 left-0 z-10'>
        <MagnifyingGlassIcon stroke='#8ab0e8' width='2em' strokeWidth={2} />
      </div>
      <CustomInput
        placeholder='Busca en Juniors.tech'
        id='q'
        className='pl-12'
        type='search'
        value={q}
        onChange={handleChange}
      />
      {q && (
        <div className='absolute top-0 right-0 z-10'>
          <IconButton
            variant='text'
            onClick={handleReset}
            className='hover:bg-blue-500/10 focus:bg-blue-500/10 active:bg-blue-500/10'
          >
            <XMarkIcon width='2em' stroke='#8ab0e8' />
          </IconButton>
        </div>
      )}
    </div>
  )
}

export default SearchBar
