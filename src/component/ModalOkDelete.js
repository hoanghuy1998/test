import React from "react";
import { Modal, Row, Button, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import ActionTypes from "../store/action";
function ModalOkDelete() {
  const data = useSelector((state) => state.auth.dataDelete);
  const show = useSelector((state) => state.auth.showDelete);
  const typeDelete = useSelector((state) => state.auth.typeDelete);
  const dispatch = useDispatch();
  const handleClose = (e) => {
    e.preventDefault();
    dispatch({
      type: ActionTypes.HIDDEN_DELETE,
    });
  };
  const handleOkay = (e) => {
    e.preventDefault();
    switch (typeDelete) {
      case "user":
        dispatch({
          type: ActionTypes.OKEY_DELETE,
          dataDelete: data,
        });
        break;
      case "product":
        dispatch({
          type: ActionTypes.OKEY_DELETE_PRODUCT,
          dataDelete: data,
        });
        break;
      default:
        break;
    }
  };
  console.log("data", data);
  return (
    <Modal centered show={show}>
      <Modal.Header closeButton className="text-capitalize text-warning">
        confirm information
      </Modal.Header>
      <Modal.Body>
        <Row className="mb-3 text-center text-capitalize text-primary ">
          <h2>information delete</h2>
        </Row>
        {data?.name && (
          <Row>
            <Col xs="auto">{data?.userName && <label>User Name :</label>}</Col>
            <Col xs="auto">{data?.name && <label> Name :</label>}</Col>
            <Col>
              <p>{data?.userName || data?.name}</p>
            </Col>
          </Row>
        )}
        {data?.email && (
          <Row>
            <Col xs="auto">
              <label>Email</label>
            </Col>
            <Col>
              <p> {data?.email} </p>
            </Col>
          </Row>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose} variant="secondary btn-secondary">
          Cancel
        </Button>
        <Button onClick={handleOkay} variant="primary btn-primary">
          Okay
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalOkDelete;
