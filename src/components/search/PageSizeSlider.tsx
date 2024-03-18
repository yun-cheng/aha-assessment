import Slider from 'components/common/Slider/Slider'
import type { ReactElement } from 'react'

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
	return (
		<Slider defaultValue={4} min={0} max={5.32} step={null} marks={MARKS} />
	)
}
