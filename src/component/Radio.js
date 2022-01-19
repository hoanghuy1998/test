import React from "react";

const Radio = ({ err, data, onchange, array, index, title, name }) => {
  return (
    <>
      <tr
        className={
          err ? "text-center border-2 border-warning" : "text-center border-0"
        }
      >
        <td className="align-center">{index}</td>
        <td className="align-center text-capitalize ">{title}</td>
        <td className="text-start px-4">
          {array.map((x, i) => (
            <div className="custom-control custom-radio" key={i}>
              <input
                name={name}
                defaultChecked={data ? data === x : ""}
                defaultValue={x}
                onChange={onchange}
                type="radio"
                className="custom-control-input sorfby"
                id={x}
              />
              <label
                className="custom-control-label text-capitalize"
                htmlFor={x}
              >
                {x}
              </label>
            </div>
          ))}
        </td>
      </tr>
    </>
  );
};

export default Radio;
