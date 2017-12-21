'use strict'
const path = require('path')
const glob = require('glob')
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const packageConfig = require('../package.json')

exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}
// --------------------------------------------多页配置

// 文件分离
exports.getEntries = (Path, type) => {
  let pathDir = Path,
    entry, // 文件完整路径
    dirName, // 传入的文件夹路径
    baseName, // 文件名
    pathName, // 文件夹路劲
    relativeName, // 键名所需,相对传入文件地址路径
    extName // 文件格式

  const files = glob.sync(`${Path}/${type}`)
  const entries = {}
  for (const i in files) {
    entry = files[i]
    extName = path.extname(entry)
    dirName = path.dirname(entry)
    baseName = path.basename(entry, extName)
    pathName = path.normalize(path.join(dirName, baseName))
    pathDir = path.normalize(pathDir)

    // 逻辑部分
    relativeName = path.relative(pathDir, dirName)
    pathName = path.basename(pathName)
    if (relativeName.includes('\\') || relativeName.includes('\/')) {
      continue
    }
    else {
      if (extName === '.html') {
        entries[relativeName] = entry
      }
      else if (pathName === 'index') {
        entries[relativeName] = [entry]
      }
    }
  }
  return entries
}

// 创建多页
exports.createPages = (plugins, pages) => {
  Object.keys(pages).map(key => {
    // 配置生成的html文件，定义路径等
    const conf = {
      filename: key + '.html',
      template: pages[key],
      inject: true,
      chunks: ['vendor', 'manifest', key]
    }
    /* if (!isDev) {
      conf.minify = {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    } */
    plugins.push(new HtmlWebpackPlugin(conf))
  })
}