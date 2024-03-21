import { Tabs as MuiTabs, Tab } from '@mui/material'
import type { ComponentProps, ReactElement } from 'react'
import cn from 'utils/cn'

type Props = Omit<ComponentProps<typeof MuiTabs>, 'value'> & {
	tabs: string[]
	tab: string
}

export default function Tabs({
	className,
	tabs,
	tab,
	...props
}: Props): ReactElement {
	return (
		<div className={cn('relative', className)}>
			<div className='absolute bottom-0 h-[2px] w-full bg-[#1f1f1f]' />
			<MuiTabs
				className='min-h-0'
				classes={{
					indicator: 'bg-white'
				}}
				variant='fullWidth'
				value={tab}
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...props}
			>
				{tabs.map(tabValue => (
					<Tab
						className={cn(
							'min-h-0 py-[9px]',
							'text-base font-normal capitalize tracking-15 text-[#929292]/[0.87]',
							tab === tabValue && 'font-bold text-white'
						)}
						key={tabValue}
						label={tabValue}
						value={tabValue}
					/>
				))}
			</MuiTabs>
		</div>
	)
}
