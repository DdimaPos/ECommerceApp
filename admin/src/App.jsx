import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Admin from './Pages/Admin/Admin'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Admin/>
      </BrowserRouter>
    </>
  )
}

export default App
