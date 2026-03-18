# Install Vite

npm create vite@latest my-react-app

Framework: React
Variant: JavaScript

# Install TailwindCSS

npm install -D tailwindcss@3 postcss autoprefixer

## Manually create config file in root (if it matches, it will automatically create the files)

tailwind.config.js

npx tailwindcss init -p

These will appear:
tailwind.config.js
postcss.config.js

## Change Content Section

export default {
content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
extend: {},
},
plugins: [],
}

## Replace App.css

@tailwind base;
@tailwind components;
@tailwind utilities;

## Import CSS

main.jsx has this:
import './index.css'
