import { Link } from "react-router-dom";
import logo from "../assets/images/logo-bg.png";
import classes from "../styles/Nav.module.css";
import Account from "./Account";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={logo} alt="abdul barik Logo" />
            <h3>Abdul Barik</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
