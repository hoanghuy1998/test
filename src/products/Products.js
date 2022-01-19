import React, { useEffect, useState, useRef } from "react";
import productService from "../services/productService";
import {
  Table,
  Row,
  Col,
  Pagination,
  Container,
  Form,
  Button,
} from "react-bootstrap";
import { DebounceInput } from "react-debounce-input";
import EditProduct from "./EditProduct";
import { useSelector, useDispatch } from "react-redux";
import ActionTypes from "../store/action";
import { toast } from "react-toastify";
import ModalOkDelete from "../component/ModalOkDelete";

const Products = () => {
  const [pagingItem, setPagingItem] = useState(0);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(5);
  const [totalPage, setTotalPage] = useState(0);
  const [result, setResult] = useState([]);
  const inputref = useRef();
  const dispatch = useDispatch();
  const save = useSelector((state) => state.auth.save);
  const dataDelete = useSelector((state) => state.auth.dataDelete);
  const isDelete = useSelector((state) => state.auth.isDeleteProduct);
  console.log("isDelete", isDelete);
  const loadPage = (x) => {
    if (x > 1) {
      const item = [];
      for (let i = 0; i < x; i++) {
        item.push(
          <Pagination.Item
            key={i}
            active={i === page}
            onClick={() => setPage(i)}
          >
            {i + 1}
          </Pagination.Item>
        );
      }
      setPagingItem(item);
    } else {
      setPagingItem([]);
    }
  };
  const loadData = () => {
    if (inputref.current.state.value) {
      console.log("do co");
      productService
        .getSearch_getpaging(inputref.current.state.value, page, perPage)
        .then((res) => {
          if (res.data.data.length > 0) {
            load(res);
            setResult("");
          } else {
            setResult("Không Có Sản  Phẩm  Vui Lòng Thử Lại");
            setProducts([]);
            loadPage(0);
          }
        });
    } else {
      console.log("do khong");
      productService.getpaging(page, perPage).then((res) => {
        console.log("res.data", res.data);
        if (res.errorCode === 0) {
          load(res);
          const x = parseInt(res.data.pagingInfo.totalPage);
          loadPage(x);
        }
      });
    }
  };
  useEffect(() => {
    loadData();
  }, [page, perPage, save]);

  const handleChangeSearch = (e) => {
    if (e.target.value) {
      productService
        .getSearch_getpaging(e.target.value, page, perPage)
        .then((res) => {
          if (res.data.data.length > 0) {
            setProducts(res.data.data);
            setPage(res.data.pagingInfo.page);
            setPerPage(res.data.pagingInfo.totalRecord);
            setTotalPage(res.data.pagingInfo.totalPage);
            loadPage(res.data.pagingInfo.totalPage);
            setResult("");
          } else {
            setResult("Không Có Sản  Phẩm  Vui Lòng Thử Lại");
            setProducts([]);
            loadPage(0);
          }
        });
    } else {
      loadData();
    }
  };
  const handleChangPerPage = (e) => {
    setPage(0);
    setPerPage(e.target.value);
    console.log(inputref);
  };
  const handleShow = (data, e) => {
    e.preventDefault();
    productService.description(data.productId).then((res) => {
      if (res.errorCode === 0) {
        dispatch({
          type: ActionTypes.LOAD_DATA_DESCRIPTION,
          getProduct: { ...data, imgDescription: res.data, method: "put" },
        });
      }
    });
  };
  const handleAdd = (e) => {
    console.log("add");
    e.preventDefault();
    dispatch({
      type: ActionTypes.LOAD_DATA_DESCRIPTION,
      getProduct: { method: "post" },
    });
  };
  const handleDelete = (data, e) => {
    e.preventDefault();
    dispatch({
      type: ActionTypes.SHOW_DELETE,
      dataDelete: data,
      typeDelete: "product",
    });
  };
  useEffect(() => {
    if (isDelete) {
      console.log("do delete");
      productService.remove(dataDelete.id).then((res) => {
        if (res.errorCode === 0) {
          toast.success(`Đã Xóa ${dataDelete.name} Thành Công`);
          console.log("products", products);
          if (products.length === 1) setPage((page) => (page -= 1));
          loadData();
        } else toast.warn("Xóa Thất Bại");
      });
      setTimeout(() => {
        dispatch({
          type: ActionTypes.RESET_ISDLETE,
        });
      }, 200);
    }
  }, [isDelete]);
  const load = (res) => {
    setProducts(res.data.data);
    setPage(res.data.pagingInfo.page);
    setPerPage(res.data.pagingInfo.totalRecord);
    setTotalPage(res.data.pagingInfo.totalPage);
    loadPage(res.data.pagingInfo.totalPage);
  };
  return (
    <>
      <Container>
        <Row className="mt-2 mb-4">
          <Col>
            <Row>
              <Col xs="auto">Quantity Of Products Show </Col>
              <Col>
                <Form.Select
                  style={{ width: "8rem" }}
                  onChange={handleChangPerPage}
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="40">40</option>
                  <option value="80">80</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <DebounceInput
                type="search"
                ref={inputref}
                debounceTimeout={1000}
                minLength={1}
                onChange={handleChangeSearch}
                id="search"
                className="form-control col"
              />
              <label htmlFor="search" className="col-auto">
                <i className="fa fa-search  fs-4 mt-1" aria-hidden="true"></i>
              </label>
            </Row>
          </Col>
        </Row>
        <Row>
          <Button
            className="btn-primary mt-2 mb-2 w-4 text-uppercase fw-bolder mx-2"
            onClick={handleAdd}
          >
            add
          </Button>
        </Row>
        {products?.length > 0 ? (
          <Row>
            <Table striped bordered hover size="lg">
              <thead>
                <tr className="text-center">
                  <th>Stt</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>ProductId</th>
                  <th>Price</th>
                  <th>Total Quantity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {products?.map((product, idx) => (
                  <tr
                    className={
                      dataDelete.id === product.id
                        ? "text-center text-danger"
                        : "text-center"
                    }
                    key={idx}
                  >
                    <td className="text-bold-500 align-center">
                      {page * perPage + idx + 1}
                    </td>
                    <td className="text-bold-500 align-center">
                      <img
                        src={product.srcImg}
                        alt="Girl in a jacket"
                        width="90"
                      />
                    </td>
                    <td className="text-bold-500 align-center">
                      {product.name}
                    </td>
                    <td className="align-center">{product.productId}</td>
                    <td className="align-center">{product.price} $</td>
                    <td className="align-center">{product.totalquantitys}</td>
                    <td className="text-center align-center">
                      <a href="/#" onClick={(e) => handleShow(product, e)}>
                        <i className="fa fa-edit text-primary fs-4 me-2"></i>
                      </a>
                      <a href="/#" onClick={(e) => handleDelete(product, e)}>
                        <i className="fas fa-trash-alt text-danger fs-4"></i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Row>
        ) : (
          <Row className="text-warning fs-4 text-center mt-3 mb-3">
            {result}
          </Row>
        )}

        {products?.length > 0 ? (
          <Row>
            {totalPage > 1 ? (
              <Pagination className="justify-content-end mt-3 mb-0">
                <Pagination.First onClick={() => setPage(0)} />
                <Pagination.Prev
                  onClick={() =>
                    setPage((page) => (page > 0 ? (page -= 1) : 0))
                  }
                />
                {pagingItem}
                <Pagination.Next
                  onClick={() =>
                    setPage((page) =>
                      page < totalPage ? (page += 1) : totalPage
                    )
                  }
                />
                <Pagination.Last onClick={() => setPage(totalPage - 1)} />
              </Pagination>
            ) : (
              ""
            )}
          </Row>
        ) : (
          ""
        )}
      </Container>
      <EditProduct />
      <ModalOkDelete />
    </>
  );
};

export default Products;
