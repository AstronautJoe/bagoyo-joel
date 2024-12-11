To build:
run
`npm create vite@latest .`

- Install these as dev dependencies:
tailwindcss: main CSS framework that allows you to use utility-first classes for styling your project.
PostCSS: A tool for processing CSS, which Tailwind uses under the hood to compile your styles.
Autoprefixer: A plugin for PostCSS that ensures your CSS works on all major browsers by adding necessary vendor prefixes (like -webkit- or -moz-).
`npm install -D tailwindcss postcss autoprefixer`

- run to generate a tailwind.config.js file in your project directory.
`npx tailwindcss init`

- insert this in tailwind.config.js
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'], // Tailwind scans these files for class names
  theme: {
    // Use this to add customizations
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Add modern font family
      },
    },
  },
  plugins: [], // Add Tailwind plugins here if needed
};
```

- manually create in frontend root directory
postcss.config.cjs

- insert these:
```
module.exports = {
  plugins: {
    tailwindcss: {}, // Enables Tailwind CSS processing
    autoprefixer: {}, // Adds vendor prefixes for browser compatibility
  },
};
```
- install daisyui
`npm install daisyui`

- update tailwind.config.js
```
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Add modern font family
      },
    },
  },
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
```
- Change index.css to contain these:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- make sure to include the right filepath for files where you will apply tailwind classnames in this part of tailwind.config.js:
`content: ['./src/**/*.{js,ts,jsx,tsx}'],`
