import React, { Component, useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import TabContent from "react-bootstrap/TabContent";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Collapse from "react-bootstrap/Collapse";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import image from "../../assets/images/dashboard-item.svg";
import dashboard from "../../routes/dashboard/dashboard";
export default () => {
  return (
    <div className="sidebar-offcanvas" id="sidebar" role="navigation">
      <aside className="">
        <div className="container nopadding">
          <Col>
            <ul className="nav nav-tabs">
              <Tabs defaultActiveKey="File" transition={false} id="noanim-tab-example">
                <Tab eventKey="File" title="Filter" className="row1">
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
                <Tab eventKey="filter" title="Report" className="analyze-list">
                  <div id="analyze" className="tab-pane fade">
                    <div id="MainMenu1">
                      <div className="list-group panel">
                        <Layout />
                      </div>
                      <div className="list-group panel">
                        <Title />
                      </div>
                      <div className="list-group panel">
                        <TagItem />
                      </div>
                      <div className="list-group panel">
                        <AddNote />
                      </div>
                      <div className="list-group panel">
                        <Review />
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="analyze" title="Analyze" className="analyze-list">
                  <div id="analyze" className="tab-pane fade">
                    <div id="MainMenu1">
                      <div className="list-group panel">
                        <Source />
                      </div>
                      <div className="list-group panel">
                        <Eligibility />
                      </div>
                      <div className="list-group panel">
                        <Similarity />
                      </div>
                      <div className="list-group panel">
                        <Relevancy />
                      </div>
                      <div className="list-group panel">
                        <BaisCheck />
                      </div>
                      <div className="list-group panel">
                        <TopicModeling />
                      </div>
                      <div className="list-group panel">
                        <Frequencies />
                      </div>
                      <div className="list-group panel">
                        <ImportantTerms />
                      </div>
                      <div className="list-group panel">
                        <bagofWords />
                      </div>
                      <div className="list-group panel">
                        <rules />
                      </div>
                      <div className="list-group panel">
                        <Taxonomy />
                      </div>
                      {/* <div>
                        <Dashboard />
                      </div> */}
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
function Source() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="list-group-item list-group-item-success collapsed"
      >
        Source
      </a>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <div className="custom-control custom-switch">
            <input type="checkbox" className="custom-control-input" id="switch1" name="example" />
            <label className="custom-control-label" for="switch1">
              A source
            </label>
          </div>
          <div className="custom-control custom-switch">
            <input type="checkbox" className="custom-control-input" id="switch2" name="example" />
            <label className="custom-control-label" for="switch2">
              A source name
            </label>
          </div>
          <div className="custom-control custom-switch">
            <input type="checkbox" className="custom-control-input" id="switch3" name="example" />
            <label className="custom-control-label" for="switch3">
              A source
            </label>
          </div>
          <div className="custom-control custom-switch">
            <input type="checkbox" className="custom-control-input" id="switch4" name="example" />
            <label className="custom-control-label" for="switch4">
              A source name
            </label>
          </div>
          <div className="custom-control custom-switch">
            <input type="checkbox" className="custom-control-input" id="switch5" name="example" />
            <label className="custom-control-label" for="switch5">
              A source name
            </label>
          </div>
          <div className="custom-control custom-switch">
            <input type="checkbox" className="custom-control-input" id="switch6" name="example" />
            <label className="custom-control-label" for="switch6">
              A source name
            </label>
          </div>
          <div className="custom-control custom-switch">
            <input type="checkbox" className="custom-control-input" id="switch7" name="example" />
            <label className="custom-control-label" for="switch7">
              A source name
            </label>
          </div>
          <div className="custom-control custom-switch">
            <input type="checkbox" className="custom-control-input" id="switch8" name="example" />
            <label className="custom-control-label" for="switch8">
              A source name
            </label>
          </div>
        </div>
      </Collapse>
    </>
  );
}
function Eligibility() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="list-group-item list-group-item-success collapsed"
      >
        Eligibility
      </a>
      <Collapse in={open}>
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
      </Collapse>
    </>
  );
}

function Similarity() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="list-group-item list-group-item-success collapsed"
      >
        Similarity %
      </a>
      <Collapse in={open}>
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
      </Collapse>
    </>
  );
}

function Relevancy() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="list-group-item list-group-item-success collapsed"
      >
        Relevancy %
      </a>
      <Collapse in={open}>
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
      </Collapse>
    </>
  );
}
function BaisCheck() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="list-group-item list-group-item-success collapsed"
      >
        Bais Check
      </a>
      <Collapse in={open}>
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
      </Collapse>
    </>
  );
}
function QualityCheck() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="list-group-item list-group-item-success collapsed"
      >
        Quality Check
      </a>
      <Collapse in={open}>
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
      </Collapse>
    </>
  );
}
function Screening() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="list-group-item list-group-item-success collapsed"
      >
        Screening
      </a>
      <Collapse in={open}>
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
      </Collapse>
    </>
  );
}

function TopicModeling() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="list-group-item list-group-item-success collapsed"
      >
        Topic Modeling
      </a>
      <Collapse in={open}>
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
      </Collapse>
    </>
  );
}

function Frequencies() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="list-group-item list-group-item-success collapsed"
      >
        Frequencies
      </a>
      <Collapse in={open}>
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
      </Collapse>
    </>
  );
}

function ImportantTerms() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="list-group-item list-group-item-success collapsed"
      >
        Important Terms (TFIDF)
      </a>
      <Collapse in={open}>
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
      </Collapse>
    </>
  );
}

function Taxonomy() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="list-group-item list-group-item-success collapsed"
      >
        Taxonomy
      </a>
      <Collapse in={open}>
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
      </Collapse>
    </>
  );
}
function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="list-group-item list-group-item-success collapsed"
      >
        Layout
      </a>
      <Collapse in={open}>
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
      </Collapse>
    </>
  );
}
function Title() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="list-group-item list-group-item-success collapsed"
      >
        Title
      </a>
      <Collapse in={open}>
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
      </Collapse>
    </>
  );
}
function TagItem() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="list-group-item list-group-item-success collapsed"
      >
        Tag Item
      </a>
      <Collapse in={open}>
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
      </Collapse>
    </>
  );
}
function AddNote() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="list-group-item list-group-item-success collapsed"
      >
        Add Note
      </a>
      <Collapse in={open}>
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
      </Collapse>
    </>
  );
}
function Review() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="list-group-item list-group-item-success collapsed"
      >
        Review
      </a>
      <Collapse in={open}>
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
      </Collapse>
    </>
  );
}
function Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div class="new_content" style="display: block;">
        <img src={image} class="d-inline" alt="icon" width="" />
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
    </>
  );
}
