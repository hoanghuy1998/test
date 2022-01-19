import React from "react";

const Input2 = ({ err, name, data, onchange, index, title }) => {
  return (
    <>
      <tr
        className={
          err ? "text-center border-2 border-warning" : "text-center border-0"
        }
      >
        <td className="align-center">{index}</td>
        <td className="align-center text-capitalize">{title}</td>
        <td className="align-center">
          <input
            name={name}
            defaultValue={data}
            onChange={onchange}
            className="form-control text-center align-center"
          />
        </td>
      </tr>
    </>
  );
};

export default Input2;
