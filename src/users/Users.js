import React, { useEffect, useState } from "react";
import userService from "../services/userService";
import { useDispatch, useSelector } from "react-redux";
import ActionTypes from "../store/action";
import Edituser from "./Edituser";
import { toast } from "react-toastify";
import ModalOkDelete from "./../component/ModalOkDelete";

const Users = (props) => {
  const dispatch = useDispatch();
  const isDelete = useSelector((state) => state.auth.isDelete);
  const dataDelete = useSelector((state) => state.auth.dataDelete);
  console.log("isdelete", isDelete);
  //Modal
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadData();
  }, []);
  const loadData = () => {
    userService.list().then((res) => {
      setUsers(res.data);
    });
  };
  const handelOpenEdit = (e, data) => {
    e.preventDefault();
    dispatch({
      type: ActionTypes.GET_USER,
      getUser: data,
    });
  };
  const handleDelete = (e, user) => {
    e.preventDefault();
    dispatch({
      type: ActionTypes.SHOW_DELETE,
      dataDelete: user,
      typeDelete: "user",
    });
  };
  console.log(isDelete);
  useEffect(() => {
    if (isDelete) {
      userService.remove(dataDelete?.id).then((res) => {
        console.log(res);
        if (res.errorCode === 0) {
          toast.success(`Bạn Đã Xóa Thành Công USER ${dataDelete.userName} `);
          loadData();
        } else {
          toast.warning("Bạn Đã Xóa Thất Bại");
        }
        dispatch({
          type: ActionTypes.RESET_ISDLETE,
        });
      });
    }
  }, [isDelete]);
  return (
    <>
      <div className="row" id="table-head">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <div className="buttons ml-auto">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={(e) => handelOpenEdit(e, 0)}
                >
                  <i className="fas fa-plus"></i>
                  Add
                </button>
              </div>
            </div>
            <div className="card-content">
              <div className="table-responsive">
                <table className="table mb-0">
                  <thead className="thead-dark">
                    <tr>
                      <th>Stt</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>phone</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, idx) => (
                      <tr
                        key={user.id}
                        className={
                          dataDelete?.userName === user?.userName &&
                          dataDelete?.email === user?.email
                            ? "bg-danger text-white"
                            : ""
                        }
                      >
                        <td className="text-center">{idx + 1}</td>
                        <td>{user.userName}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td className="text-center">
                          <a
                            href="/#"
                            className="me-1"
                            onClick={(e) => handelOpenEdit(e, user)}
                          >
                            <i className="fas fa-edit text-primary"></i>
                          </a>
                          <a href="/#" onClick={(e) => handleDelete(e, user)}>
                            <i className="fas fa-trash-alt text-danger"></i>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Modal --> */}
      <Edituser />
      <ModalOkDelete />
    </>
  );
};

export default Users;
