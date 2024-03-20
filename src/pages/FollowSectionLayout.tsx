import FollowSection from 'components/follow/FollowSection'
import type { ReactElement } from 'react'
import { Outlet } from 'react-router-dom'

export default function FollowSectionLayout(): ReactElement {
	return (
		<div className='flex w-full'>
			<div className='grow'>
				<Outlet />
			</div>
			<div className='hidden 2xl:block'>
				<FollowSection />
			</div>
		</div>
	)
}
