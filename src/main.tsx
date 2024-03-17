import { ThemeProvider } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from 'App'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import theme from 'utils/muiThemeConfig'
import { registerSW } from 'virtual:pwa-register'
import './index.css'

registerSW()

const MAX_RETRIES = 1
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Number.POSITIVE_INFINITY,
			retry: MAX_RETRIES
		}
	}
})

const container = document.querySelector('#root')
if (container) {
	const root = createRoot(container)
	root.render(
		<StrictMode>
			<ThemeProvider theme={theme}>
				<QueryClientProvider client={queryClient}>
					<App />
				</QueryClientProvider>
			</ThemeProvider>
		</StrictMode>
	)
}
