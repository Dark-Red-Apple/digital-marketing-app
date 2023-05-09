import { useEffect, useRef } from "react"
import { useForm } from "react-hook-form"
import { CSSTransition } from "react-transition-group"

function RegisterForm() {
  const emailErrorRef = useRef(null)
  const usernameErrorRef = useRef(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", reValidateMode: false })

  // Validate Inputs
  const email = register("email", {
    required: "Email address is required",
    pattern: {
      value: /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/,
      message: "Please Enter a Valid Email Address",
    },
  })

  const userName = register("userName", {
    required: "Username is required",
    minLength: {
      value: 6,
      message: "The username should be at least 6 characters",
    },
    maxLength: {
      value: 20,
      message: "The username should be at most 20 characters",
    },
    pattern: {
      value: /^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      message: `The username must follow these rules:
       \n 1. only alphabets and numbers 
       \n 2. can not contain _., ._, __, .. 
       \n 3. no _ at the beginning or the end`,
    },
  })

  return (
    <div className="dma-register text-black text-center  w-100 ">
      <h3>Please Register</h3>

      <form
        className="dma-register-form"
        onSubmit={handleSubmit((data) => {
          console.log(data)
        })}
      >
        <div className="dma-form-group mt-md-4 d-flex flex-column">
          <input {...email} onBlur={(e) => email.onBlur(e)} placeholder="Email" />
          {/* the nodeRef is necessary or we will have findDOMNode is deprecated error */}
          <CSSTransition in={Boolean(errors.email)} nodeRef={emailErrorRef} classNames="formErrorMessage" timeout={330} unmountOnExit>
            <div className="alert alert-danger small formErrorMessage">{errors.email?.message}</div>
          </CSSTransition>
        </div>
        <div className="dma-form-group mt-md-4 d-flex flex-column">
          <input {...userName} onBlur={(e) => userName.onBlur(e)} placeholder="User Name" />
          {errors.userName && console.log(errors.userName)}
          <CSSTransition in={Boolean(errors.userName)} nodeRef={usernameErrorRef} classNames="formErrorMessage" timeout={330} unmountOnExit>
            <div className="alert alert-danger small formErrorMessage">{errors.userName?.message}</div>
          </CSSTransition>
        </div>
        <div className="dma-form-group mt-md-4 d-flex flex-column">
          <input type="password" placeholder="Password" />
        </div>
        <div className="dma-form-group mt-md-4 d-flex flex-column">
          <input type="password" placeholder="Password" />
        </div>
        <input type="submit" className="mt-4 dma-btn dma-btn__bg-yellow" />
      </form>
    </div>
  )
}
export default RegisterForm
