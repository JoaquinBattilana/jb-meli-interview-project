require('dotenv').config();
const withSass = require('@zeit/next-sass');
const withImageLoader = require('next-images');

module.exports = withImageLoader(
  withSass({
    cssModules: true,
    env: {
      PORT: process.env.PORT
    },
    sassLoaderOptions: {
      sassOptions: {
        includePaths: ['src/scss']
      }
    }
  })
);
