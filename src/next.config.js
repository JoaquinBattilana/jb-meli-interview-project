require('dotenv').config();
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssModules: true,
  env: {
    PORT: process.env.PORT
  }
});
