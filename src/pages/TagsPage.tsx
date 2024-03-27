import { useQuery } from '@tanstack/react-query'
import fetchTags from 'api/fetchTags'
import TagItem from 'components/tag/TagItem'
import TagItemSkeleton from 'components/tag/TagItemSkeleton'
import type { ReactElement } from 'react'
import cn from 'utils/cn'

export default function TagsPage(): ReactElement {
	const { data: tags, isFetching } = useQuery({
		queryKey: ['fetchTags'],
		queryFn: fetchTags
	})

	return (
		<div
			className={cn('h-screen w-full px-[7px] sm:px-[14px]', 'flex flex-col')}
		>
			<div className='mt-[70px] overflow-y-auto sm:mt-0'>
				<div className='mx-auto max-w-[903px]'>
					<div
						className={cn(
							'pb-12 pl-[18px] pr-[14px] pt-5 sm:pl-[32px] sm:pr-[25px] sm:pt-20',
							'grid grid-cols-[repeat(auto-fit,150px)] justify-center gap-x-6 gap-y-6 sm:gap-y-9'
						)}
					>
						<h2
							className={cn(
								'col-span-full -ml-[5px] translate-y-px sm:-mb-3 sm:ml-0',
								'text-2xl leading-normal tracking-25 sm:text-[30px]'
							)}
						>
							Tags
						</h2>
						{tags?.map(tag => <TagItem key={tag.id} tag={tag} />)}
						{!!isFetching &&
							Array.from({ length: 15 }).map((_, index) => (
								// eslint-disable-next-line react/no-array-index-key
								<TagItemSkeleton key={index} />
							))}
					</div>
				</div>
			</div>
		</div>
	)
}
