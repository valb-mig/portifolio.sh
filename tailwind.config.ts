import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend:{
      fontFamily: {
        sans: ['Graphik', 'sans-serif']
      },
      colors: {
        'default': '#100E14',
        shade: {
          '1': '#39373E',
          '2': '#2B2930',
          '3': '#1D1B22',
          '4': '#151319',
        },
        foreground: {
          '1': '#F5F5F5',
          '2': '#DAD9DC',
          '3': '#CFCDD3',
          '4': '#B9B4C0',
          '5': '#A7A2B1'
        },
        'primary': '#5B24D3',
      },
    },
  },
  plugins: [],
};

export default config;