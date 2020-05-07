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
          image: action.image,
          title: action.title,
          brand: action.brand,
          description: action.description,
          color: action.color,
          price: action.price,
          stock: action.stock,
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