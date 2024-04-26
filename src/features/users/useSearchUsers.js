import { useSearchParams } from 'react-router-dom'
import { useDebounce } from '../../shared/hooks/useDebounce'
import { useQuery } from '@tanstack/react-query'
import { searchUser } from '../../services/search'

const useSearchUsers = ({ username, limit = 20 }) => {
  const [searchParams] = useSearchParams()
  const q = useDebounce(username, 1000)

  const sort = searchParams.get('sort')
  const order = searchParams.get('order')
  const page = searchParams.get('page') || 1
  const country = searchParams.get('country')
  const otw = searchParams.get('otw')
  const it = searchParams.get('it')
  const lang = searchParams.get('lang')
  const tech = searchParams.get('tech')

  const params = { q, sort, order, page, limit, country, otw, it, lang, tech }

  return useQuery({
    queryKey: ['search', 'users', params],
    queryFn: () => searchUser(params),
    enabled: !!q && q.trim().length > 0,
    staleTime: 10 * 60 * 1000, // 10m
    retry: false
  })
}

export default useSearchUsers
