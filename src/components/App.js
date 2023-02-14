import { useEffect, useState } from "react";
import { getPosts } from "../api";
import { Home } from "../pages";
import Loader from "./Loader";
import Navbar from "./Navbar";
import Login from "../pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const About = () => {
  return <h1>About</h1>;
};

const UserInfo = () => {
  return <h1>User</h1>;
};

const Page404 = () => {
  return <h1>404 errorr</h1>;
};

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      console.log("response", response);
      setPosts("response", response);

      if (response.success) {
        setPosts(response.data.posts);
      }
      setLoading(false);
    };
    fetchPosts();
  }, []);
  if (loading) {
    return <Loader />; // to display loader element return is mandatory
  }
  return (
    <div className="App">
      <Router>
        {/* Navbar componenet should be wrapped inside Main Browser Router - otherwise Link to will not work */}
      <Navbar />
        <Routes>
          {/* props posts should be an array not sring - it will throw props validation error */}
          <Route path="/" element={<Home posts={posts} />}></Route>
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/about" element={<About />} ></Route>
          <Route path="/user/aadadsad" element={<UserInfo />} ></Route>
          {/* for route path 404 to be renderd prperly path='*' to be used */}
          <Route path='*' element={<Page404 />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
