import { useInfiniteQuery } from '@tanstack/react-query'
import { getPosts } from '../../services/posts'
import { useSearchParams } from 'react-router-dom'

const useGetPosts = () => {
  const [searchParams] = useSearchParams()
  const sort = searchParams.get('sort')
  const order = searchParams.get('order')
  return useInfiniteQuery({
    queryKey: ['posts', { sort, order }],
    queryFn: ({ pageParam }) => getPosts({ sort, order, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false
  })
}

export { useGetPosts }
