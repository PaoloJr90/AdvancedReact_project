import React from "react";
import MainSlider from "./MainSlider";

import { webSiteInfoDB } from "../common/webSiteInfoDB.js";

import "./styles/home.scss";

const Home = () => {
  const { mainSlider } = webSiteInfoDB;

  return (
    <section className="home">
      <div className="hero">
        <div className="container">
          <MainSlider slides={mainSlider} />
        </div>
      </div>
      <div className="container">Some info after slider</div>
    </section>
  );
};

export default Home;
