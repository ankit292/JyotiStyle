import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signin() {
    const history = useNavigate(null)
    const [inputCrrVal, setInputCrrVal] = useState({
        fullName:'',
        email:'',
        phone:'',
        address:'',
        password:'',
        cpassword:''
    })
    const inputVal = (val)=>{
          const inputValue = val.target.value;
          setInputCrrVal({...inputCrrVal, [val.target.name]:inputValue})
    }
    // const port = 'http://localhost:8000'
    const signForm = async(e)=>{
        e.preventDefault();
        
        const signData = await fetch(`/signin`,{
            method:"POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify({
                fullName:inputCrrVal.fullName,
                email:inputCrrVal.email,
                phone:inputCrrVal.phone,
                address:inputCrrVal.address,
                password:inputCrrVal.password,
                cpassword:inputCrrVal.cpassword
            })
        })
        const signJson = await signData.json();

        if(signJson.success){
            localStorage.setItem('authToken',signJson.authToken);
            history('/service')
        }else{
            alert("Error: Invalid Credential")
        }
        

    }
  return (
    <>
    <div className="container">
      <form method="POST" onSubmit={signForm}>
        <div className="row" style={{marginTop:'20px'}}>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control "
              placeholder="Full Name"
              aria-label="Full Name"
              style={{width:'100%',marginBottom:'20px',color:'#fff'}}
              name="fullName"
              onChange={inputVal}
            />
          </div>
          <div className="col-md-6">
            <input
              type="email"
              className="form-control mb-4"
              placeholder="Email"
              aria-label="Email"
              style={{width:'100%',marginBottom:'20px',color:'#fff'}}
              name="email"
              onChange={inputVal}
            />
          </div>
          <div className="col-md-6">
            <input
              type="number"
              className="form-control mb-4"
              placeholder="Phone"
              aria-label="Phone"
              style={{width:'100%',marginBottom:'20px',color:'#fff'}}
              name="phone"
              onChange={inputVal}
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control mb-4"
              placeholder="Address"
              aria-label="Address"
              style={{width:'100%',marginBottom:'20px',color:'#fff'}}
              name="address"
              onChange={inputVal}
            />
          </div>
          <div className="col-md-6">
            <input
              type="password"
              className="form-control mb-4"
              placeholder="Password"
              aria-label="Password"
              style={{width:'100%',marginBottom:'20px',color:'#fff'}}
              name="password"
              onChange={inputVal}
            />
          </div>
          <div className="col-md-6">
            <input
              type="password"
              className="form-control mb-4"
              placeholder="Confirm Password"
              aria-label="Confirm Password"
              style={{width:'100%',marginBottom:'20px',color:'#fff'}}
              name="cpassword"
              onChange={inputVal}
            />
          </div>
          <div className="col-md-6">
            <input
              type="submit"
              className="form-control mb-4"
              placeholder="Sign In"
              aria-label="Sign In"
              style={{width:'50%',marginBottom:'20px',color:'#000',padding:'20px',fontWeight:'700'}}
              
            />
          </div>
        </div>
      </form>
      </div>
    </>
  );
}
