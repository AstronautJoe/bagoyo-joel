npm install react-router-dom

npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init

change src/index.css to include the following;
@tailwind base;
@tailwind components;
@tailwind utilities;

update tailwind config.js to include the following:
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};