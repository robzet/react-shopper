import ESLintPlugin from 'eslint-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin'
import webpack, { Configuration } from 'webpack'
import packageJson from './package.json'

const webpackConfig = (env): Configuration => ({
  entry: './src/index.tsx',
  ...(env.production || !env.development ? {} : { devtool: 'eval-source-map' }),
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TsconfigPathsPlugin()]
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        },
        exclude: /dist/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.PRODUCTION': env.production || !env.development,
      'process.env.NAME': JSON.stringify(packageJson.name),
      'process.env.VERSION': JSON.stringify(packageJson.version)
    }),
    new ForkTsCheckerWebpackPlugin(),
    new ESLintPlugin({ files: './src/**/*.{ts,tsx,js,jsx}' })
  ]
})

export default webpackConfig
