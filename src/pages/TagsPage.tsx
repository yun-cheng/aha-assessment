import TagItem from 'components/tag/TagItem'
import type { ReactElement } from 'react'
import cn from 'utils/cn'

export default function TagsPage(): ReactElement {
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
								'col-span-full -ml-[5px] translate-y-[1px] sm:-mb-3 sm:ml-0',
								'text-2xl leading-normal tracking-25 sm:text-[30px]'
							)}
						>
							Tags
						</h2>
						{Array.from({ length: 43 }).map((_, index) => (
							<TagItem
								// eslint-disable-next-line react/no-array-index-key
								key={index}
								tag={{ id: index.toString(), name: 'Beautiful', count: 999 }}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
