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
      msg: 'An error occurred while creating the event',
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
      msg: 'Error deleting the event',
    })
  }
}

async function _findEventByQueryId(req, res) {
  if (!isValidObjectId(req.params.id)) {
    res.status(400).json({
      ok: false,
      msg: 'Invalid ID',
    })
    return null
  }

  try {
    const event = await Event.findById(req.params.id)
    if (!event) {
      res.status(404).json({
        ok: false,
        msg: 'The event does not exist',
      })
      return null
    }
    if (event.user.toString() !== req.user.id) {
      res.status(401).json({
        ok: false,
        msg: 'You cannot access this event',
      })
      return null
    }
    return event
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Error accessing the event',
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
