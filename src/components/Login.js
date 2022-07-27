import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {
  function useFormInputs(initialValues) {
    const [value, setValue] = useState("");
    function handleChange(e) {
      setValue(e.target.value);
    }
    return {
      value,
      onChange: handleChange,
    };
  }

  const navigate = useNavigate();

  const email = useFormInputs("");
  const password = useFormInputs("");
  const confirmPassword = useFormInputs("");

  const submit = (e) => {
    e.preventDefault();
    if (
      email.value === "" ||
      password.value === "" ||
      confirmPassword.value === ""
    ) {
      window.alert("Fill all details");
      return;
    }
    if (confirmPassword.value !== password.value) {
      window.alert("Password and confirm Password must be same");
      return;
    }
    window.alert("Login Succesful");
    navigate("/");
  };

  return (
    <div>
      <div>
        <Link to="/">
          {" "}
          <button type="button" className="btn btn-primary">
            Go Back
          </button>
        </Link>
      </div>
      <h1 className="text-center">Login Page</h1>
      <form className="container" onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="Email"
            aria-describedby="emailHelp"
            value={email.value}
            onChange={email.onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password.value}
            onChange={password.onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            ConfirmPassword
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            value={confirmPassword.value}
            onChange={confirmPassword.onChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
