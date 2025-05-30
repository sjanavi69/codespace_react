import { NavLink } from "react-router-dom";


function NavBar() {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink> | 
      <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink> | 
      <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>Contact</NavLink>
    </nav>
  );
}

export default NavBar;

