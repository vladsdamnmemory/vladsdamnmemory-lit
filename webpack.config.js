const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src/'),
    devtool: 'inline-source-map',
    entry: './index.ts',
    mode: 'production',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: [{
                loader: "babel-loader",
                options: {
                    // presets: ["@babel/env"],
                    plugins: ["@babel/plugin-transform-typescript"]
                }
            },
            ],
            exclude: /node_modules/
        }]
    },
    output: {
        library: 'lit',
        filename: 'index.js',
        path: path.resolve(__dirname, 'lit/browser')
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    }
};