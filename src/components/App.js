import { useEffect, useState } from "react";
import { getPosts } from "../api";
import { Home } from "../pages";
import Loader from "./Loader";
import Navbar from "./Navbar";
// import { Loader, Navbar } from './';
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
      {/* props posts should be an array not sring - it will throw props validation error */}
      <Home posts={posts} />  
    </div>
  );
}

export default App;
