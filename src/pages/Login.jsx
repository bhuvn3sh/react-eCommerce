import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => {
    console.log(e.target.value)
    setEmail(e.target.value);
  }
  const onChangePassword = (e) => {
    console.log(e.target.value)
    setPassword(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("handle Submit Called")
    console.log("Email: ", email )
    console.log("Password: ", password )
  }

  axios.post('https://localhost:5000/api/login', {
    email: email,
    password: password
  }).then(res=> {
    console.log(res.data)
  }).catch(err => {
    console.log(err)
  })

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit = {handleSubmit}>
              <div className="my-3">
                <label for="display-4">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  onChange = {onChangeEmail}
                  name = "email"
                  value = {email}
                />
              </div>
              <div className="my-3">
                <label for="floatingPassword display-4">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange = {onChangePassword}
                  name = "password"
                  value = {password}
                />
              </div>
              <div className="my-3">
                <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
