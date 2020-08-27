import React, { Component } from "react";
import view from "../../assets/images/admin-icon1.svg";
import recentlyadd from "../../assets/images/admin-icon2.svg";
import favourit from "../../assets/images/admin-icon3.svg";
import trash from "../../assets/images/admin-icon4.svg";
import icon from "../../assets/images/hamburger.svg";
import admin from "../../assets/images/analyze.svg";
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
                        ></input>
                        <input
                          type="text"
                          name="search"
                          value=""
                          placeholder="Search for a file"
                        ></input>
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
                  <img src="/static/images/hamburger.svg" width="20" className="d-inline"></img>
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
                                ></input>
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
                                ></input>
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
                                ></input>
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
                                ></input>
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
            </div>
          </div>
        </div>
        {/* Right Admin Panel */}
        
      </div>
    );
  }
}
export default Dashboard;
