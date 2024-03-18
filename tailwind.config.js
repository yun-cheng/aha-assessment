const defaultConfig = require('tailwindcss/defaultConfig')
const formsPlugin = require('@tailwindcss/forms')

/** @type {import('tailwindcss/types').Config} */
const config = {
	important: true,
	content: ['index.html', 'src/**/*.tsx'],
	theme: {
		fontFamily: {
			sans: ['Ubuntu', ...defaultConfig.theme.fontFamily.sans]
		},
		extend: {
			colors: {
				background: '#181818',
				'near-black': '#121212'
			},
			screens: {
				'2xl': '1440px'
			},
			letterSpacing: {
				15: '.15px',
				25: '.25px',
				40: '.4px'
			}
		}
	},
	experimental: { optimizeUniversalDefaults: true },
	plugins: [formsPlugin]
}
module.exports = config
