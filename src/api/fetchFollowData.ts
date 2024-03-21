import type { FollowUser } from 'types/follow'

const { VITE_SERVER_URL } = import.meta.env

type Props = {
	type: 'followers' | 'following'
	page: number
	pageSize?: number
}

type ResponseData = {
	total: number
	totalPages: number
	page: number
	pageSize: number
	data: FollowUser[]
}

export default async function fetchFollowData({
	type,
	page,
	pageSize = 10
}: Props) {
	const queryType = type === 'followers' ? 'all' : 'friends'
	const response = await fetch(
		`${VITE_SERVER_URL}/api/users/${queryType}?page=${page}&pageSize=${pageSize}`
	)
	return (await response.json()) as ResponseData
}
