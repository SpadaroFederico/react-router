import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Per lo stile

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" end>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">Chi Siamo</NavLink>
        </li>
        <li>
          <NavLink to="/posts">Post</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
