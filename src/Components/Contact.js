import React from 'react'
import {Link} from 'react-router-dom'
import iconMapSmall from './../images/icon-map-small.png'
import iconEnvelopeSmall from './../images/icon-envelope-small.png'
import iconPhoneSmall from './../images/icon-phone-small.png'
export default function Contact() {
  return (
    <main className="main-content">
        <div className="page">
          <div className="container">
            <p>Omnis iste natus error sit voluptatem doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto Omnis iste natus error sit voluptatem doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto iste natus error sit voluptatem doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
            <div className="row">
              <div className="col-md-5">
                <form action="#" className="contact-form">
                  <input type="text" id="name" placeholder="Name..." />
                  <input type="text" id="email" placeholder="Email..." />
                  <input type="text" id="website" placeholder="Website..." />
                  <textarea name id="message" placeholder="Message..." defaultValue={""} />
                  <div className="text-right">
                    <button className="button large" type="submit">Send Message</button>
                  </div>
                </form>
              </div>
              <div className="col-md-6 col-md-offset-1">
                <div className="map-container">
                  {/* <div className="map" /> */}
                  <div className="address-info">
                    <address>
                      <img src={iconMapSmall} className="icon" alt='icon'/>
                      <p><strong>Company name</strong> 563 Avenue Street, New York</p>
                    </address>
                    <div className="contact-info">
                      <Link to="mailto:contact@companyname.com" className="mail">
                        <img src={iconEnvelopeSmall} className="icon" alt='icon'/>contact@companyname.com</Link>
                      <Link to="tel:(500)942042259" className="phone"><img src={iconPhoneSmall} className="icon" alt='icon'/>(500)942042259</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}
