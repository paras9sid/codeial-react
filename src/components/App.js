import { Home } from "../pages";
import Loader from "./Loader";
import Navbar from "./Navbar";
import Login from "../pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth } from "../hooks";
import Signup from "../pages/Signup";

const Page404 = () => {
  return <h1>404 errorr</h1>;
};

function App() {
  const auth = useAuth();

  if (auth.loading) {
    return <Loader />; // to display loader element return is mandatory
  }
  return (
    <div className="App">
      <Router>
        {/* Navbar componenet should be wrapped inside Main Browser Router - otherwise Link to will not work */}
        <Navbar />
        <Routes>
          {/* props posts should be an array not sring - it will throw props validation error */}
          {/* <Route path="/" element={<Home posts={posts} />}></Route> */}
          <Route path="/" element={<Home />}></Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Signup />}></Route>

          {/* for route path 404 to be renderd prperly path='*' to be used */}
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
