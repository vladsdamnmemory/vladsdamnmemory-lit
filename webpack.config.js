const path = require('path');

module.exports = {
    entry: './js/index.js',
    mode: "production",
    output: {
        filename: 'lit.js',
        path: path.resolve(__dirname, 'dist'),
    },
};