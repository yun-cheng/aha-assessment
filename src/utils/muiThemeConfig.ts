import { createTheme } from '@mui/material/styles'

const theme = createTheme({
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
