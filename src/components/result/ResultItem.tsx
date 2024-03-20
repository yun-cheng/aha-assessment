import type { ReactElement } from 'react'
import type { Result } from 'types/result'
import cn from 'utils/cn'

type Props = {
	result: Result
}

export default function ResultItem({
	result: { name, username, avater }
}: Props): ReactElement {
	return (
		<div>
			<img className='aspect-[1.5] w-full' src={avater} alt='avatar' />
			<div
				className={cn(
					'mt-[20.33px] sm:mt-3',
					'truncate text-[14.9px]/normal tracking-[0.139688px]'
				)}
			>
				{name}
			</div>
			<div className='truncate text-[11.175px]/normal tracking-[0.3725px] text-[#b2b2b2]'>
				by {username}
			</div>
		</div>
	)
}
