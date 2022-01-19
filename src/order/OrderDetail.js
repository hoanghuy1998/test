import React, { useRef } from "react";
import { Modal, Button, Form, Col, Row, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import ActionTypes from "../store/action";
import productSolded from "../services/productSoldedService";
function OrderDetail({ total }) {
  const showModal = useSelector((state) => state.auth.showModal);
  const dataDetail = useSelector((state) => state.auth.getOrderDetails);
  const dataUser = useSelector((state) => state.auth.dataUser);
  const checkRef = useRef();
  const dispatch = useDispatch();
  const status = [0, 1, 2, 3];
  const nameStatus = [
    "Đang Xử Lí",
    "Đã Xác Nhận",
    "Đang Vận Chuyển",
    "Thành Công",
  ];
  const handleClose = (e) => {
    e.preventDefault();
    dispatch({
      type: ActionTypes.HIDDEN_MODAL,
    });
  };
  const handleSave = (e) => {
    e.preventDefault();
    const x = document.querySelectorAll(".status");
    x.forEach((x) => {
      if (x.checked) {
        const data = { status: x.value };
        productSolded.update(data, dataUser.id).then((res) => {
          dispatch({
            type: ActionTypes.SAVE,
          });
        });
      }
    });
  };
  return (
    <Modal show={showModal} onHide={handleClose} size="lg">
      <Row className="justify-content-center mt-4">
        <Col xs={3}>
          {dataUser?.status === 0 ? (
            <Button className="btn-light fs-3 text-primary fw-bold">
              Đang Xử Lí
            </Button>
          ) : dataUser?.status === 1 ? (
            <Button className="btn-info fs-3 text-white fw-bold">
              Đã Xác Nhận
            </Button>
          ) : dataUser?.status === 2 ? (
            <Button className="btn-primary fs-3 text-white fw-bold">
              Đang Vận Chuyển
            </Button>
          ) : (
            <Button className="btn-cuccess fs-3 text-white fw-bold">
              Thành Công
            </Button>
          )}
        </Col>
      </Row>
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-sm">
          Chi Tiết Đơn Hàng
        </Modal.Title>
      </Modal.Header>
      <Form className="mx-2 me-2">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="userName">
            <Form.Label className="text-primary fs-4">Tên Người Mua</Form.Label>
            <Form.Control type="text" value={dataUser?.userName} disabled />
          </Form.Group>

          <Form.Group as={Col} controlId="codeOrder">
            <Form.Label className="text-primary fs-4">Mã Đơn Hàng</Form.Label>
            <Form.Control type="text" value={dataUser?.codeOrder} disabled />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="phone">
          <Form.Label className="text-primary fs-4">Số Điện Thoại</Form.Label>
          <Form.Control value={dataUser?.phone} disabled />
        </Form.Group>

        <Form.Group className="mb-3" controlId="dress">
          <Form.Label className="text-primary fs-4">Địa Chỉ </Form.Label>
          <Form.Control
            className="text-capitalize"
            value={dataUser?.dress}
            disabled
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label className="text-primary fs-4">Status</Form.Label>
          {status.map((x, idx) => (
            <div className="custom-control custom-radio" key={idx} inline>
              <input
                ref={checkRef}
                name={dataUser?.status}
                defaultChecked={dataUser?.status === x}
                defaultValue={x}
                type="radio"
                className="custom-control-input status"
                id={x}
              />
              <label
                className="custom-control-label text-capitalize"
                htmlFor={x}
              >
                {nameStatus[idx]}
              </label>
            </div>
          ))}
        </Form.Group>
        <Table
          striped
          bordered
          hover
          size="sm "
          className="text-center align-iteams-center"
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Mã Đơn hàng</th>
              <th>Tên Sản Phẩm</th>
              <th>Hình Ảnh</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            {dataDetail?.map((d, index) => (
              <tr key={index}>
                <td className="align-center">{index} </td>
                <td className="align-center">{d.codeOrder} </td>
                <td className="align-center">{d.name} </td>
                <td>
                  <img src={d.srcImg} style={{ width: "5rem" }} alt="" />
                </td>
                <td className="align-center">{d.price} </td>
                <td className="align-center">{d.quantity} </td>
                <td className="align-center">{d.total} </td>
              </tr>
            ))}
            <tr>
              <th colSpan="6">Total</th>
              <th>{total}</th>
            </tr>
          </tbody>
        </Table>
      </Form>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default OrderDetail;
