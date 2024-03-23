import { faker } from '@faker-js/faker'
import { useInfiniteQuery } from '@tanstack/react-query'
import fetchFollowData from 'api/fetchFollowData'
import { useCallback, useState } from 'react'

export default function useFetchFollowData() {
	const [type, setType] = useState<'followers' | 'following'>('followers')

	const fetchAndTransformFollowData = useCallback(
		async ({ pageParam }: { pageParam: number }) => {
			const typeNumber = type === 'followers' ? 0 : 1000
			faker.seed(typeNumber + pageParam)
			const followData = await fetchFollowData({ type, page: pageParam })
			followData.data = followData.data.map(user => ({
				...user,
				avater: faker.image.avatarLegacy()
			}))
			return followData
		},
		[type]
	)

	const { status, data, error, isFetching, fetchNextPage, hasNextPage } =
		useInfiniteQuery({
			queryKey: ['fetchFollowData', type],
			queryFn: fetchAndTransformFollowData,
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
