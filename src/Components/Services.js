import React, { useEffect } from 'react'
import icon1 from './../images/icon-1.png'
import icon2 from './../images/icon-2.png'
import icon3 from './../images/icon-3.png'
import icon4 from './../images/icon-4.png'
import icon5 from './../images/icon-5.png'
import icon6 from './../images/icon-6.png'
import icon7 from './../images/icon-7.png'
import icon8 from './../images/icon-4.png'
import { useNavigate } from 'react-router-dom'
export default function Services() {
  const history = useNavigate(null)
  const serviseFunc = ()=>{
     
  }
  useEffect(()=>{
    if(localStorage.getItem('authToken')){
      serviseFunc()
    }else{
      history('/signin')
    }
    
  },[])
  return (
    <main className="main-content">
        <div className="page">
          <div className="container">
            <p>Fusce nec congue diam. Maecenas condimentum porttitor nibh in dignissim. Maecenas dictum felis id suscipit facilisis. Quisque et ipsum eleifend, commodo tellus at, ultrices purus. Suspendisse bibendum diam et tortor sodales sagittis. Phasellus rutrum justo libero, in gravida sem laoreet in. Aenean sed elit nec felis elementum scelerisque sit amet nec leo. Curabitur ipsum justo, laoreet quis feugiat at, blandit vel mauris. Vivamus luctus placerat nibh quis tempus. Nunc molestie, mi et suscipit vulputate, sem est rhoncus arcu, a vestibulum nunc magna ac tortor. Sed malesuada quis sem in tincidunt. Sed cursus enim orci, vitae vulputate est condimentum pharetra. Curabitur pretium est quis venenatis pharetra. Vestibulum a leo at quam rutrum vestibulum. Aenean tincidunt tellus quis tortor feugiat, rutrum sollicitudin .</p>
            <div className="row">
              <div className="col-md-3">
                <div className="feature">
                  <img src={icon1} className="feature-image" alt='featureImage'/>
                  <h3 className="feature-title">Voluptatem</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolor </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="feature">
                  <img src={icon2} className="feature-image" alt='featureImage'/>
                  <h3 className="feature-title">COnsequatur</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, minus, totam. Officia </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="feature">
                  <img src={icon3} className="feature-image" alt='featureImage'/>
                  <h3 className="feature-title">Temporibus</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, omnis cum, </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="feature">
                  <img src={icon4} className="feature-image" alt='featureImage'/>
                  <h3 className="feature-title">Perferendis</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, facere numquam porro </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="feature">
                  <img src={icon5} className="feature-image" alt='featureImage'/>
                  <h3 className="feature-title">Voluptatem</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolor perferendis</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="feature">
                  <img src={icon6} className="feature-image" alt='featureImage'/>
                  <h3 className="feature-title">COnsequatur</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, minus, totam. Officia ea</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="feature">
                  <img src={icon7} className="feature-image" alt='featureImage'/>
                  <h3 className="feature-title">Temporibus</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, omnis cum, quo dolorem </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="feature">
                  <img src={icon8} className="feature-image" alt='featureImage'/>
                  <h3 className="feature-title">Perferendis</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, facere numquam porro </p>
                </div>
              </div>
            </div> {/* .row */}
            <div className="row">
              <div className="col-md-6">
                <div className="price-list">
                  <h2 className="section-title">Men's prices</h2>
                  <ul className="prices">
                    <li>Maecenas dictum felis id suscipit facilisis<span className="price">$50</span></li>
                    <li>Maecenas dictum felis id suscipit facilisis<span className="price">$50</span></li>
                    <li>Maecenas dictum felis id suscipit facilisis<span className="price">$50</span></li>
                    <li>Maecenas dictum felis id suscipit facilisis<span className="price">$50</span></li>
                    <li>Maecenas dictum felis id suscipit facilisis<span className="price">$50</span></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="price-list">
                  <h2 className="section-title">women's prices</h2>
                  <ul className="prices">
                    <li>Maecenas dictum felis id suscipit facilisis<span className="price">$50</span></li>
                    <li>Maecenas dictum felis id suscipit facilisis<span className="price">$50</span></li>
                    <li>Maecenas dictum felis id suscipit facilisis<span className="price">$50</span></li>
                    <li>Maecenas dictum felis id suscipit facilisis<span className="price">$50</span></li>
                    <li>Maecenas dictum felis id suscipit facilisis<span className="price">$50</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}
