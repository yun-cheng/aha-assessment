import { Skeleton } from '@mui/material'
import type { ReactElement } from 'react'

export default function TagItemSkeleton(): ReactElement {
	return (
		<div>
			<Skeleton
				className='h-[150px] w-[150px] rounded-[10px]'
				animation='wave'
				variant='rectangular'
			/>
			<Skeleton
				className='mt-2.5 h-[22px] w-full'
				animation='wave'
				variant='text'
			/>
			<Skeleton className='h-[17px] w-1/2' animation='wave' variant='text' />
		</div>
	)
}
