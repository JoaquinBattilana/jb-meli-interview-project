const path = require('path');

module.exports = (nextConfig = {}) => ({
  ...nextConfig,
  webpack(config) {
    config.module.rules.push({
      test: /\.scss$/,
      use: [{ loader: 'sass-loader', options: { includePaths: [path.resolve(__dirname, './scss')] } }]
    });
  }
});
