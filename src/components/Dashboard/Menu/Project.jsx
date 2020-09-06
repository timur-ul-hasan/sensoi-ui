import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { newProject } from "../../../routes/dashboard/actions";

export default () => {
  const [show, setShow] = useState(false);

  const projects = [];

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="white" id="dropdown-basic">
          <span>Project </span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <OpenProject />
          <NewProject />
          <Dropdown.Item href="#/action-3">Close</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

const OpenProject = () => {
  const [show, setShow] = useState(false);
  const projects = [];
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  return (
    <>
      <Dropdown.Item href="#/action-1" onClick={handleShow}>
        Open
      </Dropdown.Item>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Open Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className="d-flex flex-wrap file-list">
            {projects.map(item => (
              <li
                className="filemanager-item item-folder"
                data-type="folder"
                data-name={item}
                data-id={item}
              >
                <i className="fa fa-folder-o">&nbsp;{item}</i>
              </li>
            ))}
          </ul>
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

const NewProject = () => {
  const [show, setShow] = useState(false);
  const projects = [];
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [projectName, setProjectName] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <Dropdown.Item href="#/action-1" onClick={handleShow}>
        New Project
      </Dropdown.Item>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>New Project Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="demo" className="form-group">
            <input
              type="text"
              id="input_folder_name"
              placeholder="Folder Name"
              value={projectName}
              onChange={e => {
                setProjectName(e.target.value);
              }}
            />
            <button
              id="btn_create_folder"
              onClick={() => {
                dispatch(newProject(projectName));
              }}
            >
              Create
            </button>
          </div>
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
