import React, { useState } from "react";
import styled from "styled-components";
import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../actions";

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
                  password: "",
                }}
                onSubmit={values => {
                  dispatch(login(values));
                }}
              >
                <Form>
                  <div className="form-group">
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Email Address"
                    />
                  </div>
                  <label htmlFor="lastName">Last Name</label>
                  <div className="form-group">
                    <Field
                      id="password"
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div className="sign-up-details">
                    <button
                      type="submit"
                      className="nav-link signup-btn btn btn-primary generic-btn"
                    >
                      Login
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
