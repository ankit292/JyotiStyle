import React,{useState} from 'react'

import AllImgs from './GalleryImg/GalleryImgs';

export default function ShowALL() {
    const [btnVal, setBtnVal] = useState(AllImgs.allImgs);
    const [classAdd,setClassAdd] = useState('active')

    const findTitle = [...new Set(AllImgs.allImgs.map((crrEl)=> crrEl.title)),'Show all']
    const abc = findTitle.sort();
    const filterMenu = (category)=>{
      const updateItems = AllImgs.allImgs.filter((curElem)=>{
        return curElem.title === category;

      });
      setBtnVal(updateItems)
      setClassAdd(category);
    }
    

  return (
    <>  
    <div className='text-center'>
      <div className='filter-links filterable-nav'>
      <select class="mobile-filter">
          <option value="*">Show all</option>
          <option value=".hair">hair</option>
          <option value=".manicure">manicure</option>
          <option value=".pedicure">pedicure</option>
          <option value=".face">face</option>
          <option value=".makeup">makeup</option>
        </select>
      
          {abc.map((val, ind)=>{
                return(
                  <button 
                  key={ind} 
                  className={(val === 'Show all')?'active':(val === classAdd)?'active':null} 
                  onClick={() => (val === 'Show all')?setBtnVal(AllImgs.allImgs):  filterMenu(val)}>
                    {val}
                  </button>
                )
              })}
          </div>
        </div>
      <div className="filterable-items">
        {btnVal.map((event)=>{
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
        
        {/* {AllImgs.allImgs.map((event)=>{
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
        })} */}
              
      </div>
    </>
  )
}
