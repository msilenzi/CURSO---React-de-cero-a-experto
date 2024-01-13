import CounterApp from '01-useState/CounterApp'
import CounterWithHook from '01-useState/CounterWithHook'
import SimpleForm from '02-useEffect/SimpleForm'
import FormWithHook from '02-useEffect/FormWithHook'
import MultipleHooks from '03-examples/MultipleHooks'
import FocusScreen from '04-useRef/FocusScreen'

function HooksApp() {
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center bg-body-tertiary">
      <div className="p-4 bg-white shadow-sm rounded-4">
        {/* <CounterApp /> */}
        {/* <CounterWithHook /> */}
        {/* <SimpleForm /> */}
        {/* <FormWithHook /> */}
        {/* <MultipleHooks /> */}
        <FocusScreen />
      </div>
    </div>
  )
}

export default HooksApp
