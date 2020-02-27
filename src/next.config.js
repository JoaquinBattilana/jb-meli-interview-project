require('dotenv').config();
const withSass = require('@zeit/next-sass');
const withGlobalSassFiles = require('~webpack/globalSassFiles');

module.exports = withSass(
  withGlobalSassFiles({
    cssModules: true,
    env: {
      PORT: process.env.PORT
    }
  })
);
