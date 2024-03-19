import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../styles/App.css";
import Layout from "./Layout";
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
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="result" element={<Result />} />
          {/* <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/quiz" component={Quiz} /> */}
          {/* <Route exact path="/result" component={Result} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
