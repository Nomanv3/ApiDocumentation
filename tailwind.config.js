module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1976d2',
        secondary: '#4caf50',
        healthcare: {
          blue: '#1976d2',
          green: '#4caf50',
          light: '#f5f5f5',
          dark: '#333333'
        }
      },
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}