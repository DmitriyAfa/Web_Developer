import webpack from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { buildRules } from "./buildRules";
import { BuildOptions } from "./types/config";


export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths, isDev } = options;
  return {
    mode,
    entry: paths.entry,
    devtool: isDev ? 'inline-source-map' : undefined,
    output: {
      path: paths.build,
      filename: "[name].[hash].js",
      clean: true
    },
    module: {
      rules: buildRules(options),
    },
    resolve: buildResolvers(options),
    plugins: buildPlugins(options),
    devServer: isDev ? buildDevServer(options) : undefined,
  }
}