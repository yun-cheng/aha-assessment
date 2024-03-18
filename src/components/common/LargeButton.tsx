import type { ComponentProps, ReactElement } from 'react'
import cn from 'utils/cn'

export default function LargeButton({
	className,
	children,
	...props
}: ComponentProps<'button'>): ReactElement {
	return (
		<button
			className={cn(
				'h-10 w-full max-w-[343px]',
				'rounded bg-white hover:border hover:border-white hover:bg-near-black',
				'text-sm/none font-bold text-near-black hover:text-white',
				className
			)}
			type='button'
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...props}
		>
			{children}
		</button>
	)
}
