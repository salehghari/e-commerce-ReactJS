import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className="navbar-content d-flex row">
        <li>
          <NavLink className={({ isActive }) => (isActive ? "is-active" : "")} to={"/products"}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? "is-active" : "")} to={"/contact"}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? "is-active" : "")} to={"/about"}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
