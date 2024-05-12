import './App.css'
import { Navbar } from './Components/Navbar'
import { NavDrawer } from './Components/NavDrawer'
import { Settings } from './Components/Settings'
import { Outlet } from 'react-router-dom'
function App() {

  return (
      <>
        <Navbar/>
        <NavDrawer/>
        <Settings/>
        <Outlet/>
      </>
  )
}

export default App
