import withMT from '@material-tailwind/react/utils/withMT'

export default withMT({
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
      },
      colors: {
        accent: {
          dark: '#0F171E',
          dhover: '#0D1A4E',
          light: '#FFFFFF'
        },
        primary: {
          dark: '#1C37A5',
          light: '#A5B2E9'
        },
        grey: {
          dark: '#8291A1',
          light: '#DEE7EE'
        }
      }
    }
  },
  plugins: []
})
