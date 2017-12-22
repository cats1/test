function setDateFormat (str, join, t) {
  let time = str === '' ? new Date() : new Date(str)
  let y = time.getFullYear()
  let mon = time.getMonth() + 1
  let d = time.getDate()
  let h = time.getHours()
  let m = time.getMinutes()
  let s = time.getSeconds()
  if (t === 0) {
    return y + join + mon + join + d
  } else if (t === 1) {
    return y + join + mon + join + d + '' + h
  } else if (t === 2) {
    return y + join + mon + join + d + '' + h + ':' + m
  } else if (t === 3) {
    return y + join + mon + join + d + '' + h + ':' + m + ':' + s
  } else if (t === 4) {
    return y
  } else {
    return y
  }
}

function getYear (s, on, t) {
  return setDateFormat(s, on, t)
}

function checkIsBlank (s) {
  if (s === '' || s === undefined || s === null) {
    return ''
  } else {
    return s
  }
}

function getPageJson () {
  let pageJson = require('../language/zh-Hans.json')
  if (this.$store.language === 'zh-Hans') {
    pageJson = require('../language/zh-Hans.json')
  } else if (this.$store.language === 'zh-hk') {
    pageJson = require('../language/zh-hk.json')
  } else if (this.$store.language === 'zh-tw') {
    pageJson = require('../language/zh-tw.json')
  } else if (this.$store.language === 'en') {
    pageJson = require('../language/en.json')
  } else {
    pageJson = require('../language/zh-Hans.json')
  }
  return pageJson
}

function checkEmail (el) {
  let regu = '^(([0-9a-zA-Z]+)|([0-9a-zA-Z]+[_.0-9a-zA-Z-]*[0-9a-zA-Z-]+))@([a-zA-Z0-9-]+[.])+([a-zA-Z]|net|NET|asia|ASIA|com|COM|gov|GOV|mil|MIL|org|ORG|edu|EDU|int|INT|cn|CN|cc|CC|biz|BIZ|de|DE|me|ME)$'
  let reg = new RegExp(regu)
  if (el.search(reg) === -1) {
    return false
  }
  return true
}
function checkPhone (p) {
  let reg = /(^1\d{10})||(^1[0-35-9]\d{9})||(^1[05-9]\d{9})$/
  if (reg.test(p)) {
    return true
  } else {
    return false
  }
}
function checkSuperAccount (s) {
  var reg = new RegExp(/^(LFT_)/)
  if (reg.test(s)) {
    return true
  } else {
    return false
  }
}
function checkStageAccount (s) {
  var reg = new RegExp(/^(LFT_)/)
  if (reg.test(s)) {
    return true
  } else {
    return false
  }
}
exports.install = function (Vue, options) {
  Vue.prototype.getYear = getYear
  Vue.prototype.checkIsBlank = checkIsBlank
  Vue.prototype.setDateFormat = setDateFormat
  Vue.prototype.getPageJson = getPageJson
  Vue.prototype.checkEmail = checkEmail
  Vue.prototype.checkPhone = checkPhone
  Vue.prototype.checkSuperAccount = checkSuperAccount
  Vue.prototype.checkStageAccount = checkStageAccount
}
