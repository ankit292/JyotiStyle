import React from "react";
// import gallery1 from './../../dummy/large-gallery/gallery-1.jpg'
import AllImgs from './GalleryImg/GalleryImgs';
export default function Face() {
  return (
    <>
      <div className="filterable-items">
        {AllImgs.face.map((event)=>{
            const { id,image,name,title,price,description } = event;
            return(
                <div className="gallery-item filterable-item manicure" key={id}>
                  <a className='false'  href="dummy/large-gallery/gallery-1.jpg" alt='dummy'>
                    <figure className="featured-image">
                      <img src={image} alt="" />
                      <figcaption>
                        <span>{name}</span>
                        <h2 className="gallery-title">{title} <span>{price}</span></h2>
                        <p>{description}</p>
                      </figcaption>
                    </figure>
                  </a>
                </div>
            )
          })}
      </div>
    </>
  );
}
