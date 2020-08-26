import React, { useState } from "react";
import styled from "styled-components";

export default () => {
  return (
    <div className="generic-body-login">
      <div className="modal" id="login">
        <div className="modal-dialog generic-modal">
          <div className="modal-content">
            <div className="modal-body">
              <form method="POST">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Email Address"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                  />
                  <img
                    src="{% static 'images/eye-icon.svg'%}"
                    alt="icon"
                    height=""
                    width="24"
                    className="eye-icon"
                  />
                </div>
                <div className="form-check">
                  <div className="form-group">
                    <input type="checkbox" id="check1" />
                    <label htmlFor="check1">keep me logged in</label>
                    <a href="{% url 'reset_password' %}" className="forgot-psw">
                      Forgot Password ?
                    </a>
                  </div>
                </div>
                <div className="btn-decoration">
                  {" "}
                  <span>Login</span>{" "}
                </div>
                <button type="submit" className="btn btn-primary generic-btn">
                  Login
                </button>
                <div className="sign-up-details">
                  <a href="{% url 'sign_up' %}" className="nav-link signup-btn">
                    {" "}
                    Sign Up
                  </a>{" "}
                  <span> if you don't have an account.</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
