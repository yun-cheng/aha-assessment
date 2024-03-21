import { Skeleton } from '@mui/material'
import type { ReactElement } from 'react'

export default function ResultItemSkeleton(): ReactElement {
	return (
		<div>
			<div>
				<Skeleton
					className='aspect-[1.5] h-full w-full'
					animation='wave'
					variant='rectangular'
				/>
			</div>
			<Skeleton
				className='mt-[20.33px] h-[22px] w-[90%] sm:mt-3'
				animation='wave'
				variant='text'
			/>
			<Skeleton className='h-[17px] w-[40%]' animation='wave' variant='text' />
		</div>
	)
}
