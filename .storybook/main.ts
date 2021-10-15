const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  addons: ['@storybook/addon-actions', '@storybook/addon-essentials'],
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  webpackFinal: async (config) => {
    config.resolve.plugins.push(new TsconfigPathsPlugin({}));
    return config;
  },
};
