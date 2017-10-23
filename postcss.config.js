
// https://github.com/michael-ciniawsky/postcss-load-config
module.exports = function (ctx) {
  let pxtorem =
    require('postcss-pxtorem')({
      rootValue: 37.5,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0
    })
  let config = {
    plugins: [
      pxtorem
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
        pxtorem,
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

