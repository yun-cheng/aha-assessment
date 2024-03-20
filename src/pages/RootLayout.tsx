import NavBar from 'components/common/NavBar/NavBar'
import type { ReactElement } from 'react'
import { Outlet } from 'react-router-dom'

export default function RootLayout(): ReactElement {
	return (
		<div className='sm:flex'>
			<NavBar />
			<Outlet />
		</div>
	)
}
