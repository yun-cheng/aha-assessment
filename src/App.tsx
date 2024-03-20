import RootLayout from 'pages/RootLayout'
import type { ReactElement } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
	{
		Component: RootLayout,
		children: [
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
			},
			{
				path: '/tags',
				lazy: async () => {
					const TagsPage = await import('pages/TagsPage')
					return { Component: TagsPage.default }
				}
			}
		]
	}
])

export default function App(): ReactElement {
	return <RouterProvider router={router} />
}
