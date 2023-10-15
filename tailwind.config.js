/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				fg: '#fefefe',
				bg: '#141d30',
				acc: '#FF95D1',
			},
			fontFamily: {
				hero: ['Mooli', 'sans-serif'], // Define 'Mooli' as the font family
			},
		},
	},
	plugins: [],
}
