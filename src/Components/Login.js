import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const history = useNavigate(null)
  const [crrValue, setValue] = useState({
    email: "",
    password: "",
  });
  const logValue = (e) => {
    const val = e.target.value;
    setValue({ ...crrValue, [e.target.name]: val });
  };
  const logSubmit = async (e) => {
    e.preventDefault();
    const loginPost = await fetch("/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: crrValue.email,
        password: crrValue.password,
      }),
    });
    const json = await loginPost.json();
    if(json.success === true){
      localStorage.setItem('authToken', json.authToken)
      history("/service");
    }else{
      console.log('login undefined');
      history("/");
    }
  };
  return (
    <>
   <div className="container" >

      <form method="POST" onSubmit={logSubmit} style={{margin:'40px 0px'}}>
        <div className="row mb-3" style={{marginBottom:'20px'}}>
          <label htmlFor="email" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              onChange={logValue}
              style={{width:'100%',color:'#fff'}}
            />
          </div>
        </div>
        <div className="row mb-3" style={{marginBottom:'20px'}}>
          <label htmlFor="password" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={logValue}
              style={{width:'100%',color:'#fff'}}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary" style={{padding:'10px 20px'}}>
          Sign in
        </button>
      </form>
      </div>
    </>
  );
}
