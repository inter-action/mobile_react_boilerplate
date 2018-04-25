
// https://github.com/michael-ciniawsky/postcss-load-config
// https://www.w3cplus.com/mobile/vw-layout-in-vue.html
module.exports = function (ctx) {
  let pxToViewPort = require('postcss-px-to-viewport')({
    viewportWidth: 375, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750 
    viewportHeight: 667, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置 
    unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除） 
    viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用 vw 
    selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名 
    minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值 
    mediaQuery: false // 允许在媒体查询中转换`px`著作权归作者所有。
  });


  let config = {
    plugins: [
      pxToViewPort
    ]
  }

  if (ctx.env === 'production') {
    config = {
      plugins: [
        require('autoprefixer')({
          browsers: [
            'last 3 version',
            'ie >= 11',
          ],
        }),
        pxToViewPort,
        require('cssnano')(
          {
            preset: 'default',
          }
        )
      ]
    }
  }
  return config
}

