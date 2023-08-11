const {nextui} = require("@nextui-org/react");


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        '2xl': {  min: '962px', max: '1034px'  },
        'xl': {  min: '895px', max: '961px'  },
        'lg': { min: '635px', max: '894px' },
        'md': { max: '767px' },
        'sm': { max: '639px' },
        // '@md': { min: '640px', max: '767px' },
        // '@lg': { min: '768px', max: '1023px' },
        // '@xl': { min: '934px', max: '1034px' },
        // '@2xl': { min: '634px', max: '834px' },
      },
      transformOrigin: {
        "0": "0%",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  plugins: [nextui()],
}
