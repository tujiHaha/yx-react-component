const path = require('path')
const fs = require('fs')

const fromFileName = path.resolve(__dirname, './dist-package.json')

const toFileName = path.resolve(__dirname, './dist/package.json')

fs.copyFile(fromFileName, toFileName, 0, () => {
  console.log('复制完成')
})