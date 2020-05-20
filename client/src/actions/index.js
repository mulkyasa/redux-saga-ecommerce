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
  product,
});

export const postProductFailure = () => ({
  type: "POST_PRODUCT_FAILURE",
});

export const postProductRedux = (
  file,
  title,
  brand,
  description,
  colour,
  capacity,
  price,
  stock
) => ({
  type: "POST_PRODUCT",
  ...(file && { file }),
  title,
  brand,
  description,
  ...(colour instanceof Array && { colour: JSON.stringify(colour) }),
  ...(capacity instanceof Array && {
    capacity: JSON.stringify(capacity),
  }),
  price,
  stock,
});

export const postProduct = (
  file,
  title,
  brand,
  description,
  colour,
  capacity,
  price,
  stock
) => ({
  type: "ADD_PRODUCT",
  file,
  title,
  brand,
  description,
  colour,
  capacity,
  price,
  stock,
});
// end post product data
