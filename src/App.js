import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./pages/AboutPage";
import Home from "./pages/Home";
import Projects1 from "./pages/ProjectsMain";
import "./styles/style.css";
import Nomatch from "./pages/nomatch";
import Blogs from "./pages/BlogContent/blogs";
import Blogsinfo from "./pages/BlogContent/Blogsinfo";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <div style={{ backgroundColor: "#1b1b1b" }}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects1 />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:slug" element={<Blogsinfo />} />
          <Route path="*" element={<Nomatch />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
