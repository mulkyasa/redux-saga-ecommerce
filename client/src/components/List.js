import React, { Fragment } from 'react';
import Item from './Item';

export default function List(props) {
  return (
    <Fragment>
      <button className="btn btn-secondary mb-3 btn-block rounded-1">
        <i className="fas fa-plus mr-sm-2"></i>Add New Product
      </button>
      <div className="card-columns row">
        <Item />
      </div>
    </Fragment>
  )
}