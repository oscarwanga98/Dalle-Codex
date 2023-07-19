import React, { useState } from "react";
// import "./styles.css";

function Login() {
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const handleToggleForm = () => {
    setShowSignUpForm(!showSignUpForm);
  };

  return (
    <div className="container">
      <div className="image-container">
         <img src="../assets/wave.svg" alt="Background" />
      </div>
      <div className="form-container">
        <h2>{showSignUpForm ? "Sign Up" : "Login"}</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          {showSignUpForm && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
              />
            </div>
          )}
          <button type="submit">{showSignUpForm ? "Sign Up" : "Login"}</button>
        </form>
        <div className="switch-container">
          <p>{showSignUpForm ? "Already have an account?" : "Don't have an account?"}</p>
          <button onClick={handleToggleForm}>
            {showSignUpForm ? "Login" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
