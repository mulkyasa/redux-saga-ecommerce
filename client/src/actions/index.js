// start load todo data
export const loadProductSuccess = (products) => ({
  type: 'LOAD_PRODUCT_SUCCESS',
  products
})

export const loadProductFailure = () => ({
  type: 'LOAD_PRODUCT_FAILURE'
})

export const loadProduct = () => ({
  type: 'LOAD_PRODUCTS'
})
// end load todo data