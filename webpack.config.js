module.exports = {
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}