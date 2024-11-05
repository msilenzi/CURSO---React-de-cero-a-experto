// /api/v1/events

const router = require('express').Router()
const eventsController = require('../controllers/events.controller')
const { validateJwt } = require('../middlewares/validateJwt.middleware')

router.use(validateJwt)

router.get('/', eventsController.findAll)

router.post('/', eventsController.create)

router.put('/:id', eventsController.update)

router.delete('/:id', eventsController.delete)

module.exports = router
