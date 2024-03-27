import type { ComponentProps, ReactElement } from 'react'
import cn from 'utils/cn'

type Props = ComponentProps<'button'> & {
	variant?: 'contained' | 'outlined'
}

export default function SmallButton({
	className,
	children,
	variant = 'contained',
	...props
}: Props): ReactElement {
	return (
		<button
			className={cn(
				'rounded-[20px] border border-white px-2.5 py-[5px]',
				'font-["Open_Sans_Variable"] text-xs/normal font-semibold',
				variant === 'contained'
					? 'h-[28px] bg-white text-near-black hover:bg-near-black hover:text-white'
					: 'h-[29px] bg-near-black text-white hover:bg-white hover:text-near-black',
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
