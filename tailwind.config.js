/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				fg: 'var(--fg)',
				bg: 'var(--bg)',
				acc: 'var(--acc)',
				darkSecondary: 'var(--darkSecondary)',
				accSecondary: 'var(--accSecondary)',
				fgSecondary: 'var(--fgSecondary)',
			},
			fontFamily: {
				hero: ['Playfair Display', 'serif'],
				regular: ['Roboto', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
