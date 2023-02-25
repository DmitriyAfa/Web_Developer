import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildOptions } from './config/build/types/config';


export default (env: BuildEnv) => {
  const PORT = env.port || 3000;
  const mode = env.mode || "development";

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
    port: PORT,
  }

  const config: webpack.Configuration = buildWebpackConfig(options)

  return config;
};
