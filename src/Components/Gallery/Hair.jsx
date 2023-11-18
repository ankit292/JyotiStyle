import React from 'react'
import gallery2 from './../../dummy/large-gallery/gallery-2.jpg'
export default function Hair() {
  return (
    <>
      <div className="filterable-items">
        <div className="gallery-item filterable-item manicure">
          <a href="dummy/large-gallery/gallery-1.jpg">
            <figure className="featured-image">
              <img src={gallery2} alt="" />
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
