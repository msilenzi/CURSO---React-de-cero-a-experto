import { useState } from 'react'
import Navbar from '@UI/Navbar'

import CounterApp from '01-useState/CounterApp'
import CounterWithHook from '01-useState/CounterWithHook'
import SimpleForm from '02-useEffect/SimpleForm'
import FormWithHook from '02-useEffect/FormWithHook'
import MultipleHooks from '03-examples/MultipleHooks'
import FocusScreen from '04-useRef/FocusScreen'
import Layout from '05-useLayoutEffect/Layout'
import Memorize from '06-memos/Memorize'
import MemoHook from '06-memos/MemoHook'
import CallbackHook from '06-memos/CallbackHook'
import Padre from '07-tarea-memo/Padre'

const mainComponents = {
  CounterApp,
  CounterWithHook,
  SimpleForm,
  FormWithHook,
  MultipleHooks,
  FocusScreen,
  Layout,
  Memorize,
  MemoHook,
  CallbackHook,
  Padre,
}

function HooksApp() {
  const [selectedValue, setSelectedValue] = useState(
    Object.keys(mainComponents).at(-1)
  )

  const SelectedComponent = mainComponents[selectedValue] ?? null

  return (
    <>
      <Navbar
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        mainComponents={Object.keys(mainComponents)}
      />
      <div
        className="d-flex align-items-center justify-content-center bg-body-tertiary"
        style={{ minHeight: '100dvh' }}
      >
        <main className="p-4 bg-white shadow-sm rounded-4">
          <SelectedComponent />
        </main>
      </div>
    </>
  )
}

export default HooksApp
