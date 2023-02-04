import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildOptions } from './config/build/types/config';

const mode = "development";

const isDev = mode === "development";

const paths = {
  entry: path.resolve(__dirname, './src', 'index.ts'),
  build: path.resolve(__dirname, './build'),
  html: path.resolve(__dirname, "./public", "index.html"),
}

const options: BuildOptions = {
  mode,
  paths,
  isDev,
}

const config: webpack.Configuration = buildWebpackConfig(options)

export default config;
