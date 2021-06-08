const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);

module.exports = {
  mode: `development`,
  entry: [`./src/index.tsx`],
  output: {
    filename: `[name].[contenthash].js`,
    path: path.join(__dirname, `public`)
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    publicPath: `/`,
    open: false,
    port: 3003,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      },
      {
        test: /\.(tsx|ts)?$/,
        loader: `ts-loader`,
        exclude: /node_modules/
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, `./src/index.html`),
      filename: `index.html`
    }),
  ],
  resolve: {
    extensions: [`.ts`, `.tsx`, `.js`, `.jsx`, `json`]
  },
  devtool: `source-map`
};
