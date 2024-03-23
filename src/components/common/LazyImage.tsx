import type { ComponentProps, ReactElement } from 'react'
import { useInView } from 'react-intersection-observer'
import cn from 'utils/cn'

type Props = ComponentProps<'img'> & {
	rootSelector?: string
	rootMargin?: string
}

export default function LazyImage({
	src,
	alt,
	rootSelector = undefined,
	rootMargin = '250px 0px',
	className,
	...props
}: Props): ReactElement {
	const { ref, inView } = useInView({
		root: rootSelector ? document.querySelector(rootSelector) : undefined,
		triggerOnce: true,
		rootMargin
	})

	return (
		<div ref={ref} className={cn('relative', className)}>
			<div className='absolute inset-0 -z-10 w-full bg-[#363636]' />
			{!!inView && (
				<img
					className='h-full w-full'
					src={src}
					alt={alt}
					// eslint-disable-next-line react/jsx-props-no-spreading
					{...props}
				/>
			)}
		</div>
	)
}
