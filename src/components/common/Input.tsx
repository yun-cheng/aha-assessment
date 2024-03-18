import type { ComponentProps, ReactElement } from 'react'
import cn from 'utils/cn'

export default function Input({
	className,
	...props
}: ComponentProps<'input'>): ReactElement {
	return (
		<input
			className={cn(
				'h-[60px] w-full',
				'rounded-md border-[3px] border-white/50 bg-transparent pl-[15px] focus:border-[#ff9b33] focus:ring-0',
				'text-sm/normal tracking-25',
				className
			)}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...props}
		/>
	)
}
