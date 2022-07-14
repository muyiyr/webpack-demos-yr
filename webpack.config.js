const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const toml = require("toml");
const yaml = require("yamljs");
const json5 = require("json5");

// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  //项目入口文件
  //输出
  output: {
    filename: "[name].bundle.js", //打包后js的名称
    path: resolve(__dirname, "dist"), //打包输出到当前路径的build文件夹中
    clean: true,
    publicPath: "/", //注意此处，是服务器下资源引用的根目录
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
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ["csv-loader"],
      },
      {
        test: /\.xml$/i,
        use: ["xml-loader"],
      },
      {
        test: /\.toml$/i,
        type: "json",
        parser: {
          parse: toml.parse,
        },
      },
      {
        test: /\.yaml$/i,
        type: "json",
        parser: {
          parse: yaml.parse,
        },
      },
      {
        test: /\.json5$/i,
        type: "json",
        parser: {
          parse: json5.parse,
        },
      },
    ],
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },

  plugins: [
    new HtmlWebpackPlugin({ title: "Development" }),
    // new BundleAnalyzerPlugin(),
  ], //插件配置
  mode: "development", //开发模式(开发模式和生产模式),
  // devtool: "cheap-source-map",
};
