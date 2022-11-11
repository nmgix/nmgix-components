const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "storybook-addon-sass-postcss",
      options: {
        loadSassAfterPostCSS: true,
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
        rule: {
          test: /\.(scss|sass)$/i,
        },
      },
    },
  ],
  // webpackFinal: async (config, { configType }) => {

  //   return config;
  // },
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
