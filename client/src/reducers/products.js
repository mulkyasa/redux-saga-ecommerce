const products = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_PRODUCT_SUCCESS':
      return action.products.map((item) => {
        item.sent = true;
        return item
      })
    case 'LOAD_PRODUCT_FAILURE':
    case 'POST_PRODUCT':
    return [
      ...state,
      {
        title: action.title,
        rate: action.rate,
        description: action.description,
        price: action.price,
        detailproduct: action.detailproduct,
        sent: true
      }
    ]

    case 'POST_PRODUCT_SUCCESS':
    case 'POST_PRODUCT_FAILURE':
      return state.map((item) => {
        if (item.id === action.id) {
          item.sent = false;
        }
        return item
      })
    default:
      return state
  }
}

export default products;