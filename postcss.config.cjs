// postcss.config.cjs (CommonJS syntax)
module.exports = {
  plugins: [
    require('@tailwindcss/postcss'),  // Use @tailwindcss/postcss here
    require('autoprefixer'),           // Add autoprefixer if you want it
  ],
};
