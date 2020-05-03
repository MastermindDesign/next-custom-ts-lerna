const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devtool: "source-map",
    entry: './src/index.tsx',
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.join(__dirname + "/dist/index.html"),
            template: path.join(__dirname + "/src/index.template.html")
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                loader: 'ts-loader',
                include: path.resolve(__dirname, "src"),
                options: {
                    configFile: path.resolve(__dirname, 'tsconfig.app.json')
                }
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    watch: true
}