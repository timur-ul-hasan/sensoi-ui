import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { File, Project, Ingest } from "./Menu";
import view from "../../assets/images/admin-icon1.svg";
import recentlyadd from "../../assets/images/admin-icon2.svg";
import favourit from "../../assets/images/admin-icon3.svg";
import trash from "../../assets/images/admin-icon4.svg";
import icon from "../../assets/images/hamburger.svg";
import admin from "../../assets/images/analyze.svg";
import help from "../../assets/images/help-icon.svg";
// import redo from "../.../assets/images/redo-icon.svg";
import undo from "../../assets/images/undo-icon.svg";
import screenshot from "../../assets/images/screenshot-icon.svg";
import print from "../../assets/images/print-icon.svg";
import inser from "../../assets/images/insert-icon.svg";
import edit from "../../assets/images/edit-icon.svg";
import update from "../../assets/images/update-icon.svg";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addFavorite, addFile } from "../../routes/dashboard/actions";
import Tabs from "react-bootstrap/Tabs";
import TabContent from "react-bootstrap/TabContent";
import Tab from "react-bootstrap/Tab";
import Modal from "react-bootstrap/Modal";

export default ({ entries }) => {
  return (
    <div id="wrapper">
      <div className="admin-panel">
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
                    <img src={view} type="image" className="d-inline" alt="icon" width="20" />{" "}
                    <span>View</span>
                  </a>

                  <a href="/dashboard/?sorted=True" className="icon-div">
                    <img src={recentlyadd} type="image " className="d-inline" alt="icon" />
                    <span>Recently Added</span>
                  </a>
                  <a href="/dashboard/favorite_list/" className="icon-div">
                    <img src={favourit} type="" className="d-inline" alt="icon" />{" "}
                    <span>Favorites</span>
                  </a>
                  <a href="#" className="icon-div">
                    <img src={trash} className="d-inline" alt="icon" width="17" />
                    <span>Trash</span>
                  </a>
                  <a href="#" className="icon-div analyze-tab">
                    <img src={admin} className="d-inline" alt="icon" width="31" />
                    <span>Admin</span>
                  </a>
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
        <div class="admin-dashboard container" id="main">
          <div class="row row-offcanvas row-offcanvas-left">
            <div class="sidebar-offcanvas" id="sidebar" role="navigation">
              <aside class="">
                <div class="container nopadding">
                  <Col>
                    <ul class="nav nav-tabs">
                      <Tabs defaultActiveKey="File" transition={false} id="noanim-tab-example">
                        <Tab eventKey="File" title="Filter">
                          <div class="tab-content">
                            <div id="home" class="tab-pane fade in active">
                              <p>File Type</p>
                              <ul class="select-type">
                                <li>
                                  <a href="#">PDF</a>
                                </li>
                                <li>
                                  <a href="#">DOC</a>
                                </li>
                                <li>
                                  <a href="#">TXT</a>
                                </li>
                              </ul>
                              <p>Year</p>
                              <div class="select-date">
                                <input type="text" placeholder="2008" />
                                <span>to</span>
                                <input type="text" placeholder="2009" />
                              </div>
                              <p>Author Name</p>
                              <div class="search-name">
                                <input type="text" placeholder="Search by author name" />
                              </div>
                              <p>Key words</p>
                              <div class="search-name">
                                <input type="text" placeholder="Write a key word" />
                              </div>
                              <button type="button" class="type-button blue-btn">
                                books
                              </button>
                              <button type="button" class="type-button red-btn">
                                Statistics
                              </button>
                            </div>
                          </div>
                        </Tab>
                        <Tab eventKey="Filter" title="Report">
                          <div id="analyze" class="tab-pane fade">
                            <div id="MainMenu1">
                              <div class="list-group panel">
                                <a
                                  href="#demo1"
                                  class="list-group-item list-group-item-success collapsed"
                                  data-toggle="collapse"
                                  data-parent="#MainMenu"
                                  aria-expanded="false"
                                >
                                  Layout
                                </a>
                                <div class="collapse" id="demo1">
                                  <a
                                    href="#SubMenu2"
                                    class="list-group-item subitem"
                                    data-toggle="collapse"
                                    data-parent="#SubMenu1"
                                  >
                                    Folder number 1
                                  </a>
                                  <a href="javascript:;" class="list-group-item subitem">
                                    Folder number 2
                                  </a>
                                  <a href="javascript:;" class="list-group-item subitem">
                                    Folder number 3
                                  </a>
                                </div>
                                <a
                                  href="#demo2"
                                  class="list-group-item list-group-item-success collapsed"
                                  data-toggle="collapse"
                                  data-parent="#MainMenu"
                                  aria-expanded="false"
                                >
                                  Title
                                </a>
                                <div class="collapse" id="demo2">
                                  <a
                                    href="#SubMenu2"
                                    class="list-group-item subitem"
                                    data-toggle="collapse"
                                    data-parent="#SubMenu2"
                                  >
                                    Folder number 1
                                  </a>
                                  <a href="javascript:;" class="list-group-item subitem">
                                    Folder number 2
                                  </a>
                                  <a href="javascript:;" class="list-group-item subitem">
                                    Folder number 3
                                  </a>
                                </div>
                                <a
                                  href="#demo3"
                                  class="list-group-item list-group-item-success collapsed"
                                  data-toggle="collapse"
                                  data-parent="#MainMenu"
                                  aria-expanded="false"
                                >
                                  Tag Item
                                </a>
                                <div class="collapse" id="demo3">
                                  <a
                                    href="#SubMenu3"
                                    class="list-group-item subitem"
                                    data-toggle="collapse"
                                    data-parent="#SubMenu3"
                                  >
                                    Folder Name 1{" "}
                                  </a>
                                  <a href="javascript:;" class="list-group-item subitem">
                                    Folder number 2
                                  </a>
                                  <a href="javascript:;" class="list-group-item subitem">
                                    Folder number 3
                                  </a>
                                </div>
                                <a
                                  href="#demo4"
                                  class="list-group-item list-group-item-success collapsed"
                                  data-toggle="collapse"
                                  data-parent="#MainMenu"
                                  aria-expanded="false"
                                >
                                  Add Note
                                </a>
                                <div class="collapse" id="demo4">
                                  <a
                                    href="#SubMenu4"
                                    class="list-group-item subitem"
                                    data-toggle="collapse"
                                    data-parent="#SubMenu4"
                                  >
                                    Folder Name 1{" "}
                                  </a>
                                  <a href="javascript:;" class="list-group-item subitem">
                                    Folder number 2
                                  </a>
                                  <a href="javascript:;" class="list-group-item subitem">
                                    Folder number 3
                                  </a>
                                </div>
                                <a
                                  href="#demo5"
                                  class="list-group-item list-group-item-success collapsed"
                                  data-toggle="collapse"
                                  data-parent="#MainMenu"
                                  aria-expanded="false"
                                >
                                  Review
                                </a>
                              </div>
                            </div>
                          </div>
                        </Tab>
                        <Tab eventKey="analyze" title="Analyze">
                          <div id="analyze" class="tab-pane fade">
                            <div id="MainMenu1">
                              <div class="list-group panel">
                                <a
                                  href="#analyze1"
                                  class="list-group-item list-group-item-success collapsed"
                                  data-toggle="collapse"
                                  data-parent="#MainMenu"
                                  aria-expanded="false"
                                >
                                  <span>Sources</span>
                                </a>
                                <div class="collapse" id="analyze1">
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch1"
                                      name="example"
                                    />
                                    <label class="custom-control-label" for="switch1">
                                      A source
                                    </label>
                                  </div>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch2"
                                      name="example"
                                    />
                                    <label class="custom-control-label" for="switch2">
                                      A source name
                                    </label>
                                  </div>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch3"
                                      name="example"
                                    />
                                    <label class="custom-control-label" for="switch3">
                                      A source
                                    </label>
                                  </div>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch4"
                                      name="example"
                                    />
                                    <label class="custom-control-label" for="switch4">
                                      A source name
                                    </label>
                                  </div>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch5"
                                      name="example"
                                    />
                                    <label class="custom-control-label" for="switch5">
                                      A source name
                                    </label>
                                  </div>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch6"
                                      name="example"
                                    />
                                    <label class="custom-control-label" for="switch6">
                                      A source name
                                    </label>
                                  </div>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch7"
                                      name="example"
                                    />
                                    <label class="custom-control-label" for="switch7">
                                      A source name
                                    </label>
                                  </div>
                                  <div class="custom-control custom-switch">
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="switch8"
                                      name="example"
                                    />
                                    <label class="custom-control-label" for="switch8">
                                      A source name
                                    </label>
                                  </div>
                                </div>
                                <a
                                  href="#analyze2"
                                  class="list-group-item list-group-item-success collapsed"
                                  data-toggle="collapse"
                                  data-parent="#MainMenu"
                                  aria-expanded="false"
                                >
                                  Eligibility
                                </a>
                                <div class="collapse" id="analyze2">
                                  <a
                                    href="#SubMenu2"
                                    class="list-group-item subitem"
                                    data-toggle="collapse"
                                    data-parent="#SubMenu2"
                                  >
                                    Folder number 1
                                  </a>
                                  <a href="javascript:;" class="list-group-item subitem">
                                    Folder number 2
                                  </a>
                                  <a href="javascript:;" class="list-group-item subitem">
                                    Folder number 3
                                  </a>
                                </div>
                                <a
                                  href="#analyze3"
                                  class="list-group-item list-group-item-success collapsed"
                                  data-toggle="collapse"
                                  data-parent="#MainMenu"
                                  aria-expanded="false"
                                >
                                  <span>Similarity % </span>
                                </a>
                                <div class="collapse" id="analyze3">
                                  <p>Set the percent</p>
                                  <span id="slider_value">Nothing yet.</span>
                                  <input
                                    type="range"
                                    class="custom-range"
                                    id="customRange1"
                                    value="0.5"
                                    min="0.0"
                                    max="1.0"
                                    step="0.01"
                                  />

                                  <p> Enter key words</p>
                                  <div class="search-name">
                                    <input type="text" placeholder="eg: books, ice, home" />
                                  </div>
                                  <button type="button" class="type-button blue-btn">
                                    books
                                  </button>
                                  <button type="button" class="type-button red-btn">
                                    Statistics
                                  </button>
                                  <p>Path to a reference document</p>
                                  <div class="search-name">
                                    <input
                                      type="text"
                                      placeholder="eg: file path is storage medium"
                                    />
                                  </div>
                                </div>
                                <a
                                  href="#analyze4"
                                  class="list-group-item list-group-item-success collapsed"
                                  data-toggle="collapse"
                                  data-parent="#MainMenu"
                                  aria-expanded="false"
                                >
                                  Relevancy %
                                </a>
                                <div class="collapse" id="analyze4">
                                  <a
                                    href="#SubMenu2"
                                    class="list-group-item subitem"
                                    data-toggle="collapse"
                                    data-parent="#SubMenu2"
                                  >
                                    Folder number 1
                                  </a>
                                  <a href="javascript:;" class="list-group-item subitem">
                                    Folder number 2
                                  </a>
                                  <a href="javascript:;" class="list-group-item subitem">
                                    Folder number 3
                                  </a>
                                </div>
                                <a
                                  href="#analyze5"
                                  class="list-group-item list-group-item-success collapsed"
                                  data-toggle="collapse"
                                  data-parent="#MainMenu"
                                  aria-expanded="false"
                                >
                                  Bias Check
                                </a>
                                <div class="collapse" id="analyze5">
                                  <a
                                    href="#SubMenu2"
                                    class="radio-option list-group-item subitem"
                                    data-toggle="collapse"
                                    data-parent="#SubMenu2"
                                  >
                                    Select Documents
                                  </a>
                                  <a
                                    href="javascript:;"
                                    class="radio-option list-group-item subitem"
                                  >
                                    Recently Selected
                                  </a>
                                  <a
                                    href="#analyze56"
                                    class="radio-option list-group-item list-group-item-success collapsed"
                                    data-toggle="collapse"
                                    data-parent="#MainMenu"
                                    aria-expanded="false"
                                  >
                                    Bias Check Options
                                  </a>

                                  <div class="collapse radio-list" id="analyze56">
                                    <div class="custom-control custom-radio">
                                      <input
                                        type="radio"
                                        class="custom-control-input"
                                        id="defaultUnchecked1"
                                        name="defaultExampleRadios"
                                      />
                                      <label class="custom-control-label" for="defaultUnchecked1">
                                        <span>By Date</span>
                                      </label>
                                    </div>

                                    <div class="custom-control custom-radio">
                                      <input
                                        type="radio"
                                        class="custom-control-input"
                                        id="defaultChecked2"
                                        name="defaultExampleRadios"
                                        checked
                                      />
                                      <label class="custom-control-label" for="defaultChecked2">
                                        By Location
                                      </label>
                                    </div>

                                    <div class="custom-control custom-radio">
                                      <input
                                        type="radio"
                                        class="custom-control-input"
                                        id="defaultChecked3"
                                        name="defaultExampleRadios"
                                        checked
                                      />
                                      <label class="custom-control-label" for="defaultChecked3">
                                        By Facility{" "}
                                      </label>
                                    </div>
                                    <div class="custom-control custom-radio">
                                      <input
                                        type="radio"
                                        class="custom-control-input"
                                        id="defaultChecked4"
                                        name="defaultExampleRadios"
                                        checked
                                      />
                                      <label class="custom-control-label" for="defaultChecked4">
                                        By Population{" "}
                                      </label>
                                    </div>
                                    <div class="custom-control custom-radio">
                                      <input
                                        type="radio"
                                        class="custom-control-input"
                                        id="defaultChecked5"
                                        name="defaultExampleRadios"
                                        checked
                                      />
                                      <label class="custom-control-label" for="defaultChecked5">
                                        By Author{" "}
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <a
                                  href="#analyze6"
                                  class="list-group-item list-group-item-success collapsed"
                                  data-toggle="collapse"
                                  data-parent="#MainMenu"
                                  aria-expanded="false"
                                >
                                  Quality Check
                                </a>
                                <div class="collapse" id="analyze6">
                                  <a
                                    href="#SubMenu2"
                                    class="list-group-item subitem"
                                    data-toggle="collapse"
                                    data-parent="#SubMenu2"
                                  >
                                    Folder number 1
                                  </a>
                                  <a href="" class="list-group-item subitem">
                                    Folder number 2
                                  </a>
                                  <a href="" class="list-group-item subitem">
                                    Folder number 3
                                  </a>
                                </div>
                                <a
                                  href="#analyze7"
                                  class="list-group-item list-group-item-success collapsed"
                                  data-toggle="collapse"
                                  data-parent="#MainMenu"
                                  aria-expanded="false"
                                >
                                  Screening
                                </a>
                                <div class="collapse" id="analyze7">
                                  <a
                                    href="#SubMenu2"
                                    class="list-group-item subitem"
                                    data-toggle="collapse"
                                    data-parent="#SubMenu2"
                                  >
                                    Folder number 1
                                  </a>
                                  <a href="" class="list-group-item subitem">
                                    Folder number 2
                                  </a>
                                  <a href="" class="list-group-item subitem">
                                    Folder number 3
                                  </a>
                                </div>

                                <a
                                  href="#modeling"
                                  class="list-group-item list-group-item-success collapsed"
                                  data-toggle="collapse"
                                  data-parent="#MainMenu"
                                  aria-expanded="false"
                                >
                                  Topic Modeling
                                </a>
                                <div class="collapse" id="modeling">
                                  <a
                                    href="#SubMenu2"
                                    class="list-group-item subitem"
                                    data-toggle="collapse"
                                    data-parent="#SubMenu2"
                                  >
                                    Folder number 1
                                  </a>
                                  <a href="" class="list-group-item subitem">
                                    Folder number 2
                                  </a>
                                  <a href="" class="list-group-item subitem">
                                    Folder number 3
                                  </a>
                                </div>
                                <a
                                  href="#frequencies"
                                  class="list-group-item list-group-item-success collapsed"
                                  data-toggle="collapse"
                                  data-parent="#MainMenu"
                                  aria-expanded="false"
                                >
                                  Frequencies
                                </a>
                                <div class="collapse" id="frequencies">
                                  <a
                                    href="#SubMenu2"
                                    class="list-group-item subitem"
                                    data-toggle="collapse"
                                    data-parent="#SubMenu2"
                                  >
                                    Folder number 1
                                  </a>
                                  <a href="" class="list-group-item subitem">
                                    Folder number 2
                                  </a>
                                  <a href="" class="list-group-item subitem">
                                    Folder number 3
                                  </a>
                                </div>
                                <a
                                  href="#terms"
                                  class="list-group-item list-group-item-success collapsed"
                                  data-toggle="collapse"
                                  data-parent="#MainMenu"
                                  aria-expanded="false"
                                >
                                  Important Terms(TFIDF)
                                </a>
                                <div class="collapse" id="terms">
                                  <a
                                    href="#SubMenu2"
                                    class="list-group-item subitem"
                                    data-toggle="collapse"
                                    data-parent="#SubMenu2"
                                  >
                                    Folder number 1
                                  </a>
                                  <a href="" class="list-group-item subitem">
                                    Folder number 2
                                  </a>
                                  <a href="" class="list-group-item subitem">
                                    Folder number 3
                                  </a>
                                </div>

                                <a
                                  href="#words"
                                  class="list-group-item list-group-item-success collapsed"
                                  data-toggle="collapse"
                                  data-parent="#MainMenu"
                                  aria-expanded="false"
                                >
                                  Bag Of Words
                                </a>
                                <div class="collapse" id="words">
                                  <a
                                    href="#SubMenu2"
                                    class="list-group-item subitem"
                                    data-toggle="collapse"
                                    data-parent="#SubMenu2"
                                  >
                                    Folder number 1
                                  </a>
                                  <a href="#" class="list-group-item subitem">
                                    Folder number 2
                                  </a>
                                  <a href="" class="list-group-item subitem">
                                    Folder number 3
                                  </a>
                                </div>
                                <a
                                  href="#analyze8"
                                  class="list-group-item list-group-item-success collapsed"
                                  data-toggle="collapse"
                                  data-parent="#MainMenu"
                                  aria-expanded="false"
                                >
                                  Rules
                                </a>
                                <div class="collapse" id="analyze8">
                                  <a
                                    href="#SubMenu2"
                                    class="list-group-item subitem"
                                    data-toggle="collapse"
                                    data-parent="#SubMenu2"
                                  >
                                    Folder number 1
                                  </a>
                                  <a href="" class="list-group-item subitem">
                                    Folder number 2
                                  </a>
                                  <a href="" class="list-group-item subitem">
                                    Folder number 3
                                  </a>
                                </div>
                                <a
                                  href="#analyze9"
                                  class="list-group-item list-group-item-success collapsed"
                                  data-toggle="collapse"
                                  data-parent="#MainMenu"
                                  aria-expanded="false"
                                >
                                  Taxonomy
                                </a>
                                <div class="collapse" id="analyze9">
                                  <a
                                    href="#SubMenu2"
                                    class="list-group-item subitem"
                                    data-toggle="collapse"
                                    data-parent="#SubMenu2"
                                  >
                                    Folder number 1
                                  </a>
                                  <a href="" class="list-group-item subitem">
                                    Folder number 2
                                  </a>
                                  <a href="" class="list-group-item subitem">
                                    Folder number 3
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tab>
                      </Tabs>
                    </ul>
                  </Col>
                </div>
              </aside>
            </div>

            <div id="new-project-modal" className="modal fade " role="dialog">
              <div className="modal-dialog modal-md">
                {/* <!-- Modal content--> */}
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">New Project Name</h5>
                  </div>
                  <div className="modal-body">
                    <div id="demo" className="form-group">
                      <input
                        className="form-control primary"
                        type="text"
                        id="new-project-name"
                        placeholder="New Project Name"
                      />
                    </div>
                  </div>
                  <div className="clearfix"></div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-default"
                      data-dismiss="modal"
                      id="new-project-name-btn"
                    >
                      Create
                    </button>
                    <button type="button" className="btn btn-default" data-dismiss="modal">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div id="open-project-modal" className="modal fade " role="dialog">
              <div className="modal-dialog modal-md">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Open Project ...</h5>
                  </div>

                  <div className="modal-body">
                    <ul className="d-flex flex-wrap file-list"></ul>
                  </div>

                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-default"
                      data-dismiss="modal"
                      id="open_folder_btn"
                    >
                      Open
                    </button>
                    <button type="button" className="btn btn-default" data-dismiss="modal">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div id="new-project-upload-files-modal" className="modal fade" role="dialog">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Open Project ...</h5>
                  </div>
                  <div className="modal-body">
                    <h2>Hello</h2>
                  </div>

                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="nopadding admin-right">
              <div className="table-scroll">
                <ul className="drop-menu dashboard-menu navbar  navbar-toggleable-sm navbar-invers nopadding dashboard-header admin-dashboard container flex">
                  <li>Window</li>

                  <li className="btn-group active">
                    <File entries={entries} />
                  </li>
                  <li className="btn-group active">
                    <Project />
                  </li>
                  <li className="btn-group">
                    <Dropdown>
                      <Dropdown.Toggle variant="white" id="dropdown-basic">
                        <span>Edit </span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Cut</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Paste</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Clear</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Find</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Symbol</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li className="btn-group">
                    <Dropdown>
                      <Dropdown.Toggle variant="white" id="dropdown-basic">
                        <span>Update</span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Recent Change</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Update</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Entire Project</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li className="btn-group">
                    <Ingest />
                  </li>
                  <li className="btn-group">
                    <Dropdown>
                      <Dropdown.Toggle variant="white" id="dropdown-basic">
                        <span>Insert</span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1"> Comments</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Pin Drop</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Reminder</Dropdown.Item>
                        <Dropdown.Item href="#/action-2"> Images (PNG)</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li>
                    <a
                      href="uploadcv"
                      className="print-btn btn  btn-lg"
                      data-toggle="modal"
                      data-target="#print"
                    >
                      <img src={print} className="d-inline" alt="icon" width="30" />
                      <span>Print</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <img src={screenshot} className="d-inline" alt="icon" width="30" />{" "}
                      <span>screen shot</span>{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <img src={undo} className="d-inline" alt="icon" width="30" />
                      <span>undo</span>{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <img src={icon} className="d-inline" alt="icon" width="30" />
                      <span>redo</span>{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <img src={help} className="d-inline" alt="icon" width="30" />
                      <span>help</span>{" "}
                    </a>
                  </li>
                </ul>

                {/* Modal */}

                {/* </div> */}
                {/* Closibg */}
                <input type="hidden" value="9a6b96e5-4c2b-4ea1-8e2f-0f9ecf415376" id="parent_id" />
                <div className="content">
                  <h3 id="project-title-h" className="p-1 text-center d-none">
                    Project: Project 1
                  </h3>
                  <div className="table-div" id="main-table">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="row">
                            <div className="custom-control custom-checkbox checkbox-action">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                name="checkbox"
                                id="tablechecked1"
                              />
                              <label className="custom-control-label" for="tablechecked1"></label>
                            </div>
                          </th>
                          <th scope="col"></th>
                          <th scope="col">Author</th>
                          <th scope="col">Year</th>
                          <th scope="col">Title</th>
                          <th scope="col">Journal</th>
                          <th scope="col">More</th>
                        </tr>
                      </thead>
                      <tbody>
                        <i className="loading-main-table fa fa-spin fa-spinner"></i>
                      </tbody>
                    </table>
                  </div>

                  <div className="row pl35" id="bottom-panel">
                    <div className="col-lg-2">
                      <p>Author</p>
                      <p>Client name</p>
                      <p className="rate-text">Rating</p>
                      <div className="star-rating">
                        <span className="fa fa-star-o" data-rating="1"></span>
                        <span className="fa fa-star-o" data-rating="2"></span>
                        <span className="fa fa-star-o" data-rating="3"></span>
                        <span className="fa fa-star-o" data-rating="4"></span>
                        <span className="fa fa-star-o" data-rating="5"></span>
                        <input
                          type="hidden"
                          name="whatever1"
                          className="rating-value"
                          value="2.56"
                        />
                      </div>
                      <p>Like</p>
                      <i className="fa fa-thumbs-up like-bt"></i>
                    </div>
                    <div className="col-lg-1">
                      <p>Year</p>
                      <p>2016</p>
                    </div>
                    <div className="col-lg-5">
                      <p className="property_key">Title</p>
                      <p className="property_val">The Chicago Manual of Style: The ...</p>
                      <p className="property_key">Journal</p>
                      <p className="property_val">The Chicago Manual of Style: The ...</p>
                      <p className="property_key">Description</p>
                      <p className="property_val">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem.
                      </p>
                    </div>
                    <div className="col-lg-3">
                      <div className="form-group">
                        <input
                          className="form-control primary"
                          placeholder="New Tag"
                          id="input-new-tag"
                          type="text"
                        />
                        <button className="btn btn-default" id="btn-add-tag">
                          Add Tag
                        </button>
                      </div>
                      <p>Tags</p>
                      <div id="tag-box">
                        <div className="tag"> Tag 1</div>
                        <div className="tag"> Tag 2</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="new_content">
                    <img
                      src="/static/images/dashboard-item.svg"
                      className="d-inline"
                      alt="icon"
                      width=""
                    />
                    <div className="color-type">
                      <div>
                        <span className="red"></span>
                        <p>word, meaning color</p>
                      </div>
                      <div>
                        <span className="orange"></span>
                        <p>word, meaning color</p>
                      </div>
                      <div>
                        <span className="green"></span>
                        <p>word, meaning color</p>
                      </div>
                      <div>
                        <span className="l-blue"></span>
                        <p>word, meaning color</p>
                      </div>
                      <div>
                        <span className="blue"></span>
                        <p>word, meaning color</p>
                      </div>
                    </div>
                  </div>
                  <div className="upload-files">
                    <div className="form-group">
                      <input type="file" name="file" id="file" className="input-file" />
                      <label for="file" className="btn btn-tertiary js-labelFile">
                        <img
                          src="/static/images/upload.svg"
                          className="d-inline"
                          alt="icon"
                          width="80"
                        />
                        <span className="js-fileName">
                          Upload or Select Documents to see thes Geo Tag
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="map-banner">
                    <div className="container-fluid">
                      <div className="map-responsive">
                        <iframe
                          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                          width="600"
                          height="450"
                          frameborder="0"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                  <div className="date-details">
                    <div className="date-details-inner">
                      <div className="grey-box"></div>
                      <div className="grey-box"></div>
                      <div className="grey-box"></div>
                      <div className="grey-box"></div>
                      <div className="grey-box"></div>
                      <div className="grey-box"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="admin-right-banner">
        <div className="files">
          <iframe className="iframe-preview"></iframe>
        </div>
      </div>
      {/* </div> */}
      <div className="modal" id="print">
        <div className="modal-dialog upload-inner nopadding">
          <div className="modal-content nopadding">
            <div className="modal-header nopadding">
              <div className="container nopadding">
                <h2>Print the file</h2>
              </div>
            </div>
            <div className="modal-body">
              <div>
                <h2> printing content </h2>
              </div>
            </div>
            <div className="modal-inner-footer">
              <div className="print-inner">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <p className="select-tlt">Print</p>
                      <section>
                        <select
                          name="potencial"
                          id="potencial"
                          className="custom-select sources"
                          placeholder="x5481FG"
                        >
                          <option value="A">A</option>
                          <option value="B">x5481F</option>
                          <option value="C">x5481</option>
                          <option value="D">x5481</option>
                        </select>
                      </section>
                      <p className="select-tlt">Paper Size</p>
                      <section>
                        <select
                          name="potencial"
                          id="potencia2"
                          className="custom-select sources"
                          placeholder="A4 (210x297mm)"
                        >
                          <option value="A">A</option>
                          <option value="B">B</option>
                          <option value="C">C</option>
                          <option value="D">D</option>
                        </select>
                      </section>
                      <p className="select-tlt">Copied</p>
                      <section>
                        <select
                          name="potencial"
                          id="potencia3"
                          className="custom-select sources"
                          placeholder="300"
                        >
                          <option value="A">200</option>
                          <option value="B">400</option>
                          <option value="C">300</option>
                          <option value="D">300</option>
                        </select>
                      </section>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="select-decoration">
                        <p className="select-tlt">Copied</p>
                        <div className="qty">
                          <input type="number" className="count" name="qty" value="1" />
                          <span className="minus">-</span>
                          <span className="plus">+</span>
                        </div>
                      </div>
                      <div className="select-decoration">
                        <p className="select-tlt">Pages</p>
                        <section>
                          <select
                            name="potencial"
                            id="potencia4"
                            className="custom-select sources"
                            placeholder="All"
                          >
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                          </select>
                        </section>
                      </div>
                      <div className="select-decoration">
                        <p className="select-tlt">Scale</p>
                        <section>
                          <select
                            name="potencial"
                            id="potencia5"
                            className="custom-select sources"
                            placeholder="Fit to page"
                          >
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                          </select>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="select-decoration">
                        <p className="select-tlt">Orientation</p>
                        <section>
                          <select
                            name="potencial"
                            id="potencia6"
                            className="custom-select sources"
                            placeholder="Landscape"
                          >
                            <option value="A">Portrait</option>
                            <option value="B">Landscape</option>
                            <option value="C">Portrait</option>
                            <option value="D">Landscape</option>
                          </select>
                        </section>
                      </div>
                    </div>
                  </div>

                  <div className="print-btn">
                    <button onclick="myFunction()">Print</button>
                  </div>
                </div>
              </div>
            </div>
            <button type="button" className="close-modal btn" data-dismiss="modal">
              <img src="/static/images/close.svg" alt="icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
