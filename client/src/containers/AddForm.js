import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { postProduct } from "../actions";
import { connect } from "react-redux";
import { Form } from "../components/Form/Form";
import Upload from "../components/Form/Upload";
import Navbar from "../components/Navbar";

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: {},
      title: "",
      brand: "",
      description: "",
      colourInput: "",
      colour: [],
      capacityInput: "",
      capacity: [],
      price: "",
      stock: "",
    };
  }

  handleFileChange = (file) => {
    this.setState({ file });
  };

  handleVariationChange = (event) => {
    this.setState({
      colourInput: event.target.value,
      capacityInput: event.target.value
    });
  };

  variationList = () => {
    this.setState({
      colour: [...this.state.colour, this.state.colourInput],
      capacity: [...this.state.capacity, this.state.capacityInput]
    });
    this.setState({
      colourInput: "",
      capacity: ""
    });
  };

  addVariation = () => {
    this.variationList();
  };

  handleInputChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.postProduct({
      ...this.state,
    });
  };

  render() {
    let { title, brand, description, colour, capacity, colourInput, capacityInput, price, stock } = this.state;

    let forms = [
      { type: "file" },
      {
        name: "title",
        label: "Title",
        type: "text",
        value: title,
      },
      {
        name: "brand",
        label: "Brand",
        type: "text",
        value: brand,
      },
      {
        name: "description",
        label: "Description",
        type: "textarea",
        rows: 8,
        value: description,
      },
      {
        name: "colour",
        label: "Colour",
        type: "variation",
        addVariation: this.addVariation,
        value: colour,
        input: colourInput
      },
      {
        name: "capacity",
        label: "Capacity",
        type: "variation",
        addVariation: this.addVariation,
        value: capacity,
        input: capacityInput
      },
      {
        name: "price",
        label: "Price",
        type: "number",
        inputMode: "numeric",
        min: 0,
        value: price,
      },
      {
        name: "stock",
        label: "Stock",
        type: "number",
        min: 0,
        value: stock,
      },
    ];

    let formItems = forms.map((form, i) => {
      if (form.type === "file")
        return (
          <div key={i} className="form-group row">
            <Upload onFileChange={this.handleFileChange} />
          </div>
        );
      if (form.type === "variation")
        return (
          <Form key={i} {...form} onChange={this.handleVariationChange} />
        );
      return <Form key={i} {...form} onChange={this.handleInputChange} />;
    });

    return (
      <Fragment>
        <Navbar />
        <div className="container pt-3">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="mb-0">Add New Product</h5>
              <small className="text-muted">Describe your product</small>
              <hr />
              <form className="mt-4" onSubmit={this.handleSubmit}>
                {formItems}
                <button type="submit" className="btn btn-success">
                  Save
                </button>
                <Link to="/">
                  <button type="button" className="btn">
                    Cancel
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  postProduct: (item) => dispatch(postProduct(item)),
});

export default connect(null, mapDispatchToProps)(AddForm);
