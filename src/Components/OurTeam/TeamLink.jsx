import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";

export default function TeamLink(props) {
  return (
    <>
      <Link to={props.urlTo1}>
        <FacebookIcon />
      </Link>
      <Link to={props.urlTo2}>
        <TwitterIcon />
      </Link>
      <Link to={props.urlTo3}>
        <GoogleIcon />
      </Link>
    </>
  );
}
