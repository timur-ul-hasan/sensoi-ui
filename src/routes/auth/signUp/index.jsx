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
                    <label htmlFor="lastName">Email</label>
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
                    <label htmlFor="lastName">Password</label>
                    <Field
                      id="password1"
                      type="password"
                      name="password1"
                      className="form-control"
                      placeholder="Password"
                    />
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

                  <div className="sign-up-details">
                    <button
                      type="submit"
                      className="nav-link signup-btn btn btn-primary generic-btn"
                    >
                      Sign Up
                    </button>
                    {/* <span> if you don&apos;t have an account.</span> */}
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
