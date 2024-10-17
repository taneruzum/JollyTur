export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#0065FF",
        customBlue2:"#28374F",
        customBlue3:'#0065B8',
        customBlue4:'#F3F9FF',


        customGreen:"#2FA252",
        customGreen2:"#DFFCE9",
        customGreen3:'#79D194',


        customDark:"#666666",
        customDark2:"#DDDDDD",
        customDark3:'#333333',


 
      },
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif'],
      },
    },
    screens: {
      // Daha küçük ekranlar (mobil cihazlar) için
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      // Ekstra büyük ekranlar için
      "3xl": "1920px",
    },
  },
  plugins: [],
}
