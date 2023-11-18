import React from 'react'
import person1 from './../dummy/person-1.jpg'
import person2 from './../dummy/person-2.jpg'
import person3 from './../dummy/person-3.jpg'
import person4 from './../dummy/person-4.jpg'
export default function About() {
  return (
    <main className="main-content">
        <div className="page">
          <div className="container">
            <p>Fusce nec congue diam. Maecenas condimentum porttitor nibh in dignissim. Maecenas dictum felis id suscipit facilisis. Quisque et ipsum eleifend, commodo tellus at, ultrices purus. Suspendisse bibendum diam et tortor sodales sagittis. Phasellus rutrum justo libero, in gravida sem laoreet in. Aenean sed elit nec felis elementum scelerisque sit amet nec leo. Curabitur ipsum justo, laoreet quis feugiat at, blandit vel mauris. Vivamus luctus placerat nibh quis tempus. Nunc molestie, mi et suscipit vulputate, sem est rhoncus arcu, a vestibulum nunc magna ac tortor. Sed malesuada quis sem in tincidunt. Sed cursus enim orci, vitae vulputate est condimentum pharetra. Curabitur pretium est quis venenatis pharetra. Vestibulum a leo at quam rutrum vestibulum. Aenean tincidunt tellus quis tortor feugiat, rutrum sollicitudin .</p>
            <div className="row">
              <div className="col-md-4">
                <h3 className="section-title">About</h3>
                <figure><img src="dummy/figure-1.jpg" alt="" /></figure>
                <h4>Donec pulvinar enim ante lacinia consectetur lorem dolor sit amet</h4>
                <p>Aenean vitae nisl dapibus, blandit urna a, consequat arcu. Fusce blandit felis nec mattis condimentum. Phasellus accumsan nisi est, et tincidunt arcu aliquam non. Morbi fringilla, velit ac pretium condimentum, mi libero facilisis arcu, quis dictum mauris orci vel quam. Vestibulum et nulla lorem. Donec a tristique arcu. In eu nisi nec justo.</p>
              </div>
              <div className="col-md-4">
                <h3 className="section-title">Passion</h3>
                <h4>Donec pulvinar enim ante lacinia consectetur lorem dolor sit amet</h4>
                <p>Aenean vitae nisl dapibus, blandit urna a, consequat arcu. Fusce blandit felis nec mattis condimentum. Phasellus accumsan nisi est, et tincidunt arcu aliquam non.</p>
                <h4>Donec pulvinar enim ante lacinia consectetur lorem dolor sit amet</h4>
                <p>Aenean vitae nisl dapibus, blandit urna a, consequat arcu. Fusce blandit felis nec mattis condimentum. Phasellus accumsan nisi est, et tincidunt arcu aliquam non.</p>
                <h4>Donec pulvinar enim ante lacinia consectetur lorem dolor sit amet</h4>
                <p>Aenean vitae nisl dapibus, blandit urna a, consequat arcu. Fusce blandit felis nec mattis condimentum. Phasellus accumsan nisi est, et tincidunt arcu aliquam non.</p>
              </div>
              <div className="col-md-4">
                <h3 className="section-title">Team</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="team small">
                      <figure className="team-image"><img src={person1} alt='dummy'/></figure>
                      <h3 className="team-name">Sarah james</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                    <div className="team small">
                      <figure className="team-image"><img src={person2} alt='dummy'/></figure>
                      <h3 className="team-name">Marta Smith</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="team small">
                      <figure className="team-image"><img src={person3} alt='dummy'/></figure>
                      <h3 className="team-name">Nicole Johnson</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                    <div className="team small">
                      <figure className="team-image"><img src={person4} alt='dummy'/></figure>
                      <h3 className="team-name">Alicia Brown</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur</p>
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
