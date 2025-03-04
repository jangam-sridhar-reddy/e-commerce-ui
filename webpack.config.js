module.exports = function (config, options) {
    console.log(`Using '${config.mode}' mode sri`);
    debugger;
    config.module.rules.push({
      test: [/\\tailwind.scss$/, /\.tw.scss/],
      use: [
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [
                require("tailwindcss")("./tailwind.config.js"),
                require("postcss-nested"),
              ],
            },
          },
        },
      ],
    });
    return config;
  };
  