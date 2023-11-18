import React from 'react'
import gallery1 from './../../dummy/large-gallery/gallery-1.jpg'
import gallery2 from './../../dummy/large-gallery/gallery-2.jpg'
import gallery3 from './../../dummy/large-gallery/gallery-3.jpg'
import gallery4 from './../../dummy/large-gallery/gallery-4.jpg'
import gallery5 from './../../dummy/large-gallery/gallery-5.jpg'
import gallery6 from './../../dummy/large-gallery/gallery-6.jpg'
import gallery7 from './../../dummy/large-gallery/gallery-7.jpg'
import gallery8 from './../../dummy/large-gallery/gallery-8.jpg'
import gallery9 from './../../dummy/large-gallery/gallery-9.jpg'
import gallery10 from './../../dummy/large-gallery/gallery-10.jpg'
import gallery11 from './../../dummy/large-gallery/gallery-11.jpg'
import gallery12 from './../../dummy/large-gallery/gallery-12.jpg'
export default function ShowALL() {
  return (
    <>
      <div className="filterable-items">
              <div className="gallery-item filterable-item manicure">
                <a href="dummy/large-gallery/gallery-1.jpg">
                  <figure className="featured-image">
                    <img src={gallery1} alt="" />
                    <figcaption>
                      <h2 className="gallery-title">Lorem ipsum dolor sit amet</h2>
                      <p>Maecenas dictum suscipit</p>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="gallery-item filterable-item face">
                <a href="dummy/large-gallery/gallery-2.jpg">
                  <figure className="featured-image">
                    <img src={gallery2} alt="" />
                    <figcaption>
                      <h2 className="gallery-title">Consectetur adipisicing elit</h2>
                      <p>Maecenas dictum suscipit</p>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="gallery-item filterable-item hair">
                <a href="dummy/large-gallery/gallery-3.jpg">
                  <figure className="featured-image">
                    <img src={gallery3} alt="" />
                    <figcaption>
                      <h2 className="gallery-title">Repellat fugit tenetur</h2> 
                      <p>Maecenas dictum suscipit</p>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="gallery-item filterable-item pedicure">
                <a href="dummy/large-gallery/gallery-4.jpg">
                  <figure className="featured-image">
                    <img src={gallery4} alt="" />
                    <figcaption>
                      <h2 className="gallery-title">Asperiores quas voluptatem</h2>
                      <p>Maecenas dictum suscipit</p>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="gallery-item filterable-item face">
                <a href="dummy/large-gallery/gallery-5.jpg">
                  <figure className="featured-image">
                    <img src={gallery5} alt="" />
                    <figcaption>
                      <h2 className="gallery-title">Ex quos ab perspiciatis</h2>
                      <p>Maecenas dictum suscipit</p>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="gallery-item filterable-item face">
                <a href="dummy/large-gallery/gallery-6.jpg">
                  <figure className="featured-image">
                    <img src={gallery6} alt="" />
                    <figcaption>
                      <h2 className="gallery-title">Natus dolores ad et ipsam</h2>
                      <p>Maecenas dictum suscipit</p>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="gallery-item filterable-item manicure">
                <a href="dummy/large-gallery/gallery-7.jpg">
                  <figure className="featured-image">
                    <img src={gallery7} alt="" />
                    <figcaption>
                      <h2 className="gallery-title">Hic nisi. Animi placeat</h2>
                      <p>Maecenas dictum suscipit</p>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="gallery-item filterable-item face">
                <a href="dummy/large-gallery/gallery-8.jpg">
                  <figure className="featured-image">
                    <img src={gallery8} alt="" />
                    <figcaption>
                      <h2 className="gallery-title">Obcaecati quam</h2>
                      <p>Maecenas dictum suscipit</p>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="gallery-item filterable-item face">
                <a href="dummy/large-gallery/gallery-9.jpg">
                  <figure className="featured-image">
                    <img src={gallery9} alt="" />
                    <figcaption>
                      <h2 className="gallery-title">quam exercitationem</h2>
                      <p>Maecenas dictum suscipit</p>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="gallery-item filterable-item manicure">
                <a href="dummy/large-gallery/gallery-10.jpg">
                  <figure className="featured-image">
                    <img src={gallery10} alt="" />
                    <figcaption>
                      <h2 className="gallery-title">Hic nisi. Animi placeat</h2>
                      <p>Maecenas dictum suscipit</p>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="gallery-item filterable-item makeup">
                <a href="dummy/large-gallery/gallery-11.jpg">
                  <figure className="featured-image">
                    <img src={gallery11} alt="" />
                    <figcaption>
                      <h2 className="gallery-title">Obcaecati quam</h2>
                      <p>Maecenas dictum suscipit</p>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="gallery-item filterable-item makeup">
                <a href="dummy/large-gallery/gallery-12.jpg">
                  <figure className="featured-image">
                    <img src={gallery12} alt="" />
                    <figcaption>
                      <h2 className="gallery-title">quam exercitationem</h2>
                      <p>Maecenas dictum suscipit</p>
                    </figcaption>
                  </figure>
                </a>
              </div>
            </div>
    </>
  )
}
