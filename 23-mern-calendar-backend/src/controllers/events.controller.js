const { response } = require('express')

function findAll(req, res = response) {
  return res.json({
    ok: true,
    payload: {
      events: 'findAll',
    },
  })
}

function create(req, res = response) {
  return res.json({
    ok: true,
    payload: {
      events: 'create',
    },
  })
}

function update(req, res = response) {
  return res.json({
    ok: true,
    payload: {
      events: 'update',
    },
  })
}

function remove(req, res = response) {
  return res.json({
    ok: true,
    payload: {
      events: 'delete',
    },
  })
}

module.exports = {
  findAll,
  create,
  update,
  delete: remove,
}
