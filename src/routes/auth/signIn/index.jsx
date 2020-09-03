import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginUser } from "../signIn/global_auth/actions";
import { Form, input, Alert } from "reactstrap";
import validateLogin from "./validations";
const initialState = {
  email: "",
  password: "",
  errors: {},
  alert: {},
};
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    document.title = "Login :: Sensoi-ui";
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ errors: {} });
    const data = {
      email: this.state.email.toString(),
      password: this.state.password.toString(),
    };
    
   const { haserror, errors } = validateLogin(data);
   if (haserror,errors) {
      this.setState({ errors });
      return;
      } 
      else {
   this.setState(initialState);
   this.props.loginUser(data);
      }
  // this.props.loginUser(data);
  //     console.log(data);
     
    
  };

  // componentDidMount() {
  //   if (this.props.authentication.isAuthenticated) {
  //     window.location.href = "/home";
  //    }
  //  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.authentication.isAuthenticated) {
      window.location.href = "/home";
    }
    if (nextProps && nextProps.errors) {
      if (nextProps.errors.errors) {
        this.setState({ errors: nextProps.errors.errors });
      }
    }
    if (nextProps && nextProps.alerts) {
      if (nextProps.alerts.alerts) {
        this.setState({ alert: nextProps.alerts.alerts });
      }
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="generic-body-login">
        <div className="modal" id="login">
          <div className="modal-dialog generic-modal">
            <div className="modal-content">
              <div className="modal-body">
                <form onSubmit={this.onSubmit}>
                  {this.state.alert && this.state.alert.msg && (
                    <Alert color={this.state.alert.type}>{this.state.alert.msg}</Alert>
                  )}
                  <div className="form-group">
                    <label for="email">Email</label>
                    <span class="asteriskField">*</span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Email Address"
                    />
                    <p className="error">{errors && errors.email}</p>
                  </div>
                  <div className="form-group">
                    <label for="password">Password</label>
                    <span class="asteriskField">*</span>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChange}
                      className="form-control"
                      placeholder="Password"
                    />
                    <p className="error">{errors && errors.password}</p>
                  </div>
                  <div class="form-check">
                    <div class="form-group">
                      <input type="checkbox" id="check1" />
                      <label for="check1">keep me logged in</label>
                      <a href="/pasword-reset/" class="forgot-psw">
                        Forgot Password ?
                      </a>
                    </div>
                  </div>
                  <div class="btn-decoration">
                    {" "}
                    <span>Login</span>{" "}
                  </div>
                  <button type="submit" class="btn btn-primary generic-btn">
                    Login
                  </button>
                  <div class="sign-up-details">
                    <a href="/signup/" class="nav-link signup-btn">
                      {" "}
                      Sign Up
                    </a>{" "}
                    <span> if you don't have an account.</span>
                    {this.state.alert && this.state.alert.msg && (
                      <Alert color={this.state.alert.type}>{this.state.alert.msg}</Alert>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  authentication: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  alerts: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  authentication: state.auth,
  errors: state.errors,
  alerts: state.alerts,
});

export default connect(mapStateToProps, { loginUser })(Login);
