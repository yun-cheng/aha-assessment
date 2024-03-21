import { resultPageSizeAtom } from 'atoms/core'
import Slider from 'components/common/Slider/Slider'
import { useAtom } from 'jotai'
import { useState, type ReactElement } from 'react'

const MARKS = [
	{
		value: 0,
		label: '3'
	},
	{
		value: 1,
		label: '6'
	},
	{
		value: 2,
		label: '9'
	},
	{
		value: 3,
		label: '12'
	},
	{
		value: 4,
		label: '15'
	},
	{
		value: 5.32,
		label: '50'
	}
]

export default function PageSizeSlider(): ReactElement {
	const [pageSize, setPageSize] = useAtom(resultPageSizeAtom)

	const [markValue, setMarkValue] = useState(
		() => MARKS.find(e => e.label === pageSize.toString())?.value ?? 4
	)

	const onMarkChange = ({ value, label }: { value: number; label: string }) => {
		setMarkValue(value)
		setPageSize(Number(label))
	}

	return (
		<Slider
			value={markValue}
			min={0}
			max={5.32}
			step={null}
			marks={MARKS}
			onMarkChange={onMarkChange}
		/>
	)
}
