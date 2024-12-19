const moment = require('moment')

function isDate(value) {
  console.log(value)

  if (!value) return false
  return moment(value).isValid()
}

module.exports = { isDate }
