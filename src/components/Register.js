import React from "react";

function Register() {
  return( <div className="dma-register text-black text-center  w-100 ">
  <h3>Please Register</h3>
  <form className="dma-register-form">
    <div className="dma-form-group mt-4 d-flex">
      <input type="email" placeholder="Email" />
    </div>
    <div className="dma-form-group mt-4 d-flex">
      <input type="text" placeholder="User Name" />
    </div>
    <div className="dma-form-group mt-4 d-flex">
      <input type="password" placeholder="Password" />
    </div>
    <div className="dma-form-group mt-4 d-flex">
      <input type="password" placeholder="Password" />
    </div>
    <button className="mt-4 dma-btn dma-btn__bg-yellow">Register</button>
  </form>
</div>)
 
}
export default Register;
