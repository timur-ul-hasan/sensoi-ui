import React, { Component, browserHistory } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./routes/auth/store";
import setAuthToken from "../src/util/setAuthToken";
import { setCurrentUser } from "./routes/auth/actions";
// import config from "./config/dev_keys";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/style.css";
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import("../src/containers/App/index"));

// Pages
const Login = React.lazy(() => import("../src/containers/App/index"));
const Register = React.lazy(() => import("../src/containers/App/index"));
const Page404 = React.lazy(() => import("../src/containers/App/index"));
const Page500 = React.lazy(() => import("../src/containers/App/index"));

// Check if token exists
if (localStorage.clientSecret) {
  // Set auth token header auth
  setAuthToken(localStorage.clientSecret);
  // Decode token and get user info and exp
  const decoded = localStorage.clientSecret;
  // console.log(decoded);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // const token = store.dispatch(refreshToken(localStorage.clientSecret));
    // localStorage.setItem("clientSecret", token);
    // setAuthToken(token);
    // const decoded = jwt_decode(token);
    // store.dispatch(setCurrentUser(decoded));
    // Token Refresh
    // Logout user
    // store.dispatch(logoutUser());
    // Redirect to login
    // window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
              <Route
                exact
                path="/register"
                name="Register Page"
                render={props => <Register {...props} />}
              />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} />
              <Route path="/" name="Home" render={props => <DefaultLayout {...props} />} />
            </Switch>
          </React.Suspense>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
