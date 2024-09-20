import React ,{useState}from "react";

import "./LoginSignup.css";

const LoginSignup = () => {
  const [action, setaction] = useState("sign up");
  return (
    <div  className="conatiner">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div  className="inputs">
        {action==="login"?<div></div>:<div className="input">
          <input type="text" placeholder="name"/>
        </div>}
      
        <div className="input">
          <input type="email" placeholder="email" />
        </div>
        <div className="input">
          <input type="password" placeholder="password"/>
        </div>
      </div>
      {action==="sign up"?<div></div>:<div className="forgot-password">lost password ? <span>click here</span></div>}
      
      <div className="submit-container">
        <div className={action==="login"?"submit gray":"submit"} onClick={()=>{setaction("sign up")}}>signup</div>
        <div className={action==="sign up"?"submit gray":"submit"} onClick={()=>{setaction("login")}}>login</div>
      </div>
    </div>
    
  );
};

export default LoginSignup;
