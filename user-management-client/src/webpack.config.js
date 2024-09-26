const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      "zlib": false,
      "querystring": false,
      "path": false,
      "crypto": false,
      "fs": false,
      "http": false,
      "stream": false,
      "url": false,
      "buffer": false,
      "net": false,
      "util": false
    }
  }
};
