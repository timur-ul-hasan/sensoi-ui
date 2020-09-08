import React, { Component } from "react";
import { useDispatch } from "react-redux";
import view from "../../assets/images/admin-icon1.svg";
import recentlyadd from "../../assets/images/admin-icon2.svg";
import favourit from "../../assets/images/admin-icon3.svg";
import trash from "../../assets/images/admin-icon4.svg";
import admin from "../../assets/images/analyze.svg";
import logout from "../../assets/images/logout.svg";
import { logoutUser } from "../../routes/auth/actions";
import Button from "react-bootstrap/Button";

export default () => {
  const dispatch = useDispatch();
  return (
    <nav className="navbar  navbar-toggleable-sm navbar-invers nopadding dashboard-header admin-dashboard container">
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#collapsingNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="dashboard-header admin-dashboard admin-dashboard container">
        <div className="row">
          <div className="col-lg-12 col-md-12 dashboard-top-left">
            <div className="display-icon">
              <a href="/dashboard/" className="icon-div">
                <img src={view} type="image" className="d-inline" alt="icon" width="17" />{" "}
                <span>View</span>
              </a>
              <a href="/dashboard/?sorted=True" className="icon-div">
                <img src={recentlyadd} type="image " className="d-inline" alt="icon" width="17" />
                <span>Recently Added</span>
              </a>
              <a href="/dashboard/favorite_list/" className="icon-div">
                <img src={favourit} type="" className="d-inline" alt="icon" width="17"/>{" "}
                <span>Favorites</span>
              </a>
              <a href="#" className="icon-div">
                <img src={trash} className="d-inline" alt="icon" width="13" />
                <span>Trash</span>
              </a>
              <a href="#" className="icon-div analyze-tab">
                <img src={admin} className="d-inline" alt="icon" width="22" />
                <span>Admin</span>
              </a>
              <a onClick={() => {
                  dispatch(logoutUser());
                }} className="icon-div analyze-tab">
                <img src={logout} className="d-inline" alt="icon" width="17" />
                <span>logout</span>
              </a>
              {/* <Button
                variant="link"
                className="icon-div analyze-tab"
                onClick={() => {
                  dispatch(logoutUser());
                }}
              >
                <span>Logout</span>
              </Button> */}
              <form method="POST">
                <div className="search">
                  <input
                    type="hidden"
                    name="csrfmiddlewaretoken"
                    value="h0LEcEX5aKcp6PV2RnCIdzVdtEcQigX2cUK9oWZ8l9JPh0PmsAqE8s0KO1fvqeHf"
                  />
                  <input type="text" name="search" value="" placeholder="Search for a file" />
                  <i className="fa fa-search"></i>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
