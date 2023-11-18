import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function GalleryLink() {
  return (
    <>
      <Link to="/gallery" className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }>
        Show all
      </Link>
      <NavLink
        to="/gallery/hair"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
        data-wow-delay=".2s"
        data-filter=".hair"
      >
        hair
      </NavLink>
      <NavLink
        to="/gallery/manicure"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
        data-wow-delay=".4s"
        data-filter=".manicure"
      >
        manicure
      </NavLink>
      <NavLink
        to="/gallery/pedicure"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
        data-wow-delay=".6s"
        data-filter=".pedicure"
      >
        pedicure
      </NavLink>
      <NavLink
        to="/gallery/face"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
        data-wow-delay=".8s"
        data-filter=".face"
      >
        face
      </NavLink>
      <NavLink
        to="/gallery/makeup"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
        data-wow-delay="1s"
        data-filter=".makeup"
      >
        makeup
      </NavLink>
    </>
  );
}
