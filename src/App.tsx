import type { ReactElement } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
	{
		lazy: async () => {
			const FollowSectionLayout = await import('pages/FollowSectionLayout')
			return { Component: FollowSectionLayout.default }
		},
		children: [
			{
				path: '/',
				lazy: async () => {
					const HomePage = await import('pages/HomePage')
					return { Component: HomePage.default }
				}
			}
		]
	}
])

export default function App(): ReactElement {
	return <RouterProvider router={router} />
}
