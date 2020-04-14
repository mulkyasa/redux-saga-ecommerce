import React from 'react';
import { Link } from 'react-router-dom';

export default function Item(props) {
  return (
    <div className="col-md-3">
      <Link to="/overview">
        <div className="card">
          <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-pro-select-2019-family_GEO_EMEA?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1567812929188" className="card-img-top" alt="..." />
          <div className="card-body text-dark">
            <h5 className="card-title">iPhone 11 Pro Max</h5>
            <small className="card-text">This is a longer card with supporting.</small>
          </div>
        </div>
      </Link>
    </div>
  );
}
