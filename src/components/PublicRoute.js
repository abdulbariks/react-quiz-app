// import { Redirect, Route } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";

// export default function PublicRoute({ component: Component, ...rest }) {
//   const { currentUser } = useAuth();

//   return !currentUser ? (
//     <Route {...rest}>{(props) => <Component {...props} />}</Route>
//   ) : (
//     <Redirect to="/" />
//   );
// }

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PublicRoute({ component: Component, ...rest }) {
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      setLoading(false);
      return;
    }
    navigate("/");
  }, [currentUser, navigate]);

  return <>{loading ? "Loading..." : <Component {...rest} />} </>;
}
