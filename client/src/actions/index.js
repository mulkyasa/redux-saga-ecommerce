// start load product data
export const loadProductSuccess = (products) => ({
  type: "LOAD_PRODUCT_SUCCESS",
  products,
});

export const loadProductFailure = () => ({
  type: "LOAD_PRODUCT_FAILURE",
});

export const loadProduct = () => ({
  type: "LOAD_PRODUCTS",
});
// end load product data

// start post product data
export const postProductSuccess = (product) => ({
  type: "POST_PRODUCT_SUCCESS",
  product
});

export const postProductFailure = (id) => ({
  type: "POST_PRODUCT_FAILURE",
  id
});

export const postProductRedux = (
  id,
  title,
  rate,
  description,
  price,
  detailproduct
) => ({
  type: "POST_PRODUCT",
  id,
  title,
  rate,
  description,
  price,
  detailproduct,
});

export const postProduct = (
  title,
  rate,
  description,
  price,
  detailproduct
) => ({
  type: "ADD_PRODUCT",
  title,
  rate,
  description,
  price,
  detailproduct,
});
// end post product data
