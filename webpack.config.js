module.exports = {
  entry: __dirname + "/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  devtool: "source-map",
  mode: "development",
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
        {test: /\.tsx?/, loader: 'awesome-typescript-loader'},
        {test: /\.js/, enforce: 'pre', loader: 'source-map-loader'}
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }

}