import React, { Component, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";

export default () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
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
                    <button onClick="myFunction()">Print</button>
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
    </>
  );
};
