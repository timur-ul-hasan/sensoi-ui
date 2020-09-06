import React, { Component, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import { useDispatch } from "react-redux";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import { useDashboard } from "../../../routes/dashboard/hooks";
import { createFolder } from "../../../routes/dashboard/actions";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () => console.log("totally custom!"));

  return (
    <i
      onClick={decoratedOnClick}
      type="button"
      data-toggle="collapse"
      data-target="#demo"
      id="create_new_folder_btn"
      className=" mr-5 fa fa-plus-circle pull-right"
    />
  );
}

export default ({ entries }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dashboard = useDashboard();
  const folderId = dashboard?.folder_id;
  const [folderName, setFolderName] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="white" id="dropdown-basic">
          <span>File </span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" onClick={handleShow}>
            Open
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Open Recent</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Close</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Folder Open</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Accordion>
            <h4>
              <i className="fa fa-arrow-circle-left filemanager-up-arrow" />
              <i className="fa fa-arrow-circle-right filemanager-forward-arrow ml-5" />
              <i className="fa fa-trash filemanager-file-delete mr-5 pull-right" />
              <CustomToggle eventKey="0" />
            </h4>
            <hr />
            <Accordion.Collapse eventKey="0">
              <div id="demo" className="form-group">
                <input
                  type="text"
                  id="input_folder_name"
                  placeholder="Folder Name"
                  value={folderName}
                  onChange={e => {
                    setFolderName(e.target.value);
                  }}
                />
                <button
                  id="btn_create_folder"
                  onClick={() => {
                    dispatch(createFolder(folderId, folderName));
                  }}
                >
                  Create
                </button>
              </div>
            </Accordion.Collapse>
          </Accordion>
          <hr />
          <ul className="d-flex flex-wrap file-list">
            {entries.map(item =>
              item?.entry?.isFolder ? (
                <li
                  className="filemanager-item item-folder"
                  data-type="folder"
                  data-id="{{item.entry.id}}"
                >
                  <i className="fa fa-folder-o">&nbsp;{item.entry.name}</i>
                </li>
              ) : (
                <li
                  className="filemanager-item item-file d-flex align-items-center"
                  data-id="{{item.entry.id}}"
                >
                  <input
                    type="checkbox"
                    id="del-check-{{item.entry.id}}"
                    className="f-manager-del-check"
                  />
                  <i className="fa fa-file-o flex">&nbsp;{item.entry.name}</i>
                </li>
              )
            )}
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
