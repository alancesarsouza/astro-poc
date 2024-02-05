/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	
	theme: {
    colors: {
			primary: "#0066ff",
			secondary: "#f1f1f1",
			hover: "#002288",
			link: "#515171",
			'link-hover': "#212161",
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
	plugins: [
    require('@tailwindcss/typography'),
  ],
}
