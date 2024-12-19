const { response } = require('express')
const Event = require('../models/event.model')

function findAll(req, res = response) {
  return res.json({
    ok: true,
    payload: {
      events: 'findAll',
    },
  })
}

async function create(req, res = response) {
  const event = new Event(req.body)
  event.user = req.id

  try {
    const savedEvent = await event.save()
    res.json({
      ok: true,
      payload: savedEvent,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'No se pudo crear el evento',
    })
  }
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
  remove,
}
