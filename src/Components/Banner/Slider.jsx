import React from "react";
import { Link } from "react-router-dom";
// import slider1 from "./../../dummy/slider-1.jpg";
// import slider2 from './../../dummy/slider-2.jpg'
// import slider3 from './../../dummy/slider-3.jpg'
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import Wrapper from "./Wrapper";
import Title from "./Title";
import Subtitle from "./Subtitle";

const bogliasco = "https://rare-gallery.com/uploads/posts/4532881-women-looking-at-viewer-catherine-timokhina-maxim-maximov-500px-photography-portrait.jpg";
const countyClare = "https://w.wallhaven.cc/full/mp/wallhaven-mpz6d8.jpg";
const craterRock = "https://rare-gallery.com/uploads/posts/1123069-face-white-black-women-monochrome-model-portrait-photography-nose-emotion-skin-head-girl-beauty-eye-darkness-black-and-white-monochrome-photography-portrait-photography.jpg";
const giauPass = "https://rare-gallery.com/uploads/posts/1050668-face-white-black-women-monochrome-model-portrait-simple-background-black-background-photography-Ksenia-Kokoreva-Xenia-Kokoreva-Kseniya-Kokoreva-Anatoly-Komissarov-head-.jpg";

export default function Slider() {
  return (
    <>
      <HeroSlider
        height={"100vh"}
        autoplay
        controller={{
          initialSlide: 1,
          slidingDuration: 500,
          slidingDelay: 100,
        }}
      >

        <Slide
          shouldRenderMask
          label="Giau Pass - Italy"
          background={{
            backgroundImageSrc: giauPass,
          }}
        >
          <div className="container slides">
            <Overlay>
              <Wrapper>
                <Title>We Love Makeup</Title>
                <Subtitle>
                  Visit Our Salon Today
                  
                </Subtitle>
                <div className="ReadMe">
                <Link to="#" className="button large">
                    Read more
                </Link>
                </div>
              </Wrapper>
            </Overlay>
          </div>
        </Slide>
        <Slide
          shouldRenderMask
          label="Bogliasco - Italy"
          background={{
            backgroundImageSrc: bogliasco,
          }}
        >
          <Overlay>
            <Wrapper>
              <Title>Premium Makeup</Title>
              <Subtitle>
                Check out the documentation for more advanced examples.
              </Subtitle>
              <div className="ReadMe">
                <Link to="#" className="button large">
                    Read more
                </Link>
                </div>
            </Wrapper>
          </Overlay>
        </Slide>
        <Slide
          shouldRenderMask
          label="County Clare - Ireland"
          background={{
            backgroundImageSrc: countyClare,
          }}
        >
          <Overlay>
            <Wrapper>
              <Title>Basic Setupjjjjjjjj</Title>
              <Subtitle>
                Check out the documentation for more advanced examples.
              </Subtitle>
              <div className="ReadMe">
                <Link to="#" className="button large">
                    Read more
                </Link>
                </div>
            </Wrapper>
          </Overlay>
        </Slide>
        <Slide
          shouldRenderMask
          label="Crater Rock, OR - United States"
          background={{
            backgroundImageSrc: craterRock,
          }}
        >

          <Overlay>
            <Wrapper>
              <Title>Basic Setuprrrrrrrrrrr</Title>
              <Subtitle>
                Check out the documentation for more advanced examples.
              </Subtitle>
              <div className="ReadMe">
                <Link to="#" className="button large">
                    Read more
                </Link>
                </div>
            </Wrapper>
          </Overlay>
        </Slide>

        <MenuNav />
      </HeroSlider>
      {/* <div className="hero hero-slider">
        <ul className="slides">
          <li
            data-bg-image="dummy/slider-1.jpg"
            style={{ backgroundImage: bgBanneImg }}
          >
            <div className="container">
              <h3 className="slider-subtitle">Your header goes here</h3>
              <h2 className="slider-title">Professional</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                molestiae necessitatibus possimus ducimus facere, error,
                nostrum. Quos sapiente ducimus maxime odio alias dolor
                consequuntur, maiores commodi exercitationem veniam. Id, ex?
              </p>
              <Link to="#" className="button large">
                Read more
              </Link>
            </div>
          </li>
          <li
            data-bg-image="dummy/slider-2.jpg"
            style={{ backgroundImage: slider1 }}
          >
            <div className="container">
              <h3 className="slider-subtitle">Your header goes here</h3>
              <h2 className="slider-title">Professional</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                maiores illo eligendi obcaecati reiciendis, vel perspiciatis
                aliquid esse architecto deleniti asperiores, laboriosam nemo
                rerum! Ipsam numquam delectus minus iure sit!
              </p>
              <Link href="#" className="button large">
                Read more
              </Link>
            </div>
          </li>
          <li
            data-bg-image="dummy/slider-3.jpg"
            style={{ backgroundImage: slider1 }}
          >
            <div className="container">
              <h3 className="slider-subtitle">Your header goes here</h3>
              <h2 className="slider-title">Professional</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laboriosam iure, alias error suscipit porro quidem minus, autem
                repellendus rerum labore corrupti! Quia quas, architecto, quis
                non pariatur quisquam nisi magnam.
              </p>
              <Link href="#" className="button large">
                Read more
              </Link>
            </div>
          </li>
        </ul>
      </div> */}
    </>
  );
}
