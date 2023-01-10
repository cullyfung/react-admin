import { Button } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import Router from './router'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  )
}

export default App
