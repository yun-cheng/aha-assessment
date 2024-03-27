import LazyImage from 'components/common/LazyImage'
import type { ReactElement } from 'react'
import type { Result } from 'types/result'

type Props = {
	result: Result
}

export default function ResultItem({
	result: { name, username, avater }
}: Props): ReactElement {
	return (
		<div>
			<LazyImage
				className='aspect-[1.5] w-full'
				rootSelector='#resultsContainer'
				src={avater}
				alt='avatar'
			/>
			<div className='mt-[20.33px] sm:mt-3 sm:translate-y-px'>
				<div className='h-[22px] truncate text-[14.9px]/normal tracking-[0.139688px]'>
					{name}
				</div>
				<div className='h-[17px] truncate text-[11.175px]/normal tracking-[0.3725px] text-[#b2b2b2]'>
					by {username}
				</div>
			</div>
		</div>
	)
}
