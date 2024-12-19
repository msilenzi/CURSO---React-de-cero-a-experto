const { response } = require('express')
const { isValidObjectId } = require('mongoose')
const Event = require('../models/event.model')

async function findAll(req, res = response) {
  const events = await Event.find().populate('user', 'name')

  return res.json({
    ok: true,
    payload: events,
  })
}

async function create(req, res = response) {
  const event = new Event(req.body)
  event.user = req.user.id

  try {
    const savedEvent = await event.save()
    return res.json({
      ok: true,
      payload: savedEvent,
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      ok: false,
      msg: 'Ocurrió un error al crear el evento',
    })
  }
}

async function update(req, res = response) {
  const event = await _findEventByQueryId(req, res)
  if (!event) return

  const newEvent = { ...req.body, user: req.user.id }
  const updatedEvent = await Event.findByIdAndUpdate(event.id, newEvent, {
    new: true,
  })
  return res.json({
    ok: true,
    payload: updatedEvent,
  })
}

async function remove(req, res = response) {
  const event = await _findEventByQueryId(req, res)
  if (!event) return

  try {
    await Event.findByIdAndDelete(req.params.id)
    return res.json({
      ok: true,
      payload: null,
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      ok: false,
      msg: 'Error al eliminar el evento',
    })
  }
}

async function _findEventByQueryId(req, res) {
  if (!isValidObjectId(req.params.id)) {
    res.status(400).json({
      ok: false,
      msg: 'ID inválido',
    })
    return null
  }

  try {
    const event = await Event.findById(req.params.id)
    if (!event) {
      res.status(404).json({
        ok: false,
        msg: 'El evento no existe',
      })
      return null
    }
    if (event.user.toString() !== req.user.id) {
      res.status(401).json({
        ok: false,
        msg: 'No puedes acceder a este evento',
      })
      return null
    }
    return event
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Error al acceder al evento',
    })
    return null
  }
}

module.exports = {
  findAll,
  create,
  update,
  remove,
}
