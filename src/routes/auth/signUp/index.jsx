import React, { useState, useReducer } from "react";
import styled from "styled-components";
import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import { signUpUser } from "../signIn/global_auth/actions";

export default () => {
  const dispatch = useDispatch();

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
                  dispatch(signUpUser(values));
                }}
              >
                <Form>
                  <div className="form-group">
                    <label htmlFor="lastName">Full Name</label>
                    <span className="asteriskField">*</span>
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
                    <span className="asteriskField">*</span>
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
                    <span className="asteriskField">*</span>
                    <Field
                      id="password1"
                      type="password"
                      name="password1"
                      className="form-control"
                      placeholder="Password"
                    />
                    <small id="hint_id_password1" className="form-text text-muted">
                      The password must be between 6 and 8 characters
                    </small>
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
                  <div className="form-check">
                    <div className="form-group">
                      <input type="checkbox" id="check" className="cagree" />
                      <label for="check">I have accepted the Term and Conditions</label>
                    </div>
                  </div>
                  <div className="btn-decoration">
                    <span>Sign up</span>
                  </div>
                  <button type="submit" className="btn btn-primary generic-btn">
                    Sign up
                  </button>
                  <div className="sign-up-details">
                    <p>
                      <a href="/login/" className="login-btn">
                        Login,
                      </a>
                      <span>&nbsp; if you already have an account.</span>
                    </p>
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
