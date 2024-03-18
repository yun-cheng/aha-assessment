import { createTheme } from '@mui/material/styles'

const theme = createTheme({
	palette: {
		mode: 'dark'
	},
	typography: {
		fontFamily: [
			'Ubuntu',
			'Open Sans Variable',
			'Helvetica',
			'Arial',
			'sans-serif'
		].join(',')
	}
})

export default theme
