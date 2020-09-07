import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { useDispatch } from "react-redux";
import { addFile } from "../../../routes/dashboard/actions";
export default () => {
  const [value, setDocumentValue] = useState("");
  const [file, setFile]= useState("");
  const [show, setShow] = useState(false);
  const Ingest = [];
  const handleClose = () => setShow(false);
  const handleShow = e => setShow(true);
  const dispatch = useDispatch();
  const handleSelect = (eventKey, e) => {
    console.log(e.target.name);
    setDocumentValue(e.target.name);
  };
  const upload = e => {
    const [ file ] = e.target.files[0];
    setFile(file);
}

  return (
    <>
      <Dropdown onSelect={handleSelect} value={Ingest}>
        <Dropdown.Toggle variant="white" id="dropdown-basic">
          <span>Ingest</span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={handleShow} name="pdf">
            Documents (PDF, TXT)
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" name="csv" onSelect={handleSelect} onClick={handleShow}>
            Structured Files (CSV, XLS)
          </Dropdown.Item>
          <Dropdown.Item
            href="#/action-2"
            name="image"
            onSelect={handleSelect}
            onClick={handleShow}
          >
            Scan Documents (PDF, JPEG)
          </Dropdown.Item>
          <Dropdown.Item onClick={handleShow} name="Image PNG">
            Images (PNG)
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add File</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form enctype="multipart/form-data">
            <Form.Group>
              <Form.File
                id="exampleFormControlFile1"
                type="file"
                name="file"
                onChange={e => {
                  setFile({file:e.target.files[0]})
                }}
                label="Example file input"
              />
            </Form.Group>
            <Button
              id="btn_create_folder"
              onClick={() => {
                dispatch(addFile(file));
                console.log(setFile);
              }}
            >
              Add
            </Button>
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
