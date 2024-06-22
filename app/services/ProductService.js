export const ProductService = {
  getProducts: async function () {
    return 'get products';
  },

  getById: async function (id) {
    return 'get product by id';
  },

  postProduct: async function (name) {
    return 'post product';
  },

  updateProduct: async function (name, id) {
    return 'update product';
  },

  deleteProduct: async function () {
    return 'delete product';
  },
}