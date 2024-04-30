/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'tiny': '340px'
			},
			colors: {
				'primary': "#000088",
				'light': "#ffffff",
				'dark': "#000000"
			}
		},
	},
	plugins: [],
}
