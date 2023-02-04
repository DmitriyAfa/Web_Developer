import { RuleSetRule } from "webpack";

export function buildRules(): RuleSetRule[] {

  const typescriptRules = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  }

  return [typescriptRules]
}