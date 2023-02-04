import webpack from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { buildRules } from "./buildRules";
import { BuildOptions } from "./types/config";


export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths } = options;
  return {
    mode,
    entry: paths.entry,
    devtool: 'inline-source-map',
    output: {
      path: paths.build,
      filename: "index.js",
    },
    module: {
      rules: buildRules(),
    },
    resolve: buildResolvers(),
    plugins: buildPlugins(options),
    devServer: buildDevServer(options),
  }
}