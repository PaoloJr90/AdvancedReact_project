import React from "react";
import { webSiteInfoDB } from "../common/webSiteInfoDB.js";
import './styles/about.scss';
import './styles/home.scss';

const AboutUs = () => {

  const { headerNavigation,aboutUs } = webSiteInfoDB;

  return (
    <section className="about">
      <div className="hero">
        <div className="container">
       <p className="title">{ headerNavigation[0].title }</p>
        </div>
      </div>
      <div className="container2">
          <div className="wr">
            <p className="title">{aboutUs[0].title}</p>
            <span className="desc">{aboutUs[0].description}</span>
            </div>
            <img className='wrg' src={aboutUs[0].image}/>
      </div>
      <div className="scrp">
        <div className="p1">
              <p className="title">{aboutUs[1].title}</p>
              <p className="desc">{aboutUs[1].description}</p>
        </div>
        <p className="divider"></p>
        <div className="p2">
              <p className="title">{aboutUs[2].title}</p>
              <p className="desc">{aboutUs[2].description}</p>
        </div>
        <p className="divider"></p>
        <div className="p3">
              <p className="title">{aboutUs[3].title}</p>
              <span className="desc">{aboutUs[3].description}</span>
        </div>                            
      </div>
      <section className="categ">
        <div className="container3">
          <p className="title">{aboutUs[4].title}</p>
          <span className="desc">{aboutUs[4].description}</span>

          {/* <div className="cateImg">
            <img src={aboutUs[4].image[0]}/>
            <img src={aboutUs[4].image[1]}/>
            <img src={aboutUs[4].image[2]}/>
          </div> */}
        </div> 
        
      </section>
      <section className="prodacts">
        <div className="container">
          <h2 className="products-title"></h2>
          <div className="wrapper">

          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
