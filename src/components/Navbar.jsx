import { Link, NavLink } from "react-router-dom";

// test navbar
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            Chi siamo
          </NavLink>
        </li>
        <li>
          <NavLink to="/posts" className={({ isActive }) => (isActive ? "active" : "")}>
            Post
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
