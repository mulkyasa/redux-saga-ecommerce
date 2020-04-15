import React, { Component } from "react";
import { Link } from "react-router-dom";
import { postProduct } from "../actions";
import { connect } from "react-redux";

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      rate: "",
      description: "",
      price: "",
      brand: "",
      detailproduct: "",
    };
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  handleRateChange = (event) => {
    this.setState({ rate: event.target.value });
  };

  handleDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  };

  handlePriceChange = (event) => {
    this.setState({ price: event.target.value });
  };

  handleBrandChange = (event) => {
    this.setState({ brand: event.target.value });
  };

  handleDetailChange = (event) => {
    this.setState({ detailproduct: event.target.value });
  };

  handleSubmit = (event) => {
    this.props.postProduct(
      this.state.title,
      this.state.rate,
      this.state.description,
      this.state.price,
      this.state.brand,
      this.state.detail
    );
  };

  render() {
    return (
      <div className="container pt-4">
      {console.log(this.state)}
        <div className="card shadow">
          <div className="card-body">
            <h5 className="mb-0">Add New Product</h5>
            <small className="text-muted">
              Detail your products and make them interested.
            </small>
            <hr />
            <form className="mt-4" onSubmit={this.handleSubmit}>
              <div className="form-group row">
                <label htmlFor="title" className="col-sm-2 col-form-label">
                  Title
                </label>
                <div className="col-sm-10">
                  <input type="text" value={this.state.title} onChange={this.handleTitleChange} className="form-control" id="title" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="rate" className="col-sm-2 col-form-label">
                  Rate
                </label>
                <div className="col-sm-10">
                  <input type="number" value={this.state.rate} onChange={this.handleRateChange} className="form-control" id="rate" />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="description"
                  className="col-sm-2 col-form-label"
                >
                  Description
                </label>
                <div className="col-sm-10">
                  <textarea
                    className="form-control"
                    value={this.state.description}
                    onChange={this.handleDescriptionChange}
                    id="description"
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="price" className="col-sm-2 col-form-label">
                  Price
                </label>
                <div className="input-group col-sm-10">
                  <div className="input-group-prepend">
                    <div className="input-group-text">Rp</div>
                  </div>
                  <input type="number" value={this.state.price} onChange={this.handlePriceChange} className="form-control" id="price" />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="detail-product"
                  className="col-sm-2 col-form-label"
                >
                  Detail Product
                </label>
                <div className="col-sm-10">
                  <textarea
                    className="form-control"
                    value={this.state.detailproduct}
                    onChange={this.handleDetailChange}
                    id="detail-product"
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <button type="submit" value="Submit" className="btn btn-success">
                <i className="fa fa-save mr-sm-2"></i>Save
              </button>
              <Link to="/">
                <button className="btn">Cancel</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  postProduct: (title, rate, description, price, brand, detailproduct) =>
    dispatch(
      postProduct(title, rate, description, price, brand, detailproduct)
    ),
});

export default connect(
  null,
  mapDispatchToProps
)(AddForm)
