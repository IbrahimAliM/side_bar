import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MiniDrawer from './sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MiniDrawer />
  )
}

export default App
