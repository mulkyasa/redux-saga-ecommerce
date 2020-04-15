const products = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_PRODUCT_SUCCESS':
      return action.products.map((item) => {
        item.sent = true;
        return item
      })
    case 'LOAD_TODO_FAILURE':
    default:
      return state
  }
}

export default products;