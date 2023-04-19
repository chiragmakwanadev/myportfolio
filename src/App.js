import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./pages/AboutPage";
import Home from "./pages/Home";
import "./styles/style.css";
import Projects from "./components/Home/projects";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </Layout>
  );
}

export default App;
