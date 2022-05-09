const path = require('path')
const fs = require('fs')
const fromFileName = path.resolve(__dirname, './dist-package.json')
const toFileName = path.resolve(__dirname, './dist/package.json')
const fromReadme = path.resolve(__dirname, './README.md')
const toReadme = path.resolve(__dirname, './dist/README.md')

fs.copyFileSync(fromFileName, toFileName, 0)
fs.copyFileSync(fromReadme, toReadme, 0)
console.log('复制完成')