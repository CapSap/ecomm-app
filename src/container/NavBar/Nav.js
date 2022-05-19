import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Product Page</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
