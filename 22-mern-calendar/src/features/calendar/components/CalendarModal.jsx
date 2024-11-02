import { useEffect, useMemo, useState } from 'react'
import { addHours, differenceInSeconds } from 'date-fns'
import Swal from 'sweetalert2'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { useCalendarStore, useUiStore } from 'hooks'

function CalendarModal() {
  const { activeEvent, startSavingEvent } = useCalendarStore()
  const { isDateModalOpen, closeDateModal } = useUiStore()

  const [formValues, setFormValues] = useState({
    title: 'title',
    notes: 'note',
    start: new Date(),
    end: addHours(new Date(), 2),
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  const titleClass = useMemo(() => {
    if (!formSubmitted) return ''
    return formValues.title.trim().length === 0 ? 'is-invalid' : ''
  }, [formSubmitted, formValues.title])

  useEffect(() => {
    if (activeEvent == null) return
    setFormValues({ ...activeEvent })
  }, [activeEvent])

  function onInputChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  function onDateChange(value, name) {
    setFormValues({ ...formValues, [name]: value })
  }

  async function onSubmit(e) {
    e.preventDefault()
    setFormSubmitted(true)

    const datesDiffSec = differenceInSeconds(formValues.end, formValues.start)
    if (isNaN(datesDiffSec) || datesDiffSec <= 0) {
      Swal.fire('Invalid dates', 'Check the dates', 'error')
      return
    }

    if (formValues.title.trim().length === 0) {
      Swal.fire('Title is mandatory', 'Please add a title', 'error')
      return
    }

    await startSavingEvent(formValues)
    closeDateModal()
  }

  return (
    <Modal
      show={isDateModalOpen}
      onHide={closeDateModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form onSubmit={onSubmit} noValidate>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            New event
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Start Date and Time</Form.Label>
            <div>
              <DatePicker
                className="form-control w-100"
                selected={formValues.start}
                onChange={(newDate) => onDateChange(newDate, 'start')}
                dateFormat="dd/MM/yyyy, HH:mm"
                dateFormatCalendar="dd/MM/YYYY"
                timeFormat="HH:mm"
                showTimeSelect
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>End Date and Time</Form.Label>
            <div>
              <DatePicker
                className="form-control w-100"
                selected={formValues.end}
                onChange={(newDate) => onDateChange(newDate, 'end')}
                dateFormat="dd/MM/yyyy, HH:mm"
                dateFormatCalendar="dd/MM/YYYY"
                timeFormat="HH:mm"
                showTimeSelect
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              className={titleClass}
              placeholder="Event Title"
              name="title"
              value={formValues.title}
              onChange={onInputChange}
            />
            <Form.Text className="text-muted">A short description</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Note</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Notes"
              rows={5}
              name="notes"
              value={formValues.notes}
              onChange={onInputChange}
            />
            <Form.Text className="text-muted">Additional information</Form.Text>
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button type="submit" variant="primary" className="btn-block">
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default CalendarModal
