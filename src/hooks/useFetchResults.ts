import { faker } from '@faker-js/faker'
import { useInfiniteQuery } from '@tanstack/react-query'
import fetchResults from 'api/fetchResults'
import { useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function useFetchResults() {
	const [searchParams] = useSearchParams()

	const keyword = searchParams.get('keyword') ?? ''
	const pageSize = Number(searchParams.get('pageSize'))

	const fetchAndTransformResults = useCallback(
		async ({ pageParam }: { pageParam: number }) => {
			faker.seed(pageParam * 100 + pageSize)
			const results = await fetchResults({
				keyword,
				pageSize,
				page: pageParam
			})
			results.data = results.data.map(result => ({
				...result,
				avater: faker.image.urlPicsumPhotos({
					width: 450,
					height: 300
				})
			}))
			return results
		},
		[keyword, pageSize]
	)

	const { status, data, error, isFetching, fetchNextPage, hasNextPage } =
		useInfiniteQuery({
			queryKey: ['fetchResults', keyword, pageSize],
			queryFn: fetchAndTransformResults,
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
