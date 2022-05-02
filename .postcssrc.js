module.exports = {
  "plugins": {
    "postcss-import": {}, // 主要功有是解决@import引入路径问题
    "postcss-url": {}, //主要用来处理文件，比如图片文件、字体文件等引用路径的处理
    "postcss-aspect-ratio-mini": {}, // 处理元素容器的宽高比
    "postcss-write-svg": {
      utf8: false
    }, // 解决移动端1px
    "postcss-cssnext": {}, // css的未来新特性
    "postcss-px-to-viewport": {
      viewportWidth: 750, //视窗的宽度，对应的是我们设计稿的宽度，一般是750
      viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
      unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
      selectorBlackList: ['.ignore', '.hairlines', '.pad-ig', '.iphone-x'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: true // 允许在媒体查询中转换`px`
    },
    "postcss-viewport-units": {}, //插件主要是给CSS的属性添加content的属性，配合viewport-units-buggyfill库给vw、vh、vmin和vmax做适配的操作
  }
}