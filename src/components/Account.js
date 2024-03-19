import { Link } from "react-router-dom";
import classes from "../styles/Account.module.css";

export default function Account() {
  return (
    <div className={classes.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      {/* <a href="signup.html">Signup</a> */}
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
      {/* <span className="material-icons-outlined" title="Logout"> logout </span> */}
    </div>
  );
}
