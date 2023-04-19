import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./pages/AboutPage";
import Home from "./pages/Home";
import Projects1 from "./pages/ProjectsMain";
import "./styles/style.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects1 />} />
      </Routes>
    </Layout>
  );
}

export default App;
