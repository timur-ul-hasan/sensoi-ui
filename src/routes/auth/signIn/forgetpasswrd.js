import React, { Component } from "react";

class forgetpassword extends Component {
  render() {
    return (
      <div class="generic-body-login" id="forgot-psw">
        <div class="modal-dialog generic-modal">
          <div class="modal-content">
            <div class="modal-body">
              <form method="Post">
                <input
                  type="hidden"
                  name="csrfmiddlewaretoken"
                  value="3o8ulwcvnfQrXIFtUnoo1qEAz4yuldU3Yi7ZxOeyyEnR8TzNvAckWjJ7UrB9tbEg"
                />
                <p class="forgot-psw-txt">
                  Enter Your E-Mail Address And We’ll Send You A Link To Reset Your Password
                </p>
                <div class="form-group">
                  <div id="div_id_email" class="form-group">
                    {" "}
                    <label for="id_email" class=" requiredField">
                      Email<span class="asteriskField">*</span>{" "}
                    </label>{" "}
                    <div class="">
                      {" "}
                      <input
                        type="email"
                        name="email"
                        maxlength="254"
                        class="emailinput form-control"
                        required
                        id="id_email"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-check">
                  <div class="form-group">
                    <input type="checkbox" id="check2" />
                    <label for="check2">keep me logged in</label>
                  </div>
                </div>
                <div class="btn-decoration">
                  <span>Forgot Your Password ?</span>
                </div>
                <div class="fgt-btn">
                  <button
                    type="submit"
                    class="btn btn-primary reset-psw-btn generic-btn"
                    data-toggle="modal"
                    data-target="#reset-psw"
                  >
                    Reset
                  </button>
                </div>
                <div class="sign-up-details">
                  <a href="/sign
                  
                  up/" class="nav-link signup-btn">
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
    );
  }
}

export default forgetpassword;
