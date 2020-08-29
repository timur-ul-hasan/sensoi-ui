import React, { Component } from "react";
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
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
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
                    <a href="/dashboard/" class="icon-div">
                      <img src={view} type="image" class="d-inline" alt="icon" width="20" />{" "}
                      <span>View</span>
                    </a>

                    <a href="/dashboard/?sorted=True" class="icon-div">
                      <img src={recentlyadd} type="image " class="d-inline" alt="icon" />
                      <span>Recently Added</span>
                    </a>
                    <a href="/dashboard/favorite_list/" class="icon-div">
                      <img src={favourit} type="" class="d-inline" alt="icon" />{" "}
                      <span>Favorites</span>
                    </a>
                    <a href="#" class="icon-div">
                      <img src={trash} class="d-inline" alt="icon" width="17" />
                      <span>Trash</span>
                    </a>
                    <a href="#" class="icon-div analyze-tab">
                      <img src={admin} class="d-inline" alt="icon" width="31" />
                      <span>Admin</span>
                    </a>
                    <form method="POST">
                      <div class="search">
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
            <div class="flex-row d-flex open-sidebar">
              <button
                type="button"
                className="hidden-md-up navbar-toggler"
                data-toggle="offcanvas"
                title="Toggle responsive left sidebar"
              >
                <span class="navbar-toggler-icon">
                  <img src="/static/images/hamburger.svg" width="20" className="d-inline" />
                </span>
              </button>
            </div>
            <div class="navbar-collapse collapse" id="collapsingNavbar">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    All Files <span class="sr-only">Home</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#features">
                    Recently added
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#myAlert" data-toggle="collapse">
                    Favorites
                  </a>
                </li>
              </ul>
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link" href="" data-target="#myModal" data-toggle="modal">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          {/* Panel */}
          <div className="admin-dashboard container" id="main">
            <div className="row row-offcanvas row-offcanvas-left">
              <div className="sidebar-offcanvas" id="sidebar" role="navigation">
                <aside className="">
                  <div className="container nopadding">
                    <ul className="nav nav-tabs">
                      <li className="row1">
                        <a data-toggle="tab" href="#home">
                          {" "}
                          Filter
                        </a>
                      </li>
                      <li class="">
                        <a data-toggle="tab" href="#folder">
                          {" "}
                          Reports
                        </a>
                      </li>
                      <li class="analyze-list">
                        <a data-toggle="tab" href="#analyze">
                          {" "}
                          Analyze
                        </a>
                      </li>
                    </ul>
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
                      <div id="folder" class="tab-pane fade">
                        <div class="container-fluid nopadding">
                          <div class="row">
                            <div class="col-md-12">
                              <div id="MainMenu">
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
                                    <a href="" class="list-group-item subitem">
                                      Folder number 2
                                    </a>
                                    <a href="" class="list-group-item subitem">
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
                                    <a href="" class="list-group-item subitem">
                                      Folder number 2
                                    </a>
                                    <a href="" class="list-group-item subitem">
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
                                    <a href="" class="list-group-item subitem">
                                      Folder number 2{" "}
                                    </a>
                                    <a href="" class="list-group-item subitem">
                                      Folder number 3{" "}
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
                                    <a href="" class="list-group-item subitem">
                                      Folder number 2
                                    </a>
                                    <a href="" class="list-group-item subitem">
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
                          </div>
                        </div>
                      </div>
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
                                ></input>
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
                                ></input>
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
                                ></input>
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
                                ></input>
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
                              <a href="" class="list-group-item subitem">
                                Folder number 2
                              </a>
                              <a href="" class="list-group-item subitem">
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
                              ></input>
                              <p> Enter key words</p>
                              <div class="search-name">
                                <input type="text" placeholder="eg: books, ice, home"></input>
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
                                ></input>
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
                              <a href="" class="list-group-item subitem">
                                Folder number 2
                              </a>
                              <a href="" class="list-group-item subitem">
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
                              <a href="" class="radio-option list-group-item subitem">
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
                                  ></input>
                                  <label class="custom-control-label" for="defaultUnchecked1">
                                    <span>By Date</span>
                                  </label>
                                </div>

                                <div class="custom-control custom-radio">
                                  <input
                                    onChnage={this.onChnage}
                                    type="radio"
                                    class="custom-control-input"
                                    id="defaultChecked2"
                                    name="defaultExampleRadios"
                                    checked
                                  ></input>
                                  <label class="custom-control-label" for="defaultChecked2">
                                    By Location
                                  </label>
                                </div>

                                <div class="custom-control custom-radio">
                                  <input
                                    onChnage={this.onChnage}
                                    type="radio"
                                    class="custom-control-input"
                                    id="defaultChecked3"
                                    name="defaultExampleRadios"
                                    checked
                                  ></input>
                                  <label class="custom-control-label" for="defaultChecked3">
                                    By Facility{" "}
                                  </label>
                                </div>

                                <div class="custom-control custom-radio">
                                  <input
                                    onChnage={this.onChnage}
                                    type="radio"
                                    class="custom-control-input"
                                    id="defaultChecked4"
                                    name="defaultExampleRadios"
                                    checked
                                  ></input>
                                  <label class="custom-control-label" for="defaultChecked4">
                                    By Population{" "}
                                  </label>
                                </div>
                                <div class="custom-control custom-radio">
                                  <input
                                    onChnage={this.onChnage}
                                    type="radio"
                                    class="custom-control-input"
                                    id="defaultChecked5"
                                    name="defaultExampleRadios"
                                    checked
                                  ></input>
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
                              <a href="" class="list-group-item subitem">
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
                              <a href="javascript:;" class="list-group-item subitem">
                                Folder number 2
                              </a>
                              <a href="javascript:;" class="list-group-item subitem">
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
                    </div>
                  </div>
                </aside>
              </div>
              {/* Right Admin Panel */}
              <div id="new-project-modal" class="modal fade " role="dialog">
                <div class="modal-dialog modal-md">
                  {/* <!-- Modal content--> */}
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">New Project Name</h5>
                    </div>
                    <div class="modal-body">
                      <div id="demo" class="form-group">
                        <input
                          class="form-control primary"
                          type="text"
                          id="new-project-name"
                          placeholder="New Project Name"
                        />
                      </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-default"
                        data-dismiss="modal"
                        id="new-project-name-btn"
                      >
                        Create
                      </button>
                      <button type="button" class="btn btn-default" data-dismiss="modal">
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div id="open-project-modal" class="modal fade " role="dialog">
                <div class="modal-dialog modal-md">
                  <div class="modal-content">
                    {/* <!--              <input type="hidden" value="" id="project_parent_id"/>--> */}
                    {/* <!--              <input type="hidden" value="0c6669b4-938c-4a11-8fd0-c9252b845bc9" id="project_folder_id"/>--> */}
                    <div class="modal-header">
                      <h5 class="modal-title">Open Project ...</h5>
                    </div>

                    <div class="modal-body">
                      <ul class="d-flex flex-wrap file-list"></ul>
                    </div>

                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-default"
                        data-dismiss="modal"
                        id="open_folder_btn"
                      >
                        Open
                      </button>
                      <button type="button" class="btn btn-default" data-dismiss="modal">
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div id="new-project-upload-files-modal" class="modal fade" role="dialog">
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">Open Project ...</h5>
                    </div>
                    <div class="modal-body">
                      <h2>Hello</h2>
                    </div>

                    <div class="modal-footer">
                      <button type="button" class="btn btn-default" data-dismiss="modal">
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* right */}
              <div class="nopadding admin-right">
                <div class="table-scroll">
                  <ul class="drop-menu dashboard-menu navbar  navbar-toggleable-sm navbar-invers nopadding dashboard-header admin-dashboard container flex">
                    <li>Window</li>
                    <li class="btn-group active">
                      <button
                        type="button"
                        class="btn dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img src={icon} class="d-inline" alt="icon" width="30" />
                        <span>File </span>
                      </button>
                      <div class="dropdown-menu">
                        <a
                          class="dropdown-item"
                          href="#"
                          data-toggle="modal"
                          data-target="#folderModal"
                        >
                          Open
                        </a>
                        <a class="dropdown-item" href="#">
                          Open Recent
                        </a>
                        <a class="dropdown-item close-file-menu" href="#">
                          Close
                        </a>
                      </div>
                    </li>
                    <li class="btn-group active">
                      <button
                        type="button"
                        class="btn dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img
                          src="/static/images/project-icon.svg"
                          class="d-inline"
                          alt="icon"
                          width="30"
                        />
                        <span>Project </span>
                      </button>
                      <div class="dropdown-menu">
                        {/* <!--                    <a class="dropdown-item" href="/dashboard/open-file/">New Project</a>--> */}
                        <a
                          class="dropdown-item"
                          href=""
                          id="nav-menu-new-project"
                          data-toggle="modal"
                          data-target="#new-project-modal"
                        >
                          New Project
                        </a>
                        <a
                          class="dropdown-item open-button"
                          href=""
                          data-toggle="modal"
                          data-target="#open-project-modal"
                        >
                          Open
                        </a>
                        <a class="dropdown-item" href="#">
                          Close
                        </a>
                      </div>
                    </li>
                    <li class="btn-group">
                      <button
                        type="button"
                        class="btn dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img src={edit} class="d-inline" alt="icon" width="30" />
                        <span>Edit</span>
                      </button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item cut-button" href="">
                          Cut
                        </a>
                        <a class="dropdown-item past-button" href="#">
                          Paste
                        </a>
                        <a class="dropdown-item clear-button" href="">
                          Clear
                        </a>
                        <a class="dropdown-item" href="/book/clear-all/">
                          Clear All
                        </a>
                        <a class="dropdown-item" href="#">
                          Find
                        </a>
                        <a class="dropdown-item" href="#">
                          Insert Symbols
                        </a>
                      </div>
                    </li>
                    <li class="btn-group">
                      <button
                        type="button"
                        class="btn dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img src={update} class="d-inline" alt="icon" width="30" />
                        <span>Update</span>
                      </button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">
                          Recent Change
                        </a>
                        <a class="dropdown-item" href="#">
                          Entire Project
                        </a>
                      </div>
                    </li>
                    <li class="btn-group">
                      <button
                        type="button"
                        class="btn dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img
                          src="/static/images/ingest-icon.svg"
                          class="d-inline"
                          alt="icon"
                          width="30"
                        />
                        <span>Ingest</span>
                      </button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="/dashboard/add_file/csv">
                          Structured Files (CSV, XLS)
                        </a>
                        <a class="dropdown-item" href="/dashboard/add_file/pdf">
                          Documents (PDF, TXT)
                        </a>
                        <a class="dropdown-item" href="/dashboard/add_file/jpg">
                          Scan Documents (PDF, JPEG)
                        </a>
                        <a class="dropdown-item" href="/dashboard/add_file/png">
                          Images (PNG)
                        </a>
                      </div>
                    </li>
                    <li class="btn-group">
                      <button
                        type="button"
                        class="btn dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img src={inser} class="d-inline" alt="icon" width="30" />
                        <span>Insert</span>
                      </button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">
                          Comments
                        </a>
                        <a class="dropdown-item" href="#">
                          Pin Drop
                        </a>
                        <a class="dropdown-item" href="#">
                          Reminder
                        </a>
                      </div>
                    </li>
                    <li>
                      <a
                        href="uploadcv"
                        class="print-btn btn  btn-lg"
                        data-toggle="modal"
                        data-target="#print"
                      >
                        <img src={print} class="d-inline" alt="icon" width="30" />
                        <span>Print</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <img src={screenshot} class="d-inline" alt="icon" width="30" />{" "}
                        <span>screen shot</span>{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <img src={undo} class="d-inline" alt="icon" width="30" />
                        <span>undo</span>{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <img src={icon} class="d-inline" alt="icon" width="30" />
                        <span>redo</span>{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <img src={help} class="d-inline" alt="icon" width="30" />
                        <span>help</span>{" "}
                      </a>
                    </li>
                  </ul>

                  {/* Modal */}
                  <div>
                    <div id="folderModal" class="modal fade " role="dialog">
                      <div class="modal-dialog modal-md">
                        <div class="modal-content" id="modal-wrapper">
                          <input
                            type="hidden"
                            value="9a6b96e5-4c2b-4ea1-8e2f-0f9ecf415376"
                            id="modal_parent_id"
                          ></input>
                          <input
                            type="hidden"
                            value="0c6669b4-938c-4a11-8fd0-c9252b845bc9"
                            id="modal_folder_id"
                          ></input>
                          <div class="modal-header">
                            <h5 class="modal-title">Folder Open</h5>
                          </div>
                          <div class="modal-body">
                            <h4>
                              <i class="fa fa-arrow-circle-left filemanager-up-arrow"></i>
                              <i class="fa fa-arrow-circle-right filemanager-forward-arrow ml-5"></i>
                              <i class="fa fa-trash filemanager-file-delete mr-5 pull-right"></i>
                              <i
                                type="button"
                                data-toggle="collapse"
                                data-target="#demo"
                                id="create_new_folder_btn"
                                class=" mr-5 fa fa-plus-circle pull-right"
                              ></i>
                            </h4>
                            <div id="demo" class="collapse form-group">
                              <input type="text" id="input_folder_name" placeholder="Folder Name" />

                              <button id="btn_create_folder">Create</button>
                            </div>

                            <ul class="d-flex flex-wrap file-list">
                              <li
                                class="filemanager-item item-folder"
                                data-type="folder"
                                data-id="4208545c-ea27-49b9-88be-dfb20d901bac"
                              >
                                <i class="fa fa-folder-o">&nbsp;Projects</i>
                              </li>

                              <li
                                class="filemanager-item item-folder"
                                data-type="folder"
                                data-id="a38e8afc-fbf3-4431-8a28-6e73702d4151"
                              >
                                <i class="fa fa-folder-o">&nbsp;root</i>
                              </li>

                              <li
                                class="filemanager-item item-folder"
                                data-type="folder"
                                data-id="fe0eec1b-767c-45c3-8fbf-33db7ac25aeb"
                              >
                                <i class="fa fa-folder-o">&nbsp;test</i>
                              </li>

                              <li
                                class="filemanager-item item-file d-flex align-items-center"
                                data-id="d8d09543-d13a-4a5f-bb61-c302ccd68621"
                              >
                                <input
                                  type="checkbox"
                                  id="del-check-d8d09543-d13a-4a5f-bb61-c302ccd68621"
                                  class="f-manager-del-check"
                                />
                                <i class="fa fa-file-o flex">&nbsp;159.pdf</i>
                              </li>

                              <li
                                class="filemanager-item item-file d-flex align-items-center"
                                data-id="26f875d5-6e28-414b-bb28-04777ac87ae7"
                              >
                                <input
                                  type="checkbox"
                                  id="del-check-26f875d5-6e28-414b-bb28-04777ac87ae7"
                                  class="f-manager-del-check"
                                />
                                <i class="fa fa-file-o flex">2-2.pdf</i>
                              </li>

                              <li
                                class="filemanager-item item-file d-flex align-items-center"
                                data-id="0e8a2b12-099c-4039-81e1-e60dc75516b2"
                              >
                                <input
                                  type="checkbox"
                                  id="del-check-0e8a2b12-099c-4039-81e1-e60dc75516b2"
                                  class="f-manager-del-check"
                                />
                                <i class="fa fa-file-o flex">2-3.pdf</i>
                              </li>

                              <li
                                class="filemanager-item item-file d-flex align-items-center"
                                data-id="7e3aef62-7155-49fe-8070-583e8a835fa2"
                              >
                                <input
                                  type="checkbox"
                                  id="del-check-7e3aef62-7155-49fe-8070-583e8a835fa2"
                                  class="f-manager-del-check"
                                />
                                <i class="fa fa-file-o flex">&nbsp;4-2.pdf</i>
                              </li>

                              <li
                                class="filemanager-item item-file d-flex align-items-center"
                                data-id="66b75d18-cd11-46fb-b9f0-36f0405f6995"
                              >
                                <input
                                  type="checkbox"
                                  id="del-check-66b75d18-cd11-46fb-b9f0-36f0405f6995"
                                  class="f-manager-del-check"
                                />
                                <i class="fa fa-file-o flex">&nbsp;6-2.pdf</i>
                              </li>

                              <li
                                class="filemanager-item item-file d-flex align-items-center"
                                data-id="3c949823-3e49-43fe-adb6-c6cae4884762"
                              >
                                <input
                                  type="checkbox"
                                  id="del-check-3c949823-3e49-43fe-adb6-c6cae4884762"
                                  class="f-manager-del-check"
                                />
                                <i class="fa fa-file-o flex">&nbsp;7-2.pdf</i>
                              </li>

                              <li
                                class="filemanager-item item-file d-flex align-items-center"
                                data-id="595b7354-517e-4fc4-9168-ca2bca5437d5"
                              >
                                <input
                                  type="checkbox"
                                  id="del-check-595b7354-517e-4fc4-9168-ca2bca5437d5"
                                  class="f-manager-del-check"
                                />
                                <i class="fa fa-file-o flex">&nbsp;7-3.pdf</i>
                              </li>

                              <li
                                class="filemanager-item item-file d-flex align-items-center"
                                data-id="3ed9742c-b3c5-42fc-bb41-2f200b1ee391"
                              >
                                <input
                                  type="checkbox"
                                  id="del-check-3ed9742c-b3c5-42fc-bb41-2f200b1ee391"
                                  class="f-manager-del-check"
                                />
                                <i class="fa fa-file-o flex">&nbsp;content.pdf</i>
                              </li>

                              <li
                                class="filemanager-item item-file d-flex align-items-center"
                                data-id="9bd9b84c-ff8e-4b98-80f1-fa58f902af55"
                              >
                                <input
                                  type="checkbox"
                                  id="del-check-9bd9b84c-ff8e-4b98-80f1-fa58f902af55"
                                  class="f-manager-del-check"
                                />
                                <i class="fa fa-file-o flex">&nbsp;Customer_Management_App.pdf</i>
                              </li>
                              <li
                                class="filemanager-item item-file d-flex align-items-center"
                                data-id="7498b681-72af-4762-aa9d-ff5b89875b18"
                              >
                                <input
                                  type="checkbox"
                                  id="del-check-7498b681-72af-4762-aa9d-ff5b89875b18"
                                  class="f-manager-del-check"
                                ></input>
                                <i class="fa fa-file-o flex">&nbsp;UI-DMS.pdf</i>
                              </li>
                            </ul>
                          </div>
                          <div class="clearfix"></div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-default"
                              data-dismiss="modal"
                              id="filemgr_open_folder_btn"
                            >
                              Open
                            </button>
                            <button type="button" class="btn btn-default" data-dismiss="modal">
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* </div> */}
                  {/* Closibg */}
                  <input
                    type="hidden"
                    value="9a6b96e5-4c2b-4ea1-8e2f-0f9ecf415376"
                    id="parent_id"
                  />
                  <div class="content">
                    <h3 id="project-title-h" class="p-1 text-center d-none">
                      Project: Project 1
                    </h3>
                    <div class="table-div" id="main-table">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="row">
                              <div class="custom-control custom-checkbox checkbox-action">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  name="checkbox"
                                  id="tablechecked1"
                                />
                                <label class="custom-control-label" for="tablechecked1"></label>
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
                          <i class="loading-main-table fa fa-spin fa-spinner"></i>
                        </tbody>
                      </table>
                    </div>

                    <div class="row pl35" id="bottom-panel">
                      <div class="col-lg-2">
                        <p>Author</p>
                        <p>Client name</p>
                        <p class="rate-text">Rating</p>
                        <div class="star-rating">
                          <span class="fa fa-star-o" data-rating="1"></span>
                          <span class="fa fa-star-o" data-rating="2"></span>
                          <span class="fa fa-star-o" data-rating="3"></span>
                          <span class="fa fa-star-o" data-rating="4"></span>
                          <span class="fa fa-star-o" data-rating="5"></span>
                          <input type="hidden" name="whatever1" class="rating-value" value="2.56" />
                        </div>
                        <p>Like</p>
                        <i class="fa fa-thumbs-up like-bt"></i>
                      </div>
                      <div class="col-lg-1">
                        <p>Year</p>
                        <p>2016</p>
                      </div>
                      <div class="col-lg-5">
                        <p class="property_key">Title</p>
                        <p class="property_val">The Chicago Manual of Style: The ...</p>
                        <p class="property_key">Journal</p>
                        <p class="property_val">The Chicago Manual of Style: The ...</p>
                        <p class="property_key">Description</p>
                        <p class="property_val">
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                          clita kasd gubergren, no sea takimata sanctus est Lorem.
                        </p>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <input
                            class="form-control primary"
                            placeholder="New Tag"
                            id="input-new-tag"
                            type="text"
                          />
                          <button class="btn btn-default" id="btn-add-tag">
                            Add Tag
                          </button>
                        </div>
                        <p>Tags</p>
                        <div id="tag-box">
                          <div class="tag"> Tag 1</div>
                          <div class="tag"> Tag 2</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="new_content">
                      <img
                        src="/static/images/dashboard-item.svg"
                        class="d-inline"
                        alt="icon"
                        width=""
                      />
                      <div class="color-type">
                        <div>
                          <span class="red"></span>
                          <p>word, meaning color</p>
                        </div>
                        <div>
                          <span class="orange"></span>
                          <p>word, meaning color</p>
                        </div>
                        <div>
                          <span class="green"></span>
                          <p>word, meaning color</p>
                        </div>
                        <div>
                          <span class="l-blue"></span>
                          <p>word, meaning color</p>
                        </div>
                        <div>
                          <span class="blue"></span>
                          <p>word, meaning color</p>
                        </div>
                      </div>
                    </div>
                    <div class="upload-files">
                      <div class="form-group">
                        <input type="file" name="file" id="file" class="input-file" />
                        <label for="file" class="btn btn-tertiary js-labelFile">
                          <img
                            src="/static/images/upload.svg"
                            class="d-inline"
                            alt="icon"
                            width="80"
                          />
                          <span class="js-fileName">
                            Upload or Select Documents to see thes Geo Tag
                          </span>
                        </label>
                      </div>
                    </div>
                    <div class="map-banner">
                      <div class="container-fluid">
                        <div class="map-responsive">
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
                    <div class="date-details">
                      <div class="date-details-inner">
                        <div class="grey-box"></div>
                        <div class="grey-box"></div>
                        <div class="grey-box"></div>
                        <div class="grey-box"></div>
                        <div class="grey-box"></div>
                        <div class="grey-box"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="admin-right-banner">
          <div class="files">
            <iframe class="iframe-preview"></iframe>
          </div>
        </div>
        <div class="modal" id="print">
          <div class="modal-dialog upload-inner nopadding">
            <div class="modal-content nopadding">
              <div class="modal-header nopadding">
                <div class="container nopadding">
                  <h2>Print the file</h2>
                </div>
              </div>
              <div class="modal-body">
                <div>
                  <h2> printing content </h2>
                </div>
              </div>
              <div class="modal-inner-footer">
                <div class="print-inner">
                  <div class="container">
                    <div class="row">
                      <div class="col-lg-12">
                        <p class="select-tlt">Print</p>
                        <section>
                          <select
                            name="potencial"
                            id="potencial"
                            class="custom-select sources"
                            placeholder="x5481FG"
                          >
                            <option value="A">A</option>
                            <option value="B">x5481F</option>
                            <option value="C">x5481</option>
                            <option value="D">x5481</option>
                          </select>
                        </section>
                        <p class="select-tlt">Paper Size</p>
                        <section>
                          <select
                            name="potencial"
                            id="potencia2"
                            class="custom-select sources"
                            placeholder="A4 (210x297mm)"
                          >
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                          </select>
                        </section>
                        <p class="select-tlt">Copied</p>
                        <section>
                          <select
                            name="potencial"
                            id="potencia3"
                            class="custom-select sources"
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
                  
                  <div class="container">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="select-decoration">
                          <p class="select-tlt">Copied</p>
                          <div class="qty">
                            <input type="number" class="count" name="qty" value="1" />
                            <span class="minus">-</span>
                            <span class="plus">+</span>
                          </div>
                        </div>
                        <div class="select-decoration">
                          <p class="select-tlt">Pages</p>
                          <section>
                            <select
                              name="potencial"
                              id="potencia4"
                              class="custom-select sources"
                              placeholder="All"
                            >
                              <option value="A">A</option>
                              <option value="B">B</option>
                              <option value="C">C</option>
                              <option value="D">D</option>
                            </select>
                          </section>
                        </div>
                        <div class="select-decoration">
                          <p class="select-tlt">Scale</p>
                          <section>
                            <select
                              name="potencial"
                              id="potencia5"
                              class="custom-select sources"
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
                  <div class="container">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="select-decoration">
                          <p class="select-tlt">Orientation</p>
                          <section>
                            <select
                              name="potencial"
                              id="potencia6"
                              class="custom-select sources"
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

                    <div class="print-btn">
                      <button onclick="myFunction()">Print</button>
                    </div>
                  </div>
                </div>
              </div>
              <button type="button" class="close-modal btn" data-dismiss="modal">
                <img src="/static/images/close.svg" alt="icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
