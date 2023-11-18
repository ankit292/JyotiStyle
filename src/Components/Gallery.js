import React from 'react'

import GalleryLink from './Gallery/GalleryLink'
import { Outlet } from 'react-router-dom'


export default function Gallery() {
  return (
    <main className="main-content">
        <div className="page">
          <div className="container">
            <div className="text-center">
              <div className="filter-links filterable-nav">
                <select className="mobile-filter">
                  <option value="*">Show all</option>
                  <option value=".hair">hair</option>
                  <option value=".manicure">manicure</option>
                  <option value=".pedicure">pedicure</option>
                  <option value=".face">face</option>
                  <option value=".makeup">makeup</option>
                </select>
                <GalleryLink />
              </div>
            </div>
            <Outlet />
            
          </div>
        </div>
      </main>
  )
}
