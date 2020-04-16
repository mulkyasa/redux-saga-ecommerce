const products = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_PRODUCT_SUCCESS':
      return action.products.map((item) => {
        item.sent = true;
        return item
      })
    case 'LOAD_PRODUCT_FAILURE':
    case 'POST_PRODUCT':
      console.log(action)
      return [
        ...state,
        {
          title: action.title,
          rate: action.rate,
          brand: action.brand,
          description: action.description,
          price: action.price,
          detailproduct: action.detailproduct,
          sent: true
        }
      ]
    case 'POST_PRODUCT_SUCCESS':
      return state.map(item => {
        return item
      }) 
    case 'POST_PRODUCT_FAILURE':
    default:
      return state
  }
}

export default products;