import { Skeleton } from '@mui/material'
import type { ReactElement } from 'react'

export default function FollowUserItemSkeleton(): ReactElement {
	return (
		<div className='mt-4 flex w-full'>
			<Skeleton
				className='my-auto h-10 w-10 rounded-[5px]'
				animation='wave'
				variant='rectangular'
			/>
			<div className='mx-[15px] grow'>
				<Skeleton className='h-6 w-40' animation='wave' variant='text' />
				<Skeleton className='h-5 w-28' animation='wave' variant='text' />
			</div>
			<Skeleton
				className='mt-2 h-[29px] min-w-[76px] rounded-[20px] text-xs'
				animation='wave'
				variant='rectangular'
			/>
		</div>
	)
}
