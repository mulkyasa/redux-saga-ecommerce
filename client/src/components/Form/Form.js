import React, { Fragment } from "react";

export function Form(props) {
  let { name, label, type, onChange, inputMode } = props;
  if (type === "text")
    return (
      <div className="form-group row">
        <label htmlFor={name} className="col-sm-2 col-form-label">
          {label}
        </label>
        <div className="col-sm-10">
          <input
            id={name}
            className="form-control"
            type="text"
            name={name}
            placeholder={label}
            value={props.value}
            onChange={onChange}
            inputMode={inputMode || "text"}
            autoComplete="off"
          />
        </div>
      </div>
    );
  else if (type === "number")
    return (
      <div className="form-group row">
        <label htmlFor={name} className="col-sm-2 col-form-label">
          {label}
        </label>
        <div className="input-group col-sm-10">
          {label === "Price" ? (
            <div className="input-group-prepend">
              <span className="input-group-text">Rp</span>
            </div>
          ) : null}
          <input
            id={name}
            className="form-control"
            type="number"
            name={name}
            placeholder={label}
            value={props.value}
            min={props.min}
            required={true}
            onChange={onChange}
          />
        </div>
      </div>
    );
  else if (type === "textarea")
    return (
      <div className="form-group row">
        <label htmlFor={label} className="col-sm-2 col-form-label">
          {label}
        </label>
        <div className="col-sm-10">
          <textarea
            id={label}
            className="form-control"
            name={name}
            value={props.value}
            required={true}
            onChange={onChange}
            rows={props.rows}
          />
        </div>
      </div>
    );
  else if (type === "variation")
    return (
      <Fragment>
        <div className="form-group row">
          <label htmlFor={name} className="col-sm-2 col-form-label">
            {label}
          </label>
          <div className="col-sm-10 input-group">
            <input
              id={name}
              className="form-control"
              type="text"
              name={name}
              placeholder={label}
              value={props.input}
              onChange={onChange}
              inputMode="text"
              autoComplete="off"
              aria-describedby={`${name}`}
            />
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={props.addVariation}
                id={`${name}`}
              >
                Add {name}
              </button>
            </div>
          </div>
          <div className="row offset-sm-2">
            {props.value.map((item, index) => (
              <div key={index} className="col-auto">
                <div className="card mt-2">
                  <div className="card-body py-1 px-2">
                    {item}
                    {/* <a href="#" onClick={props.deleteVariation} className="ml-2">
                      <i className="far fa-times-circle text-dark"></i>
                    </a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    );
}
