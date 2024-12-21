const moment = require('moment')

function isDate(value) {
  if (!value) return false
  return moment(value).isValid()
}

module.exports = { isDate }
