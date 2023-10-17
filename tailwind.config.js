/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				fg: '#CDE6F5',
				bg: '#2D3142',
				acc: '#F25F5C',
			},
			fontFamily: {
				hero: ['Playfair Display', 'serif'],
				regular: ['Roboto', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
