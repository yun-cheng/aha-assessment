export default function generateMarks({
	min,
	max,
	step,
	labelStep
}: {
	min: number
	max: number
	step: number
	labelStep: number
}) {
	const length = Math.floor((max - min) / step) + 1
	const arr = Array.from({ length }, (_, i) => min + i * step)
	if (arr.at(-1) !== max) {
		arr.push(max)
	}
	return arr.map((v, i) => ({
		value: v,
		label: v % labelStep && i !== 0 && i !== arr.length - 1 ? '' : v.toString()
	}))
}
