/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        accentGreen: '#D0F224',
        darkNavy: '#1C1C2E',
        sidebarText: '#FFFFFF',
        dashboardBg: '#F7F7FA',
        cardWhite: '#FFFFFF',
        blackText: '#0F0F10',
        grayText: '#6F6F76',
        grayBorder: '#E5E5EA',
        chartBar: '#1F1F26',
        blueStatus: '#D4E3FF',
        blueText: '#2B57E5',
        greenStatus: '#E0F7E9',
        greenText: '#34A853',
        yellowStatus: '#FFF4CC',
        yellowText: '#FFB300',
        purpleIcon: '#B49CFF',
        chartLineGlow: '#99CC33',
      },
    },
  },
  plugins: [],
}

