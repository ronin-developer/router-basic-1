import React from 'react'
import { Outlet } from 'react-router'
import NavbarComponent from './components/NavbarComponent'

function App(){

  return (
    <div className='container mx-auto'>
      <NavbarComponent />
      <Outlet />
    </div>
  )
}

export default App;