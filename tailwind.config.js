/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors:{
        blue:'rgb(82, 86, 189)',
        'blue-secondary':'rgb(87, 76, 219)',
        'blue-variant':'rgb(82, 86, 189, 0.5)',
        'blue-transparent':'rgb(82, 86, 189, 0.2)',
        dark:"rgb(36, 36, 36)",
			  "dark-secondary":"rgb(52, 50, 51)",
			  "dark-variant":"rgb(52, 50, 51, 0.5)",
			  "dark-transparent":"rgba(36, 36, 36, 0.2)",
        gray:"rgb(163, 163, 163)",
			  "gray-transparent":"rgba(143, 143, 143, 0.2)",
        light:"rgb(253, 253, 253)",
			  "light-variant":"rgba(255, 255, 255, 0.7)",
			  "light-transparent":"rgba(255, 255, 255, 0.1)",
      }
    },
  },
  plugins: [],
}

