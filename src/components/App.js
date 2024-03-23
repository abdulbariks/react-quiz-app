import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";

function App() {
  return (
    // <Layout>
    //   <Home />
    //   <Signup />
    //   <Login />
    //   <Quiz />
    //   <Result />
    // </Layout>
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            {/* <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="result" element={<Result />} /> */}
            {/* <PublicRoute exact path="/signup" element={Signup} />
            <PrivateRoute exact path="/quiz" element={Quiz} /> */}

            {/* <PublicRoute exact path="/signup" component={Signup} />
            <PublicRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/quiz" component={Quiz} />
            <PrivateRoute exact path="/result" component={Result} /> */}

            {/* <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/quiz" component={Quiz} /> */}
            {/* <Route exact path="/result" component={Result} /> */}
          </Routes>
          <PublicRoute exact path="/signup" element={Signup} />
          <PrivateRoute exact path="/quiz" element={Quiz} />
          <PublicRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/result" component={Result} />
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
