import { useEffect } from 'react'

type Props = {
	title: string
}

export default function Head({ title }: Props): null {
	useEffect(() => {
		document.title = title
	}, [title])

	return null
}
