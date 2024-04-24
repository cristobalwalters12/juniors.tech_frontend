import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import { searchPost } from '../../services/search'
import { useDebounce } from '../../shared/hooks/useDebounce'

const useSearchPosts = ({ q: query, limit = 20 }) => {
  const [searchParams] = useSearchParams()

  const q = useDebounce(query, 1000)

  const sort = searchParams.get('sort')
  const order = searchParams.get('order')
  const page = searchParams.get('page') || 1
  const category = searchParams.get('category')
  const params = { q, sort, order, page, limit, category }

  return useQuery({
    queryKey: ['search', 'posts', params],
    queryFn: () => searchPost(params),
    enabled: !!q && (q.trim() !== undefined),
    staleTime: 10 * 60 * 1000 // 10m
  })
}

export { useSearchPosts }
