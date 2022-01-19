import React from "react";
class Input extends React.Component {
  render() {
    const { label, labelSizes, inputref, ...orther } = this.props;
    const labelSize = `col-sm-${labelSizes ? labelSizes : 3} col-form-label`;
    return (
      <div>
        <div className="row mb-3">
          <label className={labelSize}>{label}</label>
          <div className="col-sm">
            <input
              ref={inputref}
              {...orther}
              className="form-control"
              id={label}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Input;
