import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
// import Route from './Route';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import Services from './Components/Services';
import Gallery from './Components/Gallery';
import Face from './Components/Gallery/Face'
import Hair from './Components/Gallery/Hair'
import Makeup from './Components/Gallery/Makeup'
import Manicure from './Components/Gallery/Manicure'
import Pedicure from './Components/Gallery/Pedicure'
import ShowALL from './Components/Gallery/ShowALL';
import Params from './Components/Params';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       },
//       {
//         path: "service",
//         element: <Services />
//       },
//       {
//         path: "gallery",
//         element: <Gallery />
//       }
//     ]
//   },
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='service' element={<Services/>} />
      <Route 
      path='gallery' 
      element={<Gallery/>} 
      >
        <Route path="/gallery" element={<ShowALL />} />
        <Route path="/gallery/face" element={<Face />} />
        <Route path="/gallery/hair" element={<Hair />} />
        <Route path="/gallery/makeup" element={<Makeup />} />
        <Route path="/gallery/manicure" element={<Manicure />} />
        <Route path="/gallery/pedicure" element={<Pedicure />} />
        </Route>
      <Route path='service/:param' element={<Params/>} />
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider
      router={router}
     />
  </React.StrictMode>
);


