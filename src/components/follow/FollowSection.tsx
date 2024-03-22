import Tabs from 'components/common/Tabs'
import useFetchFollowData from 'hooks/useFetchFollowData'
import type { ComponentProps, ReactElement } from 'react'
import { useEffect, useRef } from 'react'

import { useInView } from 'react-intersection-observer'
import cn from 'utils/cn'
import FollowUserItem from './FollowUserItem'
import FollowUserItemSkeleton from './FollowUserItemSkeleton'

export default function FollowSection(): ReactElement {
	const containerRef = useRef<HTMLDivElement>(null)

	const { ref, inView } = useInView({
		root: containerRef.current,
		rootMargin: '0px 0px 200px'
	})

	const {
		type: tab,
		setType: setTab,
		data,
		isFetching,
		fetchNextPage
	} = useFetchFollowData()

	useEffect(() => {
		if (inView) {
			void fetchNextPage()
		}
	}, [fetchNextPage, inView])

	const onChange: ComponentProps<typeof Tabs>['onChange'] = (_, value) => {
		setTab(value as 'followers' | 'following')
	}

	return (
		<div className='flex h-screen w-[375px] flex-col'>
			<Tabs
				className='pt-[23px]'
				tabs={['followers', 'following']}
				tab={tab}
				onChange={onChange}
			/>
			<div
				ref={containerRef}
				className='w-full overflow-y-auto py-4 pl-4 pr-[9px]'
			>
				{data?.map(user => <FollowUserItem key={user.id} user={user} />)}
				{!!isFetching &&
					Array.from({ length: 10 }).map((_, index) => (
						// eslint-disable-next-line react/no-array-index-key
						<FollowUserItemSkeleton key={index} />
					))}
				<div ref={ref} className={cn('w-full', { hidden: isFetching })} />
			</div>
		</div>
	)
}
