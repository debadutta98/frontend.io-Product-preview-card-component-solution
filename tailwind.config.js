/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundColor:{
        back: "#F9F5EB",
        btncol:'#116530'
      },
      colors:{
        leafcolor:"#116530"
      },
      fontFamily:{
        heading: ["Vollkorn"],
        small: ["Merriweather"],
        num: ["GFS Didot"],
        mid:["Scada"]
      },
      width:{
        "45":"45%",
        "40":"40%",
        "100":"30rem",
        "110":"32rem"
      },
      content:{
        mobile:'url("/images/image-product-mobile.jpg")',
        desktop:'url("/images/image-product-desktop.jpg")'
      }
    },
  },
  plugins: [],
}
