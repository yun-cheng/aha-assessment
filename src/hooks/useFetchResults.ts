import { useInfiniteQuery } from '@tanstack/react-query'
import fetchResults from 'api/fetchResults'
import { useSearchParams } from 'react-router-dom'

export default function useFetchResults() {
	const [searchParams] = useSearchParams()

	const keyword = searchParams.get('keyword') ?? ''
	const pageSize = Number(searchParams.get('pageSize'))

	const { status, data, error, isFetching, fetchNextPage, hasNextPage } =
		useInfiniteQuery({
			queryKey: ['fetchResults', keyword, pageSize],
			queryFn: async ({ pageParam: page }) =>
				fetchResults({ keyword, page, pageSize }),
			initialPageParam: 1,
			getNextPageParam: lastPage =>
				lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined
		})

	return {
		status,
		data: data?.pages.flatMap(page => page.data),
		error,
		isFetching,
		fetchNextPage,
		hasNextPage
	}
}
