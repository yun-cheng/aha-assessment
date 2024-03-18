import type { ReactElement } from 'react'
import cn from 'utils/cn'

type Props = {
	className?: string
}

export default function Divider({
	className = undefined
}: Props): ReactElement {
	return <div className={cn('h-[1px] w-full bg-white/10', className)} />
}
