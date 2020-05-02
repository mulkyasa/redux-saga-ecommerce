import React from "react";

export default function Overview(props) {
  return (
    <div className="container pt-4">
      <div className="card">
        <div className="card-body">
          <div className="media">
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-pro-select-2019-family_GEO_EMEA?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1567812929188"
              className="mr-3 w-25"
              alt="..."
            />
            <div className="media-body">
              <h5 className="my-0">iPhone 11 Pro Max</h5>
              <small className="text-muted">Brand iPhone</small>
              <div className="bg-light my-2">
                <p className="h4 text-dark p-2 ml-2">Rp18.900.000</p>
              </div>
              <div className="row my-3">
                <div className="col-2">
                  <p className="text-dark mb-1">Color</p>
                </div>
                <div className="col-10">
                  <button className="border bg-white color mr-sm-1 align-middle"></button>
                  <button className="border bg-dark color mr-sm-1 align-middle"></button>
                </div>
              </div>
              <div className="row my-3">
                <div className="col-2">
                  <p className="text-dark mb-1">Capacity</p>
                </div>
                <div className="col-10">
                  <button className="btn btn-sm btn-outline-secondary mr-sm-1">256GB</button>
                  <button className="btn btn-sm btn-outline-secondary mr-sm-1">128GB</button>
                </div>
              </div>
              <div className="row my-3">
                <div className="col-2">
                  <p className="text-dark mb-1">Qty</p>
                </div>
                <div className="col-10">
                  <input type="number" className="form-control w-25" />
                </div>
              </div>
              <button className="btn btn-outline-dark px-4 my-2">
                <i className="fas fa-shopping-cart mr-sm-2"></i>Buy Now
              </button>
              <hr className="mt-4" />
            </div>
          </div>
          <ul className="nav nav-tabs mt-3">
            <li className="nav-item">
              <a className="nav-link text-dark" href="/">Product detail</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/">Testimonial</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
