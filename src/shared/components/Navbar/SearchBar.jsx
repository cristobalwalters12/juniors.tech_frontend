import CustomInput from '../CustomInput'
import { IconButton, Spinner } from '@material-tailwind/react'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { useSearchPosts } from '../../../features/posts/useSearchPosts'
import { useState } from 'react'
import useOutsideClick from '../../hooks/useOutsideClick'

const SearchBar = ({ className }) => {
  const [query, setQuery] = useState('')
  const [openSuggestions, setOpenSuggestions] = useState(false)
  const { pathname } = useLocation()
  const [, setSearchParams] = useSearchParams()
  const { isLoading, data: suggestions } = useSearchPosts({ q: query, limit: 4 })
  const navigate = useNavigate()
  const hideSuggestions = () => setOpenSuggestions(false)
  const closableRef = useOutsideClick(hideSuggestions, true)
  const showSuggestions = () => setOpenSuggestions(true)

  const handleChange = (e) => {
    const input = e.target.value
    setQuery(input)
    if (input?.length > 0) {
      showSuggestions()
    } else {
      hideSuggestions()
    }
  }

  const handleReset = () => {
    setQuery('')
    hideSuggestions()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!query || query?.trim().length === '') return
    hideSuggestions()
    if (!pathname.startsWith('/search')) {
      navigate(`/search/posts?q=${query}`)
    } else {
      setSearchParams(prevParams => ({ ...prevParams, q: query }), { replace: true })
    }
  }

  return (
    <form className={`relative w-full ${className || ''}`} onSubmit={handleSubmit}>
      <div className='absolute flex items-center justify-center w-10 p-2 h-full top-0 left-0 z-10'>
        <MagnifyingGlassIcon stroke='#8ab0e8' width='2em' strokeWidth={2} />
      </div>
      <CustomInput
        placeholder='Busca en Juniors.tech'
        id='q'
        className='pl-12'
        type='search'
        value={query}
        onChange={handleChange}
        onClick={query ? showSuggestions : undefined}
        autoComplete="off"
      />
      {query && (
        <div className='absolute top-0 right-0 z-10'>
          <IconButton
            variant='text'
            type='reset'
            onClick={handleReset}
            className='hover:bg-blue-500/10 focus:bg-blue-500/10 active:bg-blue-500/10'
          >
            <XMarkIcon width='2em' stroke='#8ab0e8' />
          </IconButton>
        </div>
      )}
      {openSuggestions && (
        <div
          ref={closableRef}
          className='absolute rounded-md overflow-hidden w-full z-10 bg-blue-gray-100 translate-y-2'>
          {isLoading
            ? (<div className='flex justify-center'>
                <Spinner className="h-4 w-4 text-gray-900/50" />
              </div>
              )
            : suggestions?.posts.map(({ id, title, slug }) => (
                <Link
                  key={id}
                  to={`/posts/${id}/${slug}`}
                  onClick={hideSuggestions}
                  className='flex items-center w-full p-2 text-ellipsis hover:bg-blue-gray-50'>
                  {title}
                </Link>
            ))
          }
          <hr className='border-b-1 border-grey-dark my-1 mx-2' />
          <Link
            to={`/search/posts?q=${query}`}
            onClick={hideSuggestions}
            className='flex items-center w-full p-2 hover:bg-blue-gray-50'>
              Buscar &quot;{query}&quot; en Juniors.tech
          </Link>
        </div>
      )}
    </form>
  )
}

export default SearchBar
