import webpack from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { buildRules } from "./buildRules";
import { BuildOptions } from "./types/config";


export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths } = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      path: paths.build,
      filename: "index.js",
    },
    module: {
      rules: buildRules(),
    },
    resolve: buildResolvers(),
    plugins: buildPlugins(options),
  }
}