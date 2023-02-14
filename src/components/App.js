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
      <Navbar />
      <Router>
        <Routes>
          {/* props posts should be an array not sring - it will throw props validation error */}
          <Route exact path="/" element={<Home posts={posts} />}></Route>
          <Route path="/login" element={<Login />} exact></Route>
          <Route path="/about" element={<About />} exact></Route>
          <Route path="/user/aadadsad" element={<UserInfo />} exact></Route>
          <Route path="/user/aadadsad" element={<Page404 />} exact></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
