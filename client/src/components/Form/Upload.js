import React, { Component, Fragment } from "react";
import Swal from "sweetalert2";
import Dropzone from "./Dropzone";

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: {},
      image: "",
    };
  }

  onFileAdded = (file) => {
    if (file) {
      if (file.type.match("image.*")) {
        if (file.size <= 3 * Math.pow(10, 6)) {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = (e) => {
            this.setState({
              file,
              image: (
                <span>
                  <img
                    src={e.target.result}
                    title={file.name}
                    style={{
                      height: "10rem",
                      border: "1px solid black",
                      margin: "10px 5px 0 0",
                    }}
                    alt="Uploaded file"
                  />
                </span>
              ),
            });
            this.props.onFileChange(file);
          };
        } else {
          Swal.fire({
            title: "Maximum file size exceeded",
            text: "Please upload an image below 3 MB",
            type: "error",
          });
        }
      } else {
        Swal.fire({
          title: "Wrong file type",
          text: "Please upload an image",
          type: "error",
        });
      }
    }
  };

  render() {
    return (
      <Fragment>
        <label htmlFor="upload" className="col-sm-2 col-form-label">
          Upload Image
        </label>
        <div className="col-sm-4">
          <Dropzone className="form-control-file" onFileAdded={this.onFileAdded} disabled={false} />
        </div>
        <div className="col-sm-4">{this.state.image}</div>
      </Fragment>
    );
  }
}
