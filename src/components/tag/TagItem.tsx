import type { ReactElement } from 'react'
import type { Tag } from 'types/tag'
import cn from 'utils/cn'

type Props = {
	tag: Tag
}

export default function TagItem({ tag: { name, count } }: Props): ReactElement {
	return (
		<div>
			<div
				className={cn(
					'h-[150px] w-[150px] rounded-[10px] bg-white/[.06] px-2.5 pb-3.5',
					'flex items-end'
				)}
			>
				<div
					className={cn(
						'h-[50px] rounded-lg border-4 border-white px-2.5',
						'pt-[1px]',
						'truncate text-2xl/[42px] font-bold'
					)}
				>
					{name}
				</div>
			</div>
			<div className='translate-y-[1px] sm:translate-y-0'>
				<div className='mt-2.5 truncate text-[14.9px] tracking-[0.139688px]'>
					{name}
				</div>
				<div className='truncate text-[11.175px] tracking-[0.3725px] text-[#b2b2b2]'>
					{count} Questions
				</div>
			</div>
		</div>
	)
}
