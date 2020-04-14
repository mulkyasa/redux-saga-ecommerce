import React, { Fragment } from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';

export default function List(props) {
  return (
    <Fragment>
      <Link to="/add" className="no-underline">
        <button className="btn btn-secondary mb-3 btn-block rounded-1">
          <i className="fas fa-plus mr-sm-2"></i>Add New Product
        </button>
      </Link>
      <div className="card-columns row">
        <Item />
      </div>
    </Fragment>
  )
}