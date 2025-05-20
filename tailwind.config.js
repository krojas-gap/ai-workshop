// tailwind.config.js
module.exports = {
  content: [
    './app.vue',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DB4444',
        black: '#000000',
        white: '#FFFFFF',
        'star-yellow': '#FFAD33',
        'success-green': '#00FF66',
        'light-gray': '#F5F5F5',
        'dark-gray': '#1C1B1F',
        'border-gray': '#D9D9D9',
        'text-gray': '#7D8184',
        'off-white': '#FAFAFA',
        'accent-blue': '#A0BCE0',
        'accent-red': '#E07575',
        'bright-red': '#FB1314',
        yellow: '#EEFF61',
        'dark-green': '#184A48',
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
        '3xl': '64px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '16px',
          sm: '16px',
          md: '24px',
          lg: '32px',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
    },
  },
  plugins: [],
};
