import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import cn from 'utils/cn'
import PagesSvg from '../../../icons/Pages.svg?react'

type Props = {
	to: string
	name?: string
	isActive: boolean
	hasNotification?: boolean
	className?: string
}

export default function NavButton({
	to,
	name = undefined,
	isActive,
	hasNotification = false,
	className = undefined
}: Props): ReactElement {
	return (
		<Link className={cn('flex flex-col items-center', className)} to={to}>
			<div
				className={cn(
					'relative flex h-6 w-6 items-center justify-center',
					!isActive && !!name && 'mb-[18px]',
					!isActive && 'text-[#6a6a6a]'
				)}
			>
				<PagesSvg />
				{!!hasNotification && (
					<div className='absolute -right-1 -top-1 h-1.5 w-1.5 rounded-full bg-[#00d1ff]' />
				)}
			</div>
			{!!isActive && !!name && (
				<span className='text-xs/normal tracking-[0.4px]'>{name}</span>
			)}
		</Link>
	)
}
