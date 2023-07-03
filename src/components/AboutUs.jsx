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
            <img className='wrg' alt="photo" src={aboutUs[0].image}/>
      </div>
      <div className="container3">
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
      </div>

      <section className="categ">
        <div className="container3">
          <p className="title">{aboutUs[4].title}</p>
          <span className="desc">{aboutUs[4].description}</span>

          <div className="cateImg">
            <a href='#'><img alt="photo" src={aboutUs[4].image[0]}/></a>
            <a href='#'><img alt="photo" src={aboutUs[4].image[1]}/></a>
            <a href='#'><img alt="photo" src={aboutUs[4].image[2]}/></a>
            <a href='#'><img alt="photo" src={aboutUs[4].image[1]}/></a>
          </div>
        </div> 
        
      </section>
      <section className="bottom">
        <div className="container">
          <h2 className="title">{aboutUs[5].title}</h2>
          <span className="desc">{aboutUs[5].description}</span>
          <div className="team">
            <a href='#'><img alt="photo" src={aboutUs[5].image[0]}/></a>
            <a href='#'><img alt="photo" src={aboutUs[5].image[1]}/></a>
            <a href='#'><img alt="photo" src={aboutUs[5].image[2]}/></a>
            <a href='#'><img alt="photo" src={aboutUs[5].image[3]}/></a>            
          </div>
          <div className="showm">
            <span>Show More</span>
          </div>
          <div className="showm2">
            <span>Show More</span>
          </div>
          <div className="showm">
            <span>Show More</span>
          </div>                    
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
