import { useState } from "react";
import { useImmerReducer } from "use-immer";

function LoginForm() {
  // const [email, setEmail] = useState(null);
  // const [password, setPassword] = useState(null);

  // function validation(e) {
  //   e.preventDefault();
  //   if (email === null || email === "") {
  //     window.alert("please fill your Email!");
  //   }
  //   if (password === null || password === "") {
  //     window.alert("please fill your Password!");
  //   }
  // }
  const initialState = {
    email: {
      value: "",
      message: "",
      error: false,
    },
    password: {
      value: "",
      message: "",
      error: false,
    },
    summerError: {
      message: "",
    },
    count: 0,
  };
  function reducFunction(draft, action) {
    switch (action.type) {
      case "emailRequired": {
        if (action.value == "" || action.value == null) {
          draft.email.message = "Please enter your email!";
          draft.email.error = true;
        } else {
          draft.email.error = false;
          draft.email.message = "";
        }
        return;
      }
      case "passwordRequired": {
        if (action.value == "" || action.value == null) {
          draft.password.message = "Please enter your password!";
          draft.password.error = true;
        } else {
          draft.password.error = false;
          draft.password.message = "";
        }
        return;
      }
      case "validationLogin": {
        if (draft.email.error || draft.password.error) {
          draft.summerError.message = "please enter  all required inputs";
        } else {
          draft.summerError.message = "";
          draft.summerError.count++;
        }
        return;
      }
    }
  }

  const [state, dispatch] = useImmerReducer(reducFunction, initialState);

  function validate(e) {
    e.preventDefault();
    dispatch({ type: "emailRequired", value: e.target.value });
    dispatch({ type: "passwordRequired", value: e.target.value });
    dispatch({ type: "validationLogin" });
  }

  return (
    <div className="dma-login text-black text-center  w-100 ">
      <h3>Please Login</h3>
      <form onSubmit={validate} className="dma-login-form">
        <div className="dma-form-group mt-4 d-flex">
          <input
            onChange={(e) => {
              dispatch({ type: "emailRequired", value: e.target.value });
            }}
            type="email"
            placeholder="Email"
          />
          <p>{state.email.message}</p>
        </div>
        <div className="dma-form-group mt-4 d-flex">
          <input
            onChange={(e) => {
              dispatch({ type: "passwordRequired", value: e.target.value });
            }}
            type="password"
            placeholder="Password"
          />
          <p>{state.password.message}</p>
        </div>

        <button className="mt-4 dma-btn dma-btn__bg-yellow">Login</button>
        <p>{state.summerError.message}</p>
      </form>
    </div>
  );
}
export default LoginForm;
