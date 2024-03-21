import type { Result } from 'types/result'

const { VITE_SERVER_URL } = import.meta.env

type Props = {
	keyword: string
	page: number
	pageSize: number
}

type ResponseData = {
	total: number
	totalPages: number
	page: number
	pageSize: number
	data: Result[]
}

export default async function fetchResults({ keyword, page, pageSize }: Props) {
	const response = await fetch(
		`${VITE_SERVER_URL}/api/users/all?page=${page}&pageSize=${pageSize}&keyword=${keyword}`
	)
	return (await response.json()) as ResponseData
}
