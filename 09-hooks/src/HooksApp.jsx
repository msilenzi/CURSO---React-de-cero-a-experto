import { useState } from 'react'
import Navbar from 'Navbar'

import CounterApp from '01-useState/CounterApp'
import CounterWithHook from '01-useState/CounterWithHook'
import SimpleForm from '02-useEffect/SimpleForm'
import FormWithHook from '02-useEffect/FormWithHook'
import MultipleHooks from '03-examples/MultipleHooks'
import FocusScreen from '04-useRef/FocusScreen'

const mainComponents = {
  CounterApp,
  CounterWithHook,
  SimpleForm,
  FormWithHook,
  MultipleHooks,
  FocusScreen,
}

function HooksApp() {
  const [selectedValue, setSelectedValue] = useState(
    Object.keys(mainComponents).at(-1)
  )

  const SelectedComponent = mainComponents[selectedValue] ?? null

  return (
    <div className="vh-100 d-flex flex-column bg-body-tertiary">
      <Navbar
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        mainComponents={Object.keys(mainComponents)}
      />
      <div className="d-flex align-items-center justify-content-center flex-grow-1">
        <div className="p-4 bg-white shadow-sm rounded-4">
          <SelectedComponent />
        </div>
      </div>
    </div>
  )
}

export default HooksApp
