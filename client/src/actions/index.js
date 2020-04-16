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

export const postProductFailure = () => ({
  type: "POST_PRODUCT_FAILURE"
});

export const postProductRedux = (
  title,
  rate,
  brand,
  description,
  price,
  detailproduct
) => ({
  type: "POST_PRODUCT",
  title,
  rate,
  brand,
  description,
  price,
  detailproduct,
});

export const postProduct = (
  title,
  rate,
  brand,
  description,
  price,
  detailproduct
) => ({
  type: "ADD_PRODUCT",
  title,
  rate,
  brand,
  description,
  price,
  detailproduct,
});
// end post product data
