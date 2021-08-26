// import
const path = require('path')  // path 전역 모듈
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// export
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js',

  // 결과물(Bundle)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js',
    clean: true  // 새롭게 build 했을 때, 기존에 필요하지 않은 파일을 제거
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,  // css로 끝나는 파일
        use: [
          'style-loader',  // HTML의 style 태그에 해석된 내용을 삽입하는 용도
          'css-loader',  // Javascript에서 css파일을 해석하는 용도
          'postcss-loader',  // sass-loader롤 통해 해석된 내용에 공급업체 접두사를 적용하는 용도
          'sass-loader'  // Webpack에서 scss파일을 읽어내는 용도
        ]
      },
      {
        test: /\.js$/,  // .js로 끝나는 파일
        use: [
          'babel-loader'  // Webpack에서 js파일을 읽어내는 용도
        ]
      }
    ]
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' }
      ]
    })
  ],
  devServer: {
    host: 'localhost'
  }
}