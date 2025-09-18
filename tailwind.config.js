/** @type {import('tailwindcss').Config} */
export default {
   content: ['./src/**/*.{js,jsx,ts,tsx}'],
   theme: {
      extend: {
         fontFamily: {
            heading: ["DM Serif Text", "serif"],
            menu: ['IBM Plex Mono', 'monospace'],
            body: ['Newsreader', 'serif']
         }
      },
   },
   plugins: [],
};
