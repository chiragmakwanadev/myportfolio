import React from "react";
import MainPage from "../components/Home/MainPage";
import Aboutme from "../components/Home/Aboutme";
import Services from "../components/Home/services";
import Workflow from "../components/Home/workflow";
import Whyme from "../components/Home/whyme";
import Projects from "../components/Home/projects";
import Testimonials from "../components/Home/testimonials";

const Home = () => {
  return (
    <>
      <MainPage />
      <Aboutme />
      <Services />
      <Workflow />
      <Whyme />
      <Projects />
      <Testimonials />
    </>
  );
};

export default Home;
