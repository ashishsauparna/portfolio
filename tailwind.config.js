/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'albert-sans': ['var(--font-albert-sans)', 'sans-serif'],
        'alegreya': ['var(--font-alegreya)', 'serif'],
        'space-gothic': ['var(--font-space-gothic)', 'sans-serif'],
        'abc-whyte': ['var(--font-abc-whyte)', 'sans-serif'],
        'offbit': ['var(--font-offbit)', 'monospace'],
        'recoleta': ['var(--font-recoleta)', 'serif'],
        'noto-serif': ['var(--font-noto-serif)', 'serif'],
      },
    },
  },
  plugins: [],
}
