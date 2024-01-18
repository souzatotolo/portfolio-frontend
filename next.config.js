// next.config.js
module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|pdf)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'static',
            name: '[name].[ext]',
          },
        },
      ],
    });

    return config;
  },
};
