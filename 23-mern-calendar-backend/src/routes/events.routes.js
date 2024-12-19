// /api/v1/events

const router = require('express').Router()
const eventsController = require('../controllers/events.controller')
const { createValidation } = require('../validations/event.validations')
const { validateJwt } = require('../middlewares/validateJwt.middleware')
const validateFields = require('../middlewares/validateFields.middleware')

router.use(validateJwt)

router.get('/', eventsController.findAll)

router.post('/', createValidation, validateFields, eventsController.create)

router.put('/:id', createValidation, validateFields, eventsController.update)

router.delete('/:id', eventsController.remove)

module.exports = router
