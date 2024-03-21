import { useInfiniteQuery } from '@tanstack/react-query'
import fetchFollowData from 'api/fetchFollowData'
import { useState } from 'react'

export default function useFetchFollowData() {
	const [type, setType] = useState<'followers' | 'following'>('followers')

	const { status, data, error, isFetching, fetchNextPage, hasNextPage } =
		useInfiniteQuery({
			queryKey: ['fetchFollowData', type],
			queryFn: async ({ pageParam: page }) => fetchFollowData({ type, page }),
			initialPageParam: 1,
			getNextPageParam: lastPage =>
				lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined
		})

	return {
		type,
		setType,
		status,
		data: data?.pages.flatMap(page => page.data),
		error,
		isFetching,
		fetchNextPage,
		hasNextPage
	}
}
