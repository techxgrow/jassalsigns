/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
        'dmsans': ['DM Sans', 'sans-serif'],
        'grotesk': ['Space Grotesk', 'sans-serif'],
        'satisfy': ['Satisfy', 'cursive'],
      },
    },
  },
  plugins: [],
}
