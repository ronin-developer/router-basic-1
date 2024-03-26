import React from 'react'
import NavbarComponent from './components/NavbarComponent'
import ProductPage from './pages/ProductPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function App() {

  let pathname = window.location.pathname;

  function routePathname() {
    if( pathname === "products" ) {
      return <ProductPage />;
    } else if( pathname === "about" ) {
      return <AboutPage />;
    } else if( pathname === "contact") {
      return <ContactPage />;
    }
  }

  return (
    <div className='container mx-auto'>
      <NavbarComponent />
      {routePathname()}
    </div>
  )
}

export default App