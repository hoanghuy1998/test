import React from "react";

const CheckBox = ({ err, name, array, data, onchange, index, title }) => {
  return (
    <>
      <tr
        className={
          err ? "text-center border-2 border-warning" : "text-center border-0"
        }
      >
        <td className="align-center">{index}</td>
        <td className="align-center text-capitalize">{title}</td>
        <td className="text-start px-4">
          {array.map((x, i) => (
            <div className="custom-control custom-checkbox" key={i}>
              <input
                name={name}
                defaultChecked={data?.find((t) => t === x)}
                defaultValue={x}
                onChange={onchange}
                type="checkbox"
                className="custom-control-input type"
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

export default CheckBox;
