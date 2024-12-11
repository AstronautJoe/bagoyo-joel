/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'], // Tailwind scans these files for class names
  theme: {
    // Use this to add customizations
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Add modern font family
      },
    },
  },
  // Add Tailwind plugins here if needed
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#2D3748', // Dark gray for primary UI elements
          secondary: '#A0AEC0', // Cool gray for secondary UI elements
          accent: '#38B2AC', // Teal for accent highlights
          neutral: '#EDF2F7', // Light gray for neutral backgrounds
          'base-100': '#FFFFFF', // Clean white for base
          'base-content': '#1A202C', // Dark gray for text
          info: '#3182CE', // Muted blue for information
          success: '#48BB78', // Fresh green for success messages
          warning: '#D69E2E', // Warm yellow for warnings
          error: '#E53E3E', // Soft red for errors
        },
      },
    ],
  },
};
