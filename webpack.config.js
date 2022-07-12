const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
module.exports = {
  entry: "./src/index.js", //项目入口文件
  //输出
  output: {
    filename: "bundle.js", //打包后js的名称
    path: resolve(__dirname, "dist"), //打包输出到当前路径的build文件夹中
    // publicPath: "/", //注意此处，是服务器下资源引用的根目录
  },
  //loader配置规则
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    // new HtmlWebpackPlugin({ template: "./index.html" }),
    // new BundleAnalyzerPlugin(),
  ], //插件配置
  mode: "development", //开发模式(开发模式和生产模式),
  // devtool: "cheap-source-map",
};
