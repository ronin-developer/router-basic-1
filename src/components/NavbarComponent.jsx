import React from 'react'

function NavbarComponent() {

    const routes = ["Products", "About", "Contact"]

  return (
    <div className='container mx-auto flex items-center justify-between h2-[120px]'>
        <div className='flex justify-between items-center'>
            logo
        </div>
        <ul>
            {routes.map((route, i) => {
                return (
                    <li key={i}>
                        <a href={`/${route.toLowerCase()}`}>{route}</a>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default NavbarComponent