import React, { Component } from "react";
import Tabs from "react-bootstrap/Tabs";
import TabContent from "react-bootstrap/TabContent";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default () => {
  return (
    <div className="sidebar-offcanvas" id="sidebar" role="navigation">
      <aside className="">
        <div className="container nopadding">
          <Col>
            <ul className="nav nav-tabs">
              <Tabs defaultActiveKey="File" transition={false} id="noanim-tab-example">
                <Tab eventKey="File" title="Filter">
                  <TabContent>
                    <div id="home" className="tab-pane fade in active">
                      <p>File Type</p>
                      <ul className="select-type">
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
                      <div className="select-date">
                        <input type="text" placeholder="2008" />
                        <span>to</span>
                        <input type="text" placeholder="2009" />
                      </div>
                      <p>Author Name</p>
                      <div className="search-name">
                        <input type="text" placeholder="Search by author name" />
                      </div>
                      <p>Key words</p>
                      <div className="search-name">
                        <input type="text" placeholder="Write a key word" />
                      </div>
                      <button type="button" className="type-button blue-btn">
                        books
                      </button>
                      <button type="button" className="type-button red-btn">
                        Statistics
                      </button>
                    </div>
                  </TabContent>
                </Tab>
                <Tab eventKey="Filter" title="Report">
                  <div id="analyze" className="tab-pane fade">
                    <div id="MainMenu1">
                      <div className="list-group panel">
                        <a
                          href="#demo1"
                          className="list-group-item list-group-item-success collapsed"
                          data-toggle="collapse"
                          data-parent="#MainMenu"
                          aria-expanded="false"
                        >
                          Layout
                        </a>
                        <div className="collapse" id="demo1">
                          <a
                            href="#SubMenu2"
                            className="list-group-item subitem"
                            data-toggle="collapse"
                            data-parent="#SubMenu1"
                          >
                            Folder number 1
                          </a>
                          <a href="javascript:;" className="list-group-item subitem">
                            Folder number 2
                          </a>
                          <a href="javascript:;" className="list-group-item subitem">
                            Folder number 3
                          </a>
                        </div>
                        <a
                          href="#demo2"
                          className="list-group-item list-group-item-success collapsed"
                          data-toggle="collapse"
                          data-parent="#MainMenu"
                          aria-expanded="false"
                        >
                          Title
                        </a>
                        <div className="collapse" id="demo2">
                          <a
                            href="#SubMenu2"
                            className="list-group-item subitem"
                            data-toggle="collapse"
                            data-parent="#SubMenu2"
                          >
                            Folder number 1
                          </a>
                          <a href="javascript:;" className="list-group-item subitem">
                            Folder number 2
                          </a>
                          <a href="javascript:;" className="list-group-item subitem">
                            Folder number 3
                          </a>
                        </div>
                        <a
                          href="#demo3"
                          className="list-group-item list-group-item-success collapsed"
                          data-toggle="collapse"
                          data-parent="#MainMenu"
                          aria-expanded="false"
                        >
                          Tag Item
                        </a>
                        <div className="collapse" id="demo3">
                          <a
                            href="#SubMenu3"
                            className="list-group-item subitem"
                            data-toggle="collapse"
                            data-parent="#SubMenu3"
                          >
                            Folder Name 1{" "}
                          </a>
                          <a href="javascript:;" className="list-group-item subitem">
                            Folder number 2
                          </a>
                          <a href="javascript:;" className="list-group-item subitem">
                            Folder number 3
                          </a>
                        </div>
                        <a
                          href="#demo4"
                          className="list-group-item list-group-item-success collapsed"
                          data-toggle="collapse"
                          data-parent="#MainMenu"
                          aria-expanded="false"
                        >
                          Add Note
                        </a>
                        <div className="collapse" id="demo4">
                          <a
                            href="#SubMenu4"
                            className="list-group-item subitem"
                            data-toggle="collapse"
                            data-parent="#SubMenu4"
                          >
                            Folder Name 1{" "}
                          </a>
                          <a href="javascript:;" className="list-group-item subitem">
                            Folder number 2
                          </a>
                          <a href="javascript:;" className="list-group-item subitem">
                            Folder number 3
                          </a>
                        </div>
                        <a
                          href="#demo5"
                          className="list-group-item list-group-item-success collapsed"
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
                  <div id="analyze" className="tab-pane fade">
                    <div id="MainMenu1">
                      <div className="list-group panel">
                        <a
                          href="#analyze1"
                          className="list-group-item list-group-item-success collapsed"
                          data-toggle="collapse"
                          data-parent="#MainMenu"
                          aria-expanded="false"
                        >
                          <span>Sources</span>
                        </a>
                        <div className="collapse" id="analyze1">
                          <div className="custom-control custom-switch">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="switch1"
                              name="example"
                            />
                            <label className="custom-control-label" for="switch1">
                              A source
                            </label>
                          </div>
                          <div className="custom-control custom-switch">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="switch2"
                              name="example"
                            />
                            <label className="custom-control-label" for="switch2">
                              A source name
                            </label>
                          </div>
                          <div className="custom-control custom-switch">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="switch3"
                              name="example"
                            />
                            <label className="custom-control-label" for="switch3">
                              A source
                            </label>
                          </div>
                          <div className="custom-control custom-switch">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="switch4"
                              name="example"
                            />
                            <label className="custom-control-label" for="switch4">
                              A source name
                            </label>
                          </div>
                          <div className="custom-control custom-switch">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="switch5"
                              name="example"
                            />
                            <label className="custom-control-label" for="switch5">
                              A source name
                            </label>
                          </div>
                          <div className="custom-control custom-switch">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="switch6"
                              name="example"
                            />
                            <label className="custom-control-label" for="switch6">
                              A source name
                            </label>
                          </div>
                          <div className="custom-control custom-switch">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="switch7"
                              name="example"
                            />
                            <label className="custom-control-label" for="switch7">
                              A source name
                            </label>
                          </div>
                          <div className="custom-control custom-switch">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="switch8"
                              name="example"
                            />
                            <label className="custom-control-label" for="switch8">
                              A source name
                            </label>
                          </div>
                        </div>
                        <a
                          href="#analyze2"
                          className="list-group-item list-group-item-success collapsed"
                          data-toggle="collapse"
                          data-parent="#MainMenu"
                          aria-expanded="false"
                        >
                          Eligibility
                        </a>
                        <div className="collapse" id="analyze2">
                          <a
                            href="#SubMenu2"
                            className="list-group-item subitem"
                            data-toggle="collapse"
                            data-parent="#SubMenu2"
                          >
                            Folder number 1
                          </a>
                          <a href="javascript:;" className="list-group-item subitem">
                            Folder number 2
                          </a>
                          <a href="javascript:;" className="list-group-item subitem">
                            Folder number 3
                          </a>
                        </div>
                        <a
                          href="#analyze3"
                          className="list-group-item list-group-item-success collapsed"
                          data-toggle="collapse"
                          data-parent="#MainMenu"
                          aria-expanded="false"
                        >
                          <span>Similarity % </span>
                        </a>
                        <div className="collapse" id="analyze3">
                          <p>Set the percent</p>
                          <span id="slider_value">Nothing yet.</span>
                          <input
                            type="range"
                            className="custom-range"
                            id="customRange1"
                            value="0.5"
                            min="0.0"
                            max="1.0"
                            step="0.01"
                          />

                          <p> Enter key words</p>
                          <div className="search-name">
                            <input type="text" placeholder="eg: books, ice, home" />
                          </div>
                          <button type="button" className="type-button blue-btn">
                            books
                          </button>
                          <button type="button" className="type-button red-btn">
                            Statistics
                          </button>
                          <p>Path to a reference document</p>
                          <div className="search-name">
                            <input type="text" placeholder="eg: file path is storage medium" />
                          </div>
                        </div>
                        <a
                          href="#analyze4"
                          className="list-group-item list-group-item-success collapsed"
                          data-toggle="collapse"
                          data-parent="#MainMenu"
                          aria-expanded="false"
                        >
                          Relevancy %
                        </a>
                        <div className="collapse" id="analyze4">
                          <a
                            href="#SubMenu2"
                            className="list-group-item subitem"
                            data-toggle="collapse"
                            data-parent="#SubMenu2"
                          >
                            Folder number 1
                          </a>
                          <a href="javascript:;" className="list-group-item subitem">
                            Folder number 2
                          </a>
                          <a href="javascript:;" className="list-group-item subitem">
                            Folder number 3
                          </a>
                        </div>
                        <a
                          href="#analyze5"
                          className="list-group-item list-group-item-success collapsed"
                          data-toggle="collapse"
                          data-parent="#MainMenu"
                          aria-expanded="false"
                        >
                          Bias Check
                        </a>
                        <div className="collapse" id="analyze5">
                          <a
                            href="#SubMenu2"
                            className="radio-option list-group-item subitem"
                            data-toggle="collapse"
                            data-parent="#SubMenu2"
                          >
                            Select Documents
                          </a>
                          <a href="javascript:;" className="radio-option list-group-item subitem">
                            Recently Selected
                          </a>
                          <a
                            href="#analyze56"
                            className="radio-option list-group-item list-group-item-success collapsed"
                            data-toggle="collapse"
                            data-parent="#MainMenu"
                            aria-expanded="false"
                          >
                            Bias Check Options
                          </a>

                          <div className="collapse radio-list" id="analyze56">
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                className="custom-control-input"
                                id="defaultUnchecked1"
                                name="defaultExampleRadios"
                              />
                              <label className="custom-control-label" for="defaultUnchecked1">
                                <span>By Date</span>
                              </label>
                            </div>

                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                className="custom-control-input"
                                id="defaultChecked2"
                                name="defaultExampleRadios"
                                checked
                              />
                              <label className="custom-control-label" for="defaultChecked2">
                                By Location
                              </label>
                            </div>

                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                className="custom-control-input"
                                id="defaultChecked3"
                                name="defaultExampleRadios"
                                checked
                              />
                              <label className="custom-control-label" for="defaultChecked3">
                                By Facility{" "}
                              </label>
                            </div>
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                className="custom-control-input"
                                id="defaultChecked4"
                                name="defaultExampleRadios"
                                checked
                              />
                              <label className="custom-control-label" for="defaultChecked4">
                                By Population{" "}
                              </label>
                            </div>
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                className="custom-control-input"
                                id="defaultChecked5"
                                name="defaultExampleRadios"
                                checked
                              />
                              <label className="custom-control-label" for="defaultChecked5">
                                By Author{" "}
                              </label>
                            </div>
                          </div>
                        </div>
                        <a
                          href="#analyze6"
                          className="list-group-item list-group-item-success collapsed"
                          data-toggle="collapse"
                          data-parent="#MainMenu"
                          aria-expanded="false"
                        >
                          Quality Check
                        </a>
                        <div className="collapse" id="analyze6">
                          <a
                            href="#SubMenu2"
                            className="list-group-item subitem"
                            data-toggle="collapse"
                            data-parent="#SubMenu2"
                          >
                            Folder number 1
                          </a>
                          <a href="" className="list-group-item subitem">
                            Folder number 2
                          </a>
                          <a href="" className="list-group-item subitem">
                            Folder number 3
                          </a>
                        </div>
                        <a
                          href="#analyze7"
                          className="list-group-item list-group-item-success collapsed"
                          data-toggle="collapse"
                          data-parent="#MainMenu"
                          aria-expanded="false"
                        >
                          Screening
                        </a>
                        <div className="collapse" id="analyze7">
                          <a
                            href="#SubMenu2"
                            className="list-group-item subitem"
                            data-toggle="collapse"
                            data-parent="#SubMenu2"
                          >
                            Folder number 1
                          </a>
                          <a href="" className="list-group-item subitem">
                            Folder number 2
                          </a>
                          <a href="" className="list-group-item subitem">
                            Folder number 3
                          </a>
                        </div>

                        <a
                          href="#modeling"
                          className="list-group-item list-group-item-success collapsed"
                          data-toggle="collapse"
                          data-parent="#MainMenu"
                          aria-expanded="false"
                        >
                          Topic Modeling
                        </a>
                        <div className="collapse" id="modeling">
                          <a
                            href="#SubMenu2"
                            className="list-group-item subitem"
                            data-toggle="collapse"
                            data-parent="#SubMenu2"
                          >
                            Folder number 1
                          </a>
                          <a href="" className="list-group-item subitem">
                            Folder number 2
                          </a>
                          <a href="" className="list-group-item subitem">
                            Folder number 3
                          </a>
                        </div>
                        <a
                          href="#frequencies"
                          className="list-group-item list-group-item-success collapsed"
                          data-toggle="collapse"
                          data-parent="#MainMenu"
                          aria-expanded="false"
                        >
                          Frequencies
                        </a>
                        <div className="collapse" id="frequencies">
                          <a
                            href="#SubMenu2"
                            className="list-group-item subitem"
                            data-toggle="collapse"
                            data-parent="#SubMenu2"
                          >
                            Folder number 1
                          </a>
                          <a href="" className="list-group-item subitem">
                            Folder number 2
                          </a>
                          <a href="" className="list-group-item subitem">
                            Folder number 3
                          </a>
                        </div>
                        <a
                          href="#terms"
                          className="list-group-item list-group-item-success collapsed"
                          data-toggle="collapse"
                          data-parent="#MainMenu"
                          aria-expanded="false"
                        >
                          Important Terms(TFIDF)
                        </a>
                        <div className="collapse" id="terms">
                          <a
                            href="#SubMenu2"
                            className="list-group-item subitem"
                            data-toggle="collapse"
                            data-parent="#SubMenu2"
                          >
                            Folder number 1
                          </a>
                          <a href="" className="list-group-item subitem">
                            Folder number 2
                          </a>
                          <a href="" className="list-group-item subitem">
                            Folder number 3
                          </a>
                        </div>

                        <a
                          href="#words"
                          className="list-group-item list-group-item-success collapsed"
                          data-toggle="collapse"
                          data-parent="#MainMenu"
                          aria-expanded="false"
                        >
                          Bag Of Words
                        </a>
                        <div className="collapse" id="words">
                          <a
                            href="#SubMenu2"
                            className="list-group-item subitem"
                            data-toggle="collapse"
                            data-parent="#SubMenu2"
                          >
                            Folder number 1
                          </a>
                          <a href="#" className="list-group-item subitem">
                            Folder number 2
                          </a>
                          <a href="" className="list-group-item subitem">
                            Folder number 3
                          </a>
                        </div>
                        <a
                          href="#analyze8"
                          className="list-group-item list-group-item-success collapsed"
                          data-toggle="collapse"
                          data-parent="#MainMenu"
                          aria-expanded="false"
                        >
                          Rules
                        </a>
                        <div className="collapse" id="analyze8">
                          <a
                            href="#SubMenu2"
                            className="list-group-item subitem"
                            data-toggle="collapse"
                            data-parent="#SubMenu2"
                          >
                            Folder number 1
                          </a>
                          <a href="" className="list-group-item subitem">
                            Folder number 2
                          </a>
                          <a href="" className="list-group-item subitem">
                            Folder number 3
                          </a>
                        </div>
                        <a
                          href="#analyze9"
                          className="list-group-item list-group-item-success collapsed"
                          data-toggle="collapse"
                          data-parent="#MainMenu"
                          aria-expanded="false"
                        >
                          Taxonomy
                        </a>
                        <div className="collapse" id="analyze9">
                          <a
                            href="#SubMenu2"
                            className="list-group-item subitem"
                            data-toggle="collapse"
                            data-parent="#SubMenu2"
                          >
                            Folder number 1
                          </a>
                          <a href="" className="list-group-item subitem">
                            Folder number 2
                          </a>
                          <a href="" className="list-group-item subitem">
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
  );
};
