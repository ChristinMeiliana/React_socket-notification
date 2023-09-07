// webpack.config.js

module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              throwIfNamespace: false, // Set this to false to bypass the namespace warning
            },
          },
          "file-loader", // You may use file-loader or other loaders depending on your needs
        ],
      },
      // Other rules for different file types...
    ],
  },
  // ...
};
