import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Error from './components/error/Error'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/error' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App