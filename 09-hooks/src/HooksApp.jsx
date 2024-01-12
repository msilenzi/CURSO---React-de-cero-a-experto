import CounterApp from '01-useState/CounterApp'
import CounterWithHook from '01-useState/CounterWithHook'

function HooksApp() {
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center bg-body-tertiary">
      <div className="p-4 bg-white shadow-sm rounded-4">
        {/* <CounterApp /> */}
        <CounterWithHook />
      </div>
    </div>
  )
}

export default HooksApp
