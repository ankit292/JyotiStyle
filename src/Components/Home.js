import React from "react";
import Arrow from "./../images/arrow.png";
import icon1 from "./../images/icon-1.png";
import icon2 from "./../images/icon-2.png";
import icon3 from "./../images/icon-3.png";
import icon4 from "./../images/icon-4.png";
import figure1 from "./../dummy/figure-1.jpg";
// import slider1 from "./../dummy/slider-1.jpg";
// import slider2 from './../dummy/slider-2.jpg'
// import slider3 from './../dummy/slider-3.jpg'
import { Link } from "react-router-dom";
import OurTeam from "./OurTeam/OurTeam";
import Slider from "./Banner/Slider";

export default function Home() {

  return (
    <div>
      <Slider />

      <main className="main-content">
        <div className="fullwidth-block latest-news-section">
          <div className="container">
            <h2 className="section-title">Latest News</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="news">
                  <div className="entry-date">
                    <div className="date">29</div>
                    <div className="monthyear">07.2014</div>
                  </div>
                  <div className="entry-detail">
                    <div className="entry-summary">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nemo velit, tempora aut nesciunt.
                      <Link to="#" className="more-icon">
                        <img src={Arrow} alt="arrow" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="news">
                  <div className="entry-date">
                    <div className="date">29</div>
                    <div className="monthyear">07.2014</div>
                  </div>
                  <div className="entry-detail">
                    <div className="entry-summary">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Harum quo esse vero ipsa architecto{" "}
                      <Link to="#" className="more-icon">
                        <img src={Arrow} alt="arrow" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="news">
                  <div className="entry-date">
                    <div className="date">29</div>
                    <div className="monthyear">07.2014</div>
                  </div>
                  <div className="entry-detail">
                    <div className="entry-summary">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Distinctio, corporis,{" "}
                      <Link to="#" className="more-icon">
                        <img src={Arrow} alt="arrow" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link to="#" className="button no-gradient">
                More news
              </Link>
            </div>
          </div>
        </div>

        <div className="fullwidth-block features-section">
          <div className="container">
            <h2 className="section-title">our Services</h2>
            <div className="row">
              <div className="col-md-3">
                <div className="feature">
                  <img src={icon1} className="feature-image" alt="arrow" />
                  <h3 className="feature-title">Voluptatem</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aspernatur dolor perferendis blanditiis voluptate maiores{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="feature">
                  <img src={icon2} className="feature-image" alt="arrow" />
                  <h3 className="feature-title">COnsequatur</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Esse, minus, totam. Officia ea accusamus quis tenetur quas{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="feature">
                  <img src={icon3} className="feature-image" alt="arrow" />
                  <h3 className="feature-title">Temporibus</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iste, omnis cum, quo dolorem molestias asperiores doloremque
                    dolorum
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="feature">
                  <img src={icon4} className="feature-image" alt="arrow" />
                  <h3 className="feature-title">Perferendis</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quisquam, facere numquam porro amet reiciendis maiores odio
                    velit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fullwidth-block team-section">
          <div className="container">
            <h2 className="section-title">Our team</h2>
            <div className="row">
              <OurTeam />
            </div>
          </div>
        </div>

        <div className="fullwidth-block information-section">
          <div className="container">
            <h2 className="section-title">Information</h2>
            <div className="row">
              <div className="col-md-4">
                <figure>
                  <img src={figure1} alt="arrow" />
                </figure>
              </div>
              <div className="col-md-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Doloremque omnis minima accusamus nihil eligendi quas cumque
                  rerum odit quo architecto repudiandae adipisci repellendus
                  velit nostrum sed quisquam doloribus, consequatur sint. Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
                  omnis minima accusamus nihil eligendi quas cumque rerum odit
                  quo architecto repudiandae adipisci repellendus velit nostrum
                  sed quisquam doloribus, consequatur sint.
                </p>
              </div>
              <div className="col-md-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Praesentium odit, blanditiis aliquam officia soluta modi amet
                  ex nihil nulla minima. Nam earum est magnam tempore corrupti
                  quos consequatur, numquam voluptas! Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Doloremque omnis minima
                  accusamus nihil eligendi quas cumque rerum odit quo architecto
                  repudiandae adipisci repellendus velit nostrum sed quisquam
                  doloribus, consequatur sint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
