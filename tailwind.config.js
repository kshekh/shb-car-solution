/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
const config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
				sans: ['"Satoshi"', ...defaultTheme.fontFamily.sans],
				craftwork: ["'Craftwork Grotesk'", ...defaultTheme.fontFamily.sans],
				'dm-sans': ["'DM Sans'", ...defaultTheme.fontFamily.sans]
			},
      colors: {
				// Main Background color
				primary:{
					DEFAULT: '#EB6128',
					'2': '#2B3240',
			},
			grey:{
				DEFAULT: '#486284',
				2: '#EFF2F6',
				3: '#656E79'
			},
			 
			},
      backdropBlur: {
        xs: '2px',
      },
	  minWidth: (theme) => ({
		...theme('spacing')
	}),

	minHeight: (theme) => ({
		...theme('spacing')
	}),
    },
    screens: {
			mv: '360px',
			// => @media (min-width: 480px) { ... }

			xs: '480px',
			// => @media (min-width: 480px) { ... }

			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			ml: '992px', // Medium Large
			// => @media (min-width: 992px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			sl: '1199px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }

			'3xl': '1921px',
			// => @media (min-width: 1920px) { ... }

      wrap: '1560px',
      // => @media (min-width: 1480px) { ... }
		}
  },
  plugins: [
	require('@tailwindcss/forms'),
  ],
};
module.exports = config;