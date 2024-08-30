import Nav from './components/Nav'
import './App.css'

import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <>
      <Nav/>
      {/*Renderiza todos os componentes filho*/}
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
