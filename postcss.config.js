module.exports = {
  plugins: [
    require('postcss-import')({
      path: ['assets/css', './']
    }),
    require('autoprefixer')({
      overrideBrowserslist: [
        'last 15 versions',
        '> 1%',
        'ie >= 11',
        'not dead'
      ],
      grid: 'autoplace',
      flexbox: true,
      cascade: true
    }),
    require('cssnano')({
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true
          },
          normalizeWhitespace: true,
          colormin: true,
          convertValues: true
        }
      ]
    })
  ]
};
