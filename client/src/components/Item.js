import React from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

export default function Item(props) {
  return (
    <div className="col-md-3">
      <Link to={`/overview/${props.product.id}`}>
        <div className="card shadow-trans">
          <img
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-pro-select-2019-family_GEO_EMEA?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1567812929188"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body text-dark">
            <h5 className="card-title">{props.product.title}</h5>
            <h6>Rp{props.product.price}</h6>
            <div className="text-right">
              <StarRatings
                starRatedColor="#ffce3d"
                rating={props.product.rate}
                starDimension="18px"
                starSpacing="1px"
              />
            </div>
            <br />
            <p className="card-text desc-text">{props.product.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
