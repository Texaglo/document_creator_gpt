const path = require('path');

module.exports = {
  reactStrictMode: true,
  // Add any other valid configuration options as needed

  webpack: (config, { isServer }) => {
    // Custom webpack configuration, including fixing empty loader strings
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.use && rule.use.loader && typeof rule.use.loader === 'string' && rule.use.loader.trim() === '') {
        rule.use.loader = null;
      }
      return rule;
    });

    config.module.rules = config.module.rules.filter((rule) => rule.use && rule.use.loader !== null);

    // Add support for TypeScript files
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: 'babel-loader',
      options: {
        presets: ['next/babel'],
      },
    });

    // Add support for CSS files
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    });

    // Add alias for '@swc/helpers/src/_define_property.mjs'
    config.resolve.alias['@swc/helpers/src/_define_property.mjs'] = path.resolve(
      __dirname,
      'node_modules/@swc/helpers/src/_define_property.js'
    );

    return config;
  },
};
