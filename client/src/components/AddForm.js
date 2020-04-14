import React from 'react';
import { Link } from 'react-router-dom';

export default function Item(props) {
  return (
    <div className="container pt-4">
      <div className="card shadow">
        <div className="card-body">
          <h5 className="mb-0">
            Add New Product
          </h5>
          <small className="text-muted">Detail your products and make them interested.</small>
          <hr/>
          <form className="mt-4">
            <div className="form-group row">
              <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="title" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="rate" className="col-sm-2 col-form-label">Rate</label>
              <div className="col-sm-10">
                <input type="number" className="form-control" id="rate" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
              <div className="col-sm-10">
                <textarea className="form-control" id="description" rows="3"></textarea>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
              <div className="input-group col-sm-10">
                <div className="input-group-prepend">
                  <div className="input-group-text">Rp</div>
                </div>
                <input type="number" className="form-control" id="price" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="detail-product" className="col-sm-2 col-form-label">Detail Product</label>
              <div className="col-sm-10">
                <textarea className="form-control" id="detail-product" rows="3"></textarea>
              </div>
            </div>
            <button className="btn btn-success">
              <i className="fa fa-save mr-sm-2"></i>Save
            </button>
            <Link to="/">
              <button className="btn">
                Cancel
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}