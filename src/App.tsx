import type { ReactElement } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
	{
		path: '/',
		lazy: async () => {
			const HomePage = await import('pages/HomePage')
			return { Component: HomePage.default }
		}
	}
])

export default function App(): ReactElement {
	return <RouterProvider router={router} />
}
