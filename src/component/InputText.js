import React from "react";
import { Form } from "react-bootstrap";
function InputText({ id, label, col, ...state }) {
  const l = col ? `col-${col} mb-3` : "mb-3";
  return (
    <Form.Floating className={l}>
      <Form.Control id={id} {...state} disabled />
      <label
        htmlFor={id}
        className="text-primary text-capitalize "
        required={true}
      >
        {label}
      </label>
    </Form.Floating>
  );
}

export default InputText;
