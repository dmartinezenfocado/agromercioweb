/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'main-brown': '#e1c766',
				'brown-meli': '#303126',
				'gray-meli': '#333',
				'background-meli': '#ebebeb'
			},
			backgroundImage: {
				'logo-large':
					"url('https://enfoco.com.do/test/apps/logoagromercio.png')",
				'logo-small':
					"url('https://enfoco.com.do/test/apps/logoagromercio.png')",
				promo:
					"url('https://http2.mlstatic.com/D_NQ_840611-MLA48934732318_012022-OO.webp')"
			},
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
				'open-sans': ['Open Sans', 'sans-serif']
			},
			maxWidth: {
				homescreen: '1184px'
			}
		}
	},
	plugins: []
}
