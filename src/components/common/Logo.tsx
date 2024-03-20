import type { ReactElement } from 'react'
import cn from 'utils/cn'

type Props = {
	className?: string
}

export default function Logo({ className = undefined }: Props): ReactElement {
	return (
		<div
			className={cn(
				'w-[35px] text-[13px]/[15px] font-bold tracking-tighter',
				'bg-gradient-to-r from-[#ff5c01] to-[#ffd25f] bg-clip-text text-transparent',
				className
			)}
		>
			LOGO
		</div>
	)
}
