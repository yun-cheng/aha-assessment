import SmallButton from 'components/common/SmallButton'
import type { ReactElement } from 'react'
import type { FollowUser } from 'types/follow'

type Props = {
	user: FollowUser
}

export default function FollowUserItem({
	user: { name, username, avater, isFollowing }
}: Props): ReactElement {
	return (
		<div className='mt-4 flex w-full'>
			<img
				className='mt-[3px] h-10 w-10 rounded-[5px] border border-[#f8f8f8]'
				src={avater}
				alt='avatar'
			/>
			<div className='mx-[15px] grow'>
				<span className='truncate tracking-15'>{name}</span>
				<span className='block truncate text-sm/normal tracking-25 text-white/50'>
					{`@${username}`}
				</span>
			</div>
			<SmallButton
				className='mt-2'
				variant={isFollowing ? 'contained' : 'outlined'}
			>
				{isFollowing ? 'Following' : 'Follow'}
			</SmallButton>
		</div>
	)
}
