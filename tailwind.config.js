module.exports = {
  content: [
    "./pages/**/*.js",
    "./components/**/*.jsx"
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      "tablet-gothic": ["tablet-gothic"],
      "minerva-modern": ["minvera-modern"],
      "roboto": ["roboto"],
      "termina": ["termina, sans-serif"]
    },
    extend: {
      colors: {
        badge: {
          success: "#2D9D78",
          pending: "#E68619",
          error: "#E34850",
          buy: "#407BFF",
          sell: "#7F45FF",
        },
        neutral: {
          50: "#F0F0F0",
          60: "#F9F9FB",
          100: "#E4E4E4",
          150: "#D7D7D7",
          200: "#CBCBCB",
          250: "#BEBEBE",
          300: "#B2B2B2",
          350: "#A5A5A5",
          400: "#999999",
          450: "#8C8C8C",
          500: "#808080",
          550: "#737373",
          600: "#676767",
          650: "#5A5A5A",
          700: "#4E4E4E",
          750: "#414141",
          800: "#353535",
          850: "#282828",
          860: "#0E0E0E",
          900: "#1C1C1C",
          1000: "#39B990"
        },
        error: {
          50: "#E34850",
        },
      },
    },
    fontSize: {
      12: ['0.75rem', {
        lineHeight: '150%',
        letterSpacing: '0rem',
      }],
      14: ['0.875rem', {
        lineHeight: '150%',
        letterSpacing: '0rem'
      }],
      16: ['1rem', {
        lineHeight: '150%',
        letterSpacing: '0rem'
      }],
      21: ['1.3125rem', {
        lineHeight: '150%',
        letterSpacing: '0rem'
      }],
      24: ['1.5rem', {
        lineHeight: '150%',
        letterSpacing: '0rem'
      }],
      28: ['1.75rem', {
        lineHeight: '140%',
        letterSpacing: '0rem'
      }],
      30: ['1.875rem', {
        lineHeight: '140%',
        letterSpacing: '0rem'
      }],
      32: ['2rem', {
        lineHeight: '140%',
        letterSpacing: '0rem'
      }],
      38: ['2.375rem', {
        lineHeight: '130%',
        letterSpacing: '0rem'
      }],
      40: ['2.5rem', {
        lineHeight: '140%',
        letterSpacing: "-0.01em"
      }]
    },
  },
  variants: {
    extend: {
      borderStyle: ['responsive', 'hover'],
      borderWidth: ['responsive', 'hover'],
      borderColor: ['responsive', 'hover']
    },
  },
  plugins: [],
};