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
              <div className="my-2">
                <h6 className="text-dark">Color</h6>
                <button className="border bg-white color mr-sm-1"></button>
                <button className="border bg-dark color mr-sm-1"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
