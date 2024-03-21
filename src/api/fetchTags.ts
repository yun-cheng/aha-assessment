import type { Tag } from 'types/tag'

const { VITE_SERVER_URL } = import.meta.env

export default async function fetchTags() {
	const response = await fetch(`${VITE_SERVER_URL}/api/tags`)
	return (await response.json()) as Tag[]
}
