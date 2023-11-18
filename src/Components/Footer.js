import React from 'react'
import {Link} from 'react-router-dom'
import iconMapSmall from './../images/icon-map-small.png'
import iconEnvelopeSmall from './../images/icon-envelope-small.png'
import iconPhoneSmall from './../images/icon-phone-small.png'
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
export default function Footer() {
  return (
    <div>
      <footer className="site-footer">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="widget contact-widget">
                        <h3 className="widget-title">Contact</h3>
                        <div className="contact-info">
                            <address>
                                <img src={iconMapSmall} className="icon" alt='icon' />
                                <p><strong>Company name</strong> 563 Avenue Street, New York</p>
                            </address>
                            <Link to="mailto:contact@companyname.com" className="mail">
                                <img src={iconEnvelopeSmall} className="icon" alt='icon' />
                                    contact@companyname.com
                            </Link>
                            <Link to="tel:(500)942042259" className="phone">
                                <img src={iconPhoneSmall} className="icon" alt='icon' />
                                    (500)942042259
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="widget">
                        <h3 className="widget-title">Social Media</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident et praesentium </p>
                        <div className="social-links justify-content-start" style={{justifyContent:'start'}}>
                            <Link href="#">
                                <FacebookIcon />
                                </Link>
                            <Link href="#">
                            <TwitterIcon />
                                </Link>
                            <Link href="#">
                            <GoogleIcon />
                                </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="widget">
                        <h3 className="widget-title">Newsletter</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident et praesentium </p>
                        <form action="#" className="subscribe-form">
                            <input type="email" placeholder="Enter our email..." />
                            <input type="submit" value="Sign up" />
                        </form>
                    </div>
                </div>
            </div>

            <div className="colophon">
                <p>Copyright 2014 Company name. Designed by Themezy. All rights reserved.</p>
            </div>
        </div>
    </footer>
    </div>
  )
}
