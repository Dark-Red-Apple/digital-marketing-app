import React from "react";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="dma-login text-black text-center  w-100 ">
      <h3>Please Login</h3>
      <form className="dma-login-form">
        <div className="dma-form-group mt-4 d-flex">
          <input type="email" placeholder="Email" />
        </div>
        <div className="dma-form-group mt-4 d-flex">
          <input type="password" placeholder="Password" />
        </div>
        <button className="mt-4 dma-btn dma-btn__bg-yellow">Login</button>
      </form>
      <p className="mt-4">Dont have an account? <NavLink className="dma-sec-color-link dma-link" to={'/blog/register'}>Create one</NavLink> </p>
    </div>
  );
}
export default Login;
