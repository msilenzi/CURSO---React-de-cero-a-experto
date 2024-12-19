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

async function update(req, res = response) {
  const eventId = req.params.id
  const uid = req.user.id

  if (!isValidObjectId(eventId)) {
    res.status(400).json({
      ok: false,
      msg: 'id inválido',
    })
  }

  try {
    const event = await Event.findById(eventId)
    if (!event) {
      res.status(404).json({
        ok: false,
        msg: 'El evento no existe',
      })
    }

    if (event.user.toString() !== req.user.id) {
      return res.status(401).json({
        ok: false,
        msg: 'No puedes editar este evento',
      })
    }

    const newEvent = {
      ...req.body,
      user: req.user.id,
    }

    const updatedEvent = await Event.findByIdAndUpdate(event.id, newEvent, {
      new: true,
    })

    res.json({
      ok: true,
      payload: updatedEvent,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'No se pudo actualizar el evento',
    })
  }
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
