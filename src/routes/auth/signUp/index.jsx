import React, { useState, useReducer } from "react";
import styled from "styled-components";
import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import { signUp } from "../actions";
import signupReducer from "./reducer";
export default () => {
  const dispatch = useDispatch();
  // const [state, dispatch] = useReducer(signupReducer);
  // console.log(state, "form signup ");
  return (
    <div className="generic-body-login">
      <div className="modal" id="login">
        <div className="modal-dialog generic-modal">
          <div className="modal-content">
            <div className="modal-body">
              <Formik
                initialValues={{
                  email: "",
                  password2: "",
                  full_name: "",
                  password1: "",
                }}
                onSubmit={values => {
                  dispatch(signUp(values));
                }}
              >
                <Form>
                  <div className="form-group">
                    <label htmlFor="lastName">Full Name</label>
                    <Field
                      type="text"
                      id="full_name"
                      name="full_name"
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName">Email</label><span class="asteriskField">*</span>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Email Address"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName">Password</label><span class="asteriskField">*</span>
                    <Field
                      id="password1"
                      type="password"
                      name="password1"
                      className="form-control"
                      placeholder="Password"
                    />
                     <small id="hint_id_password1" class="form-text text-muted">The password must be between 6 and 8 characters</small>
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName">Password Confirmation</label>
                    <Field
                      id="password2"
                      type="password"
                      name="password2"
                      className="form-control"
                      placeholder="Password Confirmation"
                    />
                  </div>
                     {/* Signup Footer */}
                       <div class="form-check">
                            <div class="form-group">
                                <input type="checkbox" id="check" class="cagree" />
                                <label for="check">I have accepted the Term and Conditions</label>

                            </div>
                        </div>
                        <div class="btn-decoration"><span>Sign up</span></div>
                        <button type="submit" class="btn btn-primary generic-btn">Sign up</button>
                        <div class="sign-up-details">
                            <a href="/login/" class="nav-link login-btn"> Login</a> <span> if you already have an account.</span>
                        </div>

                  {/* <div className="sign-up-details">
                    <button
                      type="submit"
                      className="nav-link signup-btn btn btn-primary generic-btn"
                    >
                      Sign Up
                    </button>
                    {/* <span> if you don&apos;t have an account.</span> */}
                  {/* </div> */} 
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
