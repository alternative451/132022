const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

const { statSync, existsSync } = require("fs")
const ZipPlugin = require("zip-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")

const outPath = "./dist/main.js"


module.exports = (env, argv) => ({
    devtool: console.log(argv),
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            parallel: true,
        })],
    },
    module: {
        rules: [
            {
                test: /\.(glsl)|(frag)|(vert)$/,
                loader: 'webpack-glsl-loader',
            },
            {
                test: /\.js/,
                use: [{
                        loader: "@13k/rollup-loader",
                        options: {
                            mode: argv.mode,
                        }
                    },
                    {
                        loader: "webpack-replace",
                        options: {
                            search: '%SIZE%',
                            replace: existsSync(outPath) ? statSync(outPath).size : -1,
                        }
                    }]
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "./public/index.html", to: "./index.html" },
            ],
        }),
        new ZipPlugin({
            include: [/\.js$/, /\.html$/],
            filename: "js13k",
            }
        ),

    ],
});
