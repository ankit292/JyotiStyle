import React from 'react'
import gallery3 from './../../dummy/large-gallery/gallery-3.jpg'
export default function Makeup() {
  return (
    <>
      <div className="filterable-items">
        <div className="gallery-item filterable-item manicure">
          <a href="dummy/large-gallery/gallery-1.jpg">
            <figure className="featured-image">
              <img src={gallery3} alt="" />
              <figcaption>
                <h2 className="gallery-title">Lorem ipsum dolor sit amet</h2>
                <p>Maecenas dictum suscipit</p>
              </figcaption>
            </figure>
          </a>
        </div>
      </div>
    </>
  )
}
