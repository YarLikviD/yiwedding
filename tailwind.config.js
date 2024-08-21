import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{js,ts,twig}',
	],
	theme: {
		extend: {
			backgroundImage: {
				checkbox: 'linear-gradient(0deg, rgba(255,255,255,1) 60%, rgba(0,0,0,0.2) 100%)'
			},
			fontFamily: {
				'sans': ['"Cormorant"', ...defaultTheme.fontFamily.sans],
				'bad-script': ['"Bad Script"', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
