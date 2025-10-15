var path = require('path');

module.exports = {
    mode: 'none',
    entry: './src/cart.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
};