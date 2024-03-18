import { Slider as MuiSlider } from '@mui/material'
import {
	useMemo,
	useState,
	type ComponentProps,
	type ReactElement
} from 'react'
import generateMarks from './generateMarks'

type Props = Omit<ComponentProps<typeof MuiSlider>, 'marks'> & {
	labelStep?: number
	marks?: { value: number; label: string }[]
	onMarkChange?: (mark: { value: number; label: string }) => void
}

export default function Slider({
	min = 0,
	max = 100,
	step,
	labelStep = 1,
	defaultValue = undefined,
	marks = undefined,
	onChange = undefined,
	onMarkChange = undefined,
	...props
}: Props): ReactElement {
	const valueMarks = useMemo(() => {
		return marks ?? generateMarks({ min, max, step: step ?? 1, labelStep })
	}, [min, max, step, labelStep, marks])

	const [markIndex, setMarkIndex] = useState(() => {
		if (!defaultValue) return 0
		return valueMarks.findIndex(e => e.value === (defaultValue as number))
	})

	const handleChange: ComponentProps<typeof Slider>['onChange'] = (
		event,
		value,
		activeThumb
	) => {
		const index = valueMarks.findIndex(e => e.value === (value as number))
		setMarkIndex(index)

		if (onChange) {
			onChange(event, value, activeThumb)
		}
		if (onMarkChange && index !== -1) {
			onMarkChange(valueMarks[index])
		}
	}

	return (
		<MuiSlider
			sx={{
				'& .MuiSlider-markLabel': {
					color: 'rgb(255 255 255 / 0.5)'
				},
				[`& .MuiSlider-markLabel[data-index="${markIndex}"]`]: {
					color: 'white'
				}
			}}
			classes={{
				root: 'h-2 mt-0',
				track: 'bg-gradient-to-r from-[#ff5c01] to-[#ffd25f] border-none',
				rail: 'bg-white/30',
				mark: 'hidden',
				markLabel: 'mt-1 text-sm/normal tracking-25',
				thumb:
					'h-[26px] w-[26px] border-[6px] border-[#ffd05d] bg-[#1b1b1b] ring-0 before:ring-0 hover:ring-0'
			}}
			valueLabelDisplay='off'
			min={min}
			max={max}
			step={step}
			defaultValue={defaultValue}
			marks={valueMarks}
			onChange={handleChange}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...props}
		/>
	)
}
