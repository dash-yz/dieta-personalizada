import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Launch from './pages/Launch'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Launch />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
