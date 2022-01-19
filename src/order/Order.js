import React, { useState, useEffect } from "react";
import {
  Container,
  Table,
  Button,
  Form,
  Modal,
  Col,
  Row,
} from "react-bootstrap";
import productSolded from "../services/productSoldedService";
import detail from "./../services/productSoldedDetailService";
import OrderDetail from "./OrderDetail";
import ActionTypes from "../store/action";
import { useSelector, useDispatch } from "react-redux";
function Order() {
  const [dataSolded, setDataSolded] = useState([]);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const save = useSelector((state) => state.auth.save);

  const handleShowModal = (e, data) => {
    setTotal(0);
    e.preventDefault();
    console.log("data", data);
    detail.get(data.codeOrder).then((res) => {
      console.log(res.data);
      dispatch({
        type: ActionTypes.LOAD_DATA_ORDER,
        getOrderDetails: res.data,
        dataUser: {
          userName: data.userName,
          codeOrder: data.codeOrder,
          phone: data.phone,
          dress: `${data.dress} , ${data.ward} , ${data.district} , ${data.city}`,
          status: data.status,
          id: data.id,
        },
      });
      res.data.forEach((e) => {
        setTotal((total) => (total += e.total));
      });
    });
  };
  //
  useEffect(() => {
    productSolded.get().then((res) => {
      console.log(res.data);
      setDataSolded(res.data);
    });
  }, [save]);

  //

  return (
    <>
      <Container>
        <Table bordered hover size="lg">
          <thead>
            <tr>
              <th>#</th>
              <th>Tên Khách Hàng</th>
              <th>Mã Đơn hàng</th>
              <th>Số Điện Thoại</th>
              <th>Địa Chỉ</th>
              <th>Phường / Xã</th>
              <th>Quận / Huyện</th>
              <th>Thành phố</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {dataSolded?.map((d, index) => (
              <tr
                onClick={(e) => handleShowModal(e, d)}
                key={index}
                style={{ cursor: "pointer" }}
                className={
                  d.status === 0
                    ? "bg-light"
                    : d.status === 1
                    ? "bg-info text-white"
                    : d.status === 2
                    ? "bg-primary text-white"
                    : "bg-success text-white"
                }
              >
                <td className="align-center">{index}</td>
                <td className="align-center">{d.userName} </td>
                <td className="align-center">{d.codeOrder} </td>
                <td className="align-center">{d.phone}</td>
                <td className="align-center">{d.dress} </td>
                <td className="align-center">{d.ward}</td>
                <td className="align-center">{d.district} </td>
                <td className="align-center">{d.city} </td>
                <th className="align-center">
                  <i className="fa fa-edit fs-3" aria-hidden="true"></i>
                  {/* <Button>xem chi tiết</Button> */}
                </th>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      <OrderDetail total={total} />
    </>
  );
}

export default Order;
