import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import InputText from "../component/InputText";
import ActionTypes from "../store/action";
import { useFormik } from "formik";
import * as Yup from "yup";

const Edituser = () => {
  const dataUser = useSelector((state) => state.auth.getUser);
  const show = useSelector((state) => state.auth.showModal);
  const [city, setCity] = useState(dataUser?.city);
  const [district, setDistrict] = useState(dataUser?.district);
  const [ward, setWard] = useState(dataUser?.ward);
  const dispatch = useDispatch();
  const frm = useFormik({
    initialValues: {
      userName: "",
      email: "",
      gender: "",
      phone: "",
      dress: "",
      ward: "",
      district: "",
      city: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string().required().min(5, "a little 5 characters"),
      email: Yup.string()
        .email("Must be a valid email")
        .required("enter email"),
      gender: Yup.boolean().required(),
      phone: Yup.number("enter number")
        .required("enter phone")
        .min(10, "a little 10 number"),
      dress: Yup.string().required(),
      drwardess: Yup.string().required(),
      district: Yup.string().required(),
      city: Yup.string().required(),
    }),
    // onSubmit: (value) => handleSave(value),
  });

  //
  const handleClose = (e) => {
    dispatch({
      type: ActionTypes.HIDDEN_MODAL,
    });
  };
  // chose dress
  useEffect(() => {
    fetch("https://provinces.open-api.vn/api/?depth=2")
      .then((res) => res.json())
      .then((result) => {
        setCity(result);
      });
  }, []);
  // useEffect(() => {
  //   console.log("do");
  //   const x = city?.find((c) => c.codename === dataUser.city);
  //   console.log(x);
  //   if (x) setDistrict(x.districts);
  // }, []);
  const handlechangeCity = (e) => {
    console.log("city");
    const x = city.find((c) => c.codename === e.target.value);
    console.log(city[0].codename);
    console.log(e.target.value);
    if (x) setDistrict(x.districts);
  };
  const handlechangeDistrict = (e) => {
    console.log("distric");
    fetch("https://provinces.open-api.vn/api/w")
      .then((res) => res.json())
      .then((result) => {
        setWard([]);
        result.forEach((r) => {
          if (parseInt(r.district_code) === parseInt(e.target.value))
            setWard((ward) => [...ward, r]);
        });
      });
  };
  const handlechangeWard = (e) => {};
  //
  const handleDowload = (e) => {};
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-uppercase text-primary">
            Information Customer
          </Modal.Title>
        </Modal.Header>
        <Form className="p-3">
          <Row className="justify-content-center">
            <img
              src={dataUser?.avata}
              alt=""
              className="rounded-circle mb-3"
              style={{ width: "8rem" }}
            />
          </Row>
          <Row className="justify-content-center mb-3 gx-4 ">
            <label
              className="text-center border align-items-center btn-primary rounded col-3 text-uppercase fw-bolder mx-2 "
              htmlFor="changeAvata"
              style={{ height: "3rem", lineHeight: "3rem" }}
            >
              change avata
            </label>
            <label
              onClick={handleDowload}
              className="text-center border align-items-center btn-primary rounded col-3 text-uppercase fw-bolder "
              style={{ height: "3rem", lineHeight: "3rem" }}
            >
              download
            </label>
            <input type="file" className="d-none" />
          </Row>
          <InputText
            id="userName"
            placeholder="Enter User name"
            label="User Name"
            type="text"
            defaultValue={dataUser?.userName}
          />
          <InputText
            id="age"
            placeholder="Enter age"
            label="age"
            type="tel"
            defaultValue={dataUser?.age}
          />
          <InputText
            id="email"
            placeholder="Enter Email"
            label="Email"
            type="email"
            defaultValue={dataUser?.email}
          />
          <InputText
            id="phone"
            placeholder="Enter Phone"
            label="Phone"
            type="tel"
            defaultValue={dataUser?.phone}
          />
          <InputText
            id="dress"
            placeholder="Enter dress"
            label="dress"
            type="text"
            defaultValue={dataUser?.dress}
          />
          <InputText
            id="ward"
            placeholder="Enter Ward"
            label="ward"
            type="text"
            defaultValue={dataUser?.ward}
          />
          <InputText
            id="district"
            placeholder="Enter district"
            label="district"
            type="text"
            defaultValue={dataUser?.district}
          />
          <InputText
            id="city"
            placeholder="Enter city"
            label="city"
            type="text"
            defaultValue={dataUser?.city}
          />
        </Form>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Edituser;
