import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from "./types/config";

export function buildRules({ isDev }: BuildOptions): RuleSetRule[] {

  const typescriptRules = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  }

  const styleLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            //в поле auto функция принимает путь до файла и проверяет есть ли
            //расширение .module.scss 
            // в этом случае модули будут применяться
            auto: (resPath: string) => Boolean(resPath.includes('.module.scss')),
            /**
             * Делаем чтобы в продакшн сборке были автосгенерированные названия
             * а в дев сборке обычные названия
             */
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
          },
        },
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  }

  return [typescriptRules, styleLoader]
}