import React from "react";
import { NavLink } from "react-router-dom";

function NavbarComponent() {
  const routes = [
    { path: "/", label: "Home" },
    { path: "/product", label: "Product" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="container mx-auto my-8 flex items-center justify-between h2-[120px]">
      <div className="flex justify-between items-center">logo</div>
      <ul className="flex items-center gap-3">
        {routes.map((route, i) => {
          return (
            <li key={i}>
              <NavLink to={route.path}>{route.label}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NavbarComponent;
