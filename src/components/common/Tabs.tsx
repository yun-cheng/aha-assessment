import { Tabs as MuiTabs, Tab } from '@mui/material'
import { useState, type ComponentProps, type ReactElement } from 'react'
import cn from 'utils/cn'

type Props = ComponentProps<typeof MuiTabs> & {
	tabs: string[]
	defaultTab?: string
}

export default function Tabs({
	className,
	tabs,
	defaultTab = undefined,
	onChange = undefined,
	...props
}: Props): ReactElement {
	const [tab, setTab] = useState(defaultTab ?? tabs[0])

	const handleChange: ComponentProps<typeof Tabs>['onChange'] = (
		event,
		value
	) => {
		setTab(value as string)

		if (onChange) {
			onChange(event, value)
		}
	}

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
				onChange={handleChange}
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
