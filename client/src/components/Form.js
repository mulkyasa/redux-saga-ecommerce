import React from 'react';

export default function Form(props) {
  return (
    <form className="mt-4" onSubmit={this.handleSubmit}>
      <div className="form-group row">
        <label htmlFor="title" className="col-sm-2 col-form-label">
          Title
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleTitleChange}
            className="form-control"
            id="title"
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="rate" className="col-sm-2 col-form-label">
          Rate
        </label>
        <div className="col-sm-10">
          <input
            type="number"
            value={this.state.rate}
            onChange={this.handleRateChange}
            className="form-control"
            id="rate"
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="rate" className="col-sm-2 col-form-label">
          Brand
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            value={this.state.brand}
            onChange={this.handleBrandChange}
            className="form-control"
            id="rate"
          />
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
          <input
            type="number"
            value={this.state.price}
            onChange={this.handlePriceChange}
            className="form-control"
            id="price"
          />
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
    </form>
  )
}