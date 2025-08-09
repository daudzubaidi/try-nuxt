module.exports = {
  content: [
    './app/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        tealPrimary: '#0ea5a3', // main teal
        tealDark: '#0b7c78',
        tealLight: '#d9f6f6'
      },
      borderRadius: {
        'xl-2': '24px'
      }
    }
  },
  plugins: []
}
