'use strict'

const path = require('path')
// This is a custom Jest transformer turning style imports into empty objects.
// http://facebook.github.io/jest/docs/en/webpack.html

module.exports = {
    process(src, filename) {
        const assetFilename = JSON.stringify(path.basename(filename))
        
        return {
            code: assetFilename,
        }
      },
  getCacheKey() {
    // The output is always the same.
    return 'cssTransform'
  },
}