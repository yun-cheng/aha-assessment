import Tabs from 'components/common/Tabs'
import type { ReactElement } from 'react'
import FollowUserItem from './FollowUserItem'

export default function FollowSection(): ReactElement {
	return (
		<div className='flex h-screen w-[375px] flex-col'>
			<Tabs className='pt-[23px]' tabs={['Followers', 'Following']} />
			<div className='w-full overflow-y-auto py-4 pl-4 pr-[9px]'>
				{Array.from({ length: 30 }).map((_, index) => (
					<FollowUserItem
						// eslint-disable-next-line react/no-array-index-key
						key={index}
						user={{
							id: index.toString(),
							name: 'Fullname',
							username: 'username',
							avater: '',
							isFollowing: Boolean(index % 2)
						}}
					/>
				))}
			</div>
		</div>
	)
}
