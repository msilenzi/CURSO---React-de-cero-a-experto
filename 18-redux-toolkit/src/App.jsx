import { useState } from 'react'
import reactLogo from 'assets/react.svg'
import reduxLogo from 'assets/redux.svg'
import 'App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://redux-toolkit.js.org/" target="_blank">
          <img src={reduxLogo} className="logo" alt="Redux logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Redux Toolkit</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
