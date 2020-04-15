import React, { Fragment, Component } from 'react';
import Item from '../components/Item';
import { Link } from 'react-router-dom';
import { loadProduct } from '../actions';
import { connect } from 'react-redux';

class List extends Component {
  componentDidMount() {
    this.props.loadProduct()
  }

  render() {
    const listItems = this.props.products.map((item, index) => 
      <Item key={index} product={{...item}} />
    )

    return (
      <Fragment>
        <Link to="/add" className="no-underline">
          <button className="btn btn-secondary mb-3 btn-block rounded-1">
            <i className="fas fa-plus mr-sm-2"></i>Add New Product
          </button>
        </Link>
        <div className="card-columns row">
          {listItems}
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.products
})

const mapDispatchToProps = (dispatch) => ({
  loadProduct: () => dispatch(loadProduct())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)