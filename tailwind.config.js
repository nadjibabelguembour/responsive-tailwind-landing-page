/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./**/*.{html,js}"],
  
  theme: {
    screens:{
      sm:'480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
      
    },
    extend: {
     
      backgroundImage: {
        'bodyBG': "url('../images/3.png')",
      
        
      }
    },
  },
  plugins: [],
}
