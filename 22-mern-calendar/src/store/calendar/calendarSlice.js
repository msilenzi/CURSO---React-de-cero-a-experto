import { createSlice } from '@reduxjs/toolkit'
import { addHours } from 'date-fns'

const initialState = {
  events: [
    {
      _id: 1234,
      title: 'Cumpleaños del Jefe',
      notes: 'Hay que comprar el pastel',
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: '#1f1f1f',
      user: {
        id: '1234',
        name: 'Manuel',
      },
    },
  ],
  activeEvent: null,
}

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload
    },
    onAddNewEvent: (state, { payload }) => {
      state.events.push(payload)
      state.activeEvent = null
    },
    onUpdateEvent: (state, { payload }) => {
      state.events = state.events.map((event) => {
        return event._id === payload._id ? payload : event
      })
    },
    onDeleteEvent: (state) => {
      if (state.activeEvent) {
        state.events = state.events.filter(
          (events) => events._id !== state.activeEvent._id
        )
        state.activeEvent = null
      }
    },
  },
})

export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent } =
  calendarSlice.actions
