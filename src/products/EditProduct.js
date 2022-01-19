import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Row, Col, Button, Table, Spinner } from "react-bootstrap";
import ActionTypes from "../store/action";
import { useFormik } from "formik";
import * as Yup from "yup";
import productService from "./../services/productService";
import { toast } from "react-toastify";
import Input2 from "../component/Input2";
import CheckBox from "../component/checkBox";
import Radio from "../component/Radio";
const EditProduct = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.auth.showModal);
  const data = useSelector((state) => state.auth.getProduct);
  const [imagePreview, setImagePreview] = useState(data.srcImg);
  const [listImage, setListImage] = useState([]);
  const [imgFiles, setImgFiles] = useState([]);
  const [hiddenAdd, setHiddenAdd] = useState(false);
  const [changeImg, setChangeImg] = useState(false);
  const [load, setLoad] = useState(false);
  const filePrimaryceRef = useRef();
  const fileMutibleRef = useRef();
  useEffect(() => {
    if (!data.imgDescription) {
      setListImage([]);
    } else {
      setListImage(data.imgDescription);
    }
  }, [data]);
  const frm = useFormik({
    initialValues: {
      color: "",
      name: "",
      srcImg: undefined,
      imgDescription: [],
      description: "",
      price: "",
      totalquantitys: 0,
      type: [],
      status: [],
      tag: "",
      sorfby: "",
      fileImg: undefined,
      fileImgDescription: [],
    },
    validationSchema: Yup.object({
      fileImg: Yup.mixed().test(
        "fileSize",
        "The file is too large",
        (value) => {
          if (!value?.length) return true; // attachment is optional
          return value[0].size <= 20000000;
        }
      ),
      color: Yup.string().required(),
      name: Yup.string().required(),
      description: Yup.string().required().min(10, "alitle character"),
      price: Yup.number().required(),
      totalquantitys: Yup.number().required(),
      type: Yup.array().required().min(1, "chon it nhat 1"),
      status: Yup.array().required().min(1, "chon it nhat 1"),
      tag: Yup.string().required(),
      sorfby: Yup.string().required(),
    }),
    onSubmit: (value) => handleSave(value),
  });
  const handleClose = () => {
    isSave();
    dispatch({
      type: ActionTypes.HIDDEN_MODAL,
    });
  };
  const type = ["men", "women", "shoes", "belt", "watches"];
  const status = ["sale", "feaure", "seller", "toprate", "new"];
  const taps = ["fashion", "lifestyle", "streetstyle", "carfts"];
  const sorfby = ["default", "average rating", "newness", "popularity"];
  const colors = ["green", "red", "black", "white", "grey", "blue"];
  const handleSave = (e) => {
    setLoad(true);
    let dataUpdate = {};
    if (data.name !== frm.values.name) dataUpdate.name = frm.values.name;
    if (data.description !== frm.values.description)
      dataUpdate.description = frm.values.description;
    if (data.price !== frm.values.price) dataUpdate.price = frm.values.price;
    if (data.type !== frm.values.type) dataUpdate.type = frm.values.type;
    if (data.status !== frm.values.status)
      dataUpdate.status = frm.values.status;
    if (data.tag !== frm.values.tag) dataUpdate.tag = frm.values.tag;
    if (data.sorfby !== frm.values.sorfby)
      dataUpdate.sorfby = frm.values.sorfby;
    if (data.totalquantitys !== frm.values.totalquantitys)
      dataUpdate.totalquantitys = frm.values.totalquantitys;
    if (data.color !== frm.values.color) dataUpdate.color = frm.values.color;
    if (data.method === "post") {
      dataUpdate = {
        ...dataUpdate,
        imgDescription: frm.values.fileImgDescription,
        srcImg: frm.values.fileImg,
        method: data.method,
        id: data.id,
      };
      productService.add(dataUpdate).then((res) => {
        console.log(res);
        if (res.errorCode === 0) {
          isSave();
          toast.success(`Đã Thêm ${dataUpdate.name} Thành Công`);
          dispatch({
            type: ActionTypes.SAVE,
          });
        }
      });
    } else {
      if (JSON.stringify(dataUpdate) !== "{}") {
        productService.update(dataUpdate).then((res) => {
          if (res.errorCode === 0) {
            toast.success(`Đã Cập Nhật ${res.data.name} Thành Công`);
            isSave();
            dispatch({
              type: ActionTypes.SAVE,
            });
          } else toast.warning("cập nhật thất bại");
        });
      } else {
        dispatch({
          type: ActionTypes.HIDDEN_MODAL,
        });
        toast.info("không có gì thay đổi");
      }
    }
    // console.log("dataUpdate", dataUpdate);
    // productService.update(dataUpdate, data.id).then((res) => {
    //   if (res.errorCode === 0) {
    //     toast.success(`Đã Cập Nhật ${res.data.name} Thành Công`);
    //     dispatch({
    //       type: ActionTypes.SAVE,
    //     });
    //   } else toast.warning("cập nhật thất bại");
    // });
  };
  useEffect(() => {
    frm.setValues(data);
  }, [data]);
  const handleChangeFile = (e, type) => {
    if (e.target.files && e.target.files[0]) {
      if (type === "one") {
        setHiddenAdd(true);
        setImagePreview(URL.createObjectURL(e.target.files[0]));
        frm.setFieldValue("fileImg", e.target.files[0]);
      } else {
        if (changeImg) {
        } else {
          const files = e.target.files;
          var fileArr = [];
          for (let i = 0; i < files.length; i++) {
            setListImage((listImage) => [
              ...listImage,
              { srcImg: URL.createObjectURL(files[i]) },
            ]);
          }
          frm.setFieldValue("fileImgDescription", files);
        }
      }
    }
  };
  console.log("frm.err", frm.errors);
  const handlChangeImage = (e) => {
    setChangeImg(true);
  };
  const isSave = (e) => {
    setLoad(false);
    setHiddenAdd(false);
    setListImage([]);
    setImagePreview("");
    frm.resetForm();
    setImgFiles([]);
  };
  return (
    <>
      <Modal show={show} centered size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
          <h1 className="text-uppercase text-primary fw-bolder text-center">
            information product
          </h1>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover size="lg">
            <thead>
              <tr className="text-center">
                <th>#</th>
                <th>Title</th>
                <th>Content</th>
              </tr>
            </thead>
            <tbody>
              <Input2
                name="name"
                index="1"
                title="name product"
                err={frm.errors.name}
                data={data?.name}
                onchange={frm.handleChange}
              />

              <tr className="text-center ">
                <td className="align-center">2</td>
                <td className="align-center">Product Id</td>
                <td className="align-center">
                  <input
                    disabled
                    defaultValue={data?.productId}
                    className="form-control text-center align-center"
                  />
                </td>
              </tr>
              <tr className="text-center ">
                <td className="align-center">3</td>
                <td className="align-center">Primary Image </td>
                <td className="img">
                  <img
                    className="w-10"
                    alt=""
                    onChange={frm.handleChange}
                    src={imagePreview || data.srcImg}
                  />
                  <input
                    type="file"
                    name="srcImg"
                    hidden
                    ref={filePrimaryceRef}
                    defaultValue={frm.values.fileImg}
                    onChange={(e) => handleChangeFile(e, "one")}
                  />
                  {data.method === "post" ? (
                    <Button
                      hidden={hiddenAdd}
                      onClick={() => filePrimaryceRef.current.click()}
                    >
                      add
                    </Button>
                  ) : (
                    ""
                  )}
                </td>
              </tr>
              <tr className="text-center ">
                <td className="align-center">4</td>
                <td className="align-center">Description Image </td>
                <td className="align-center">
                  {listImage?.map((img, i) => (
                    <img
                      key={i}
                      className=" h-8 me-2"
                      alt=""
                      src={img?.srcImg}
                      onClick={(e) => handlChangeImage(e)}
                    />
                  ))}
                  <input
                    type="file"
                    name="fileImgDescription"
                    hidden
                    multiple="multiple"
                    defaultValue={frm.values.fileImgDescription}
                    ref={fileMutibleRef}
                    onChange={(e) => handleChangeFile(e)}
                  />
                  {data.method === "post" ? (
                    <Button onClick={() => fileMutibleRef.current.click()}>
                      add
                    </Button>
                  ) : (
                    ""
                  )}
                </td>
              </tr>
              <tr
                className={
                  frm.errors.description
                    ? "text-center border-2 border-warning"
                    : "text-center border-0"
                }
              >
                <td className="align-center">4</td>
                <td className="align-center">Description Product </td>
                <td className="text-start">
                  <textarea
                    rows="8"
                    className="w-100"
                    onChange={frm.handleChange}
                    name="description"
                  >
                    {data?.description}
                  </textarea>
                </td>
              </tr>
              <Input2
                name="price"
                index="6"
                title="price"
                err={frm.errors.price}
                data={data?.price}
                onchange={frm.handleChange}
              />
              <Input2
                name="totalquantitys"
                index="7"
                title="Total Quantity"
                err={frm.errors.totalquantitys}
                data={data?.totalquantitys}
                onchange={frm.handleChange}
              />
              <CheckBox
                name="type"
                err={frm.errors.type}
                data={data?.type}
                array={type}
                onchange={frm.handleChange}
                index="8"
                title="type Product"
              />
              <CheckBox
                name="status"
                err={frm.errors.status}
                data={data?.status}
                array={status}
                onchange={frm.handleChange}
                index="9"
                title="status Product"
              />
              <Radio
                name="tag"
                err={frm.errors.tag}
                array={taps}
                data={data?.tag}
                index="10"
                title="Taps Product"
                onchange={frm.handleChange}
              />
              <Radio
                name="sorfby"
                err={frm.errors.sorfby}
                array={sorfby}
                data={data?.sorfby}
                index="11"
                title="SorfBy Product"
                onchange={frm.handleChange}
              />
              <Radio
                name="color"
                err={frm.errors.color}
                array={colors}
                data={data?.color}
                index="12"
                title="Colors Product"
                onchange={frm.handleChange}
              />
            </tbody>
          </Table>
          <Row></Row>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="btn-secondary text-capitalize"
            onClick={handleClose}
          >
            close
          </Button>
          {!frm.dirty || !frm.isValid ? (
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </Button>
          ) : load ? (
            <Spinner animation="border" variant="primary" />
          ) : (
            <Button
              variant="primary"
              className="btn-primary text-capitalize"
              disabled={!frm.dirty || !frm.isValid}
              onClick={frm.handleSubmit}
            >
              save
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditProduct;
