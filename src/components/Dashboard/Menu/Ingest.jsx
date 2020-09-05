import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

export default () => {
  const [show, setShow] = useState(false);
  const projects = [];

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="white" id="dropdown-basic">
          <span>Ingest</span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" onClick={handleShow}>
            Documents (PDF, TXT)
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={handleShow}>
            Structured Files (CSV, XLS)
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick={handleShow}>
            Scan Documents (PDF, JPEG)
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick={handleShow}>
            Images (PNG)
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>ADD YOUR FILE HERE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.File id="exampleFormControlFile1" label="Example file input" />
            </Form.Group>
            <Button>Add</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Open</Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
