const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.join(__dirname + "/dist/index.html"),
            template: path.join(__dirname + "/src/index.template.html")
        })
    ],
    watch: true
}