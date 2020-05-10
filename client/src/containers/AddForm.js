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

  colourVariationChange = (event) => {
    this.setState({
      colourInput: event.target.value,
    });
  };

  capacityVariationChange = (event) => {
    this.setState({
      capacityInput: event.target.value,
    });
  };

  colourVariationList = () => {
    this.setState({
      colour: [...this.state.colour, this.state.colourInput],
    });
    console.log(this.state.colour, this.state.colourInput)
    this.setState({
      colourInput: "",
    });
  };

  capacityVariationList = () => {
    this.setState({
      capacity: [...this.state.capacity, this.state.capacityInput],
    });
    this.setState({
      capacityInput: "",
    });
  };

  addColourVariation = () => {
    this.colourVariationList();
  };

  addCapacityVariation = () => {
    this.capacityVariationList();
  };

  deleteColourVariation = (event) => {
    const array = [...this.state.colour];
    const index = array.getParents(5).indexOf(event.target.value);
    console.log(index)

    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ colour: array });
    }

    // event.preventDefault();
    // this.setState((state) => ({
    //   colour: state.colour.slice(0, state.colour.length - 1)
    // }));
  }

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
    let {
      title,
      brand,
      description,
      colour,
      capacity,
      colourInput,
      capacityInput,
      price,
      stock,
    } = this.state;
    let {
      addColourVariation,
      addCapacityVariation,
      colourVariationChange,
      capacityVariationChange,
      deleteColourVariation
    } = this;

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
        addVariation: addColourVariation,
        value: colour,
        input: colourInput,
        onChange: colourVariationChange,
        deleteVariation: deleteColourVariation
      },
      {
        name: "capacity",
        label: "Capacity",
        type: "variation",
        addVariation: addCapacityVariation,
        value: capacity,
        input: capacityInput,
        onChange: capacityVariationChange,
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
      if (form.type === "variation") return <Form key={i} {...form} />;
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
